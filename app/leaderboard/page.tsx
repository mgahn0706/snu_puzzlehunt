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
import { useEffect, useState } from "react";

type UsersResponse = Array<{
  name: string;
  memberNames: string[];
  solvedPuzzleCount: number;
}>;

export default function AccountPage() {
  const [users, setUsers] = useState<UsersResponse>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`/api/users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

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
                  <BreadcrumbPage>리더보드</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <section className="py-4 px-4 bg-base-200 rounded-xl">
            <div className="container max-w-3xl">
              {users.map((user) => (
                <div key={user.name} className="flex flex-col gap-1 my-4">
                  <span className="text-lg font-medium">Team {user.name}</span>
                  <span className="text-lg font-medium">
                    팀원 {user.memberNames.length}명
                  </span>
                  <span className="text-lg font-medium">
                    푼 문제 {user.solvedPuzzleCount}개
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
