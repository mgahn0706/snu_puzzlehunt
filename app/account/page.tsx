"use client";

import { Separator } from "@radix-ui/react-separator";
import { AppSidebar } from "../components/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "../components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { Input } from "../components/ui/input";
import { useSession } from "next-auth/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MAXIMUM_MEMBERS_PER_TEAM } from "../fixtures/puzzlehunt";
import { useToast } from "../hooks/use-toast";
import useGetUserById from "../hooks/api/useGetUserById";
import { X } from "lucide-react";

export default function AccountPage() {
  const { toast } = useToast();
  const { data: session } = useSession();

  const { data, refetch } = useGetUserById({ id: session?.user.id });

  const handleDeleteMember = async (memberName: string) => {
    if (!data) return;

    const response = await fetch(`/api/team-member`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
      body: JSON.stringify({
        id: session?.user.id,
        newTeamMembers: data.memberNames.filter((name) => name !== memberName),
      }),
    });

    if (!response.ok) {
      toast({
        title: `${memberName} 팀원 삭제에 실패했습니다.`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: `${memberName} 팀원이 삭제되었습니다.`,
    });

    refetch();

    return;
  };

  const handleAddMember = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newMemberName = formData.get("newMemberName") as string;
    if (!newMemberName) return;
    if (!data) return;
    if (data.memberNames.length >= MAXIMUM_MEMBERS_PER_TEAM) return;

    const response = await fetch(`/api/team-member`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
      body: JSON.stringify({
        id: session?.user.id,
        newTeamMembers: [...data.memberNames, newMemberName],
      }),
    });

    if (!response.ok) {
      toast({
        title: `${newMemberName} 팀원 추가에 실패했습니다.`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: `${newMemberName} 팀원이 추가되었습니다.`,
    });

    refetch();

    return;
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>계정 설정</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {data && (
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <section className="py-4 px-4 bg-base-200 rounded-xl">
              <div className="container max-w-3xl">
                <span className="text-lg font-medium">Team {data?.name}</span>
              </div>
            </section>
            <section className="py-4 px-4 bg-base-200 rounded-xl flex gap-2 flex-col">
              <div className="flex gap-2">
                <span className="text-lg font-medium">팀원</span>
                <Badge variant="secondary">{data?.memberNames.length}</Badge>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-2 gap-2">
                <form onSubmit={handleAddMember} className="flex w-full gap-2">
                  <Input
                    placeholder="새 팀원 명"
                    name="newMemberName"
                    disabled={
                      data.memberNames.length >= MAXIMUM_MEMBERS_PER_TEAM
                    }
                  />
                  <Button
                    variant="outline"
                    type="submit"
                    disabled={
                      data.memberNames.length >= MAXIMUM_MEMBERS_PER_TEAM
                    }
                  >
                    팀원 추가
                  </Button>
                </form>
              </div>

              {data.memberNames.map((member) => (
                <div key={member} className="flex items-center gap-2">
                  <span key={member}>{member}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDeleteMember(member)}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </section>
            <section className="py-4 px-4 bg-base-200 rounded-xl flex gap-2">
              <span className="text-lg font-medium">푼 문제</span>
              <Badge variant="secondary">{data.solvedPuzzleIds.length}</Badge>
            </section>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
