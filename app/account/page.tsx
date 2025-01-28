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
import { useEffect } from "react";
import { Badge } from "../components/ui/badge";

export default function AccountPage() {
  const { data } = useSession();

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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <section className="py-4 px-4 bg-base-200 rounded-xl">
            <div className="container max-w-3xl">
              <span className="text-lg font-medium">
                Team {data?.user.name}
              </span>
            </div>
          </section>
          <section className="py-4 px-4 bg-base-200 rounded-xl flex gap-2">
            <span className="text-lg font-medium">팀원</span>
            <Badge variant="secondary">{data?.user.memberNames.length}</Badge>

            {data?.user.memberNames.map((member) => (
              <span key={member}>{member}</span>
            ))}
          </section>
          <section className="py-4 px-4 bg-base-200 rounded-xl flex gap-2">
            <span className="text-lg font-medium">푼 문제</span>
            <Badge variant="secondary">
              {data?.user.solvedPuzzleIds.length}
            </Badge>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
