"use client";

import { Separator } from "@/app/components/ui/separator";
import { AppSidebar } from "../../AppSidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "../../ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../../ui/sidebar";
import { PUZZLES } from "@/app/fixtures/puzzles";
import { PuzzleAnswerForm } from "../PuzzleAnswerForm";
import useGetUserById from "@/app/hooks/api/useGetUserById";
import useAvailablePuzzles from "@/app/hooks/useAvailablePuzzles";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface PuzzleLayoutProps {
  children: React.ReactNode;
  id: string;
}

export default function PuzzleLayout({ children, id }: PuzzleLayoutProps) {
  const { data: session, status } = useSession();

  const { data: userData, loading } = useGetUserById({ id: session?.user?.id });

  const { availablePuzzleIds } = useAvailablePuzzles({
    solvedPuzzleIds: userData?.solvedPuzzleIds ?? [],
  });

  const puzzle = PUZZLES[2025][id];

  if (status === "loading" || loading) {
    return null;
  }

  if (
    !availablePuzzleIds.includes(id) &&
    status === "authenticated" &&
    !loading
  ) {
    redirect("/");
  }

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
                  <BreadcrumbPage>{puzzle.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full">
          <div className="container flex justify-between w-full gap-4">
            <section className="py-4 px-4 bg-base-200 rounded-xl">
              <div className="container max-w-3xl flex flex-col gap-4">
                <span className="text-4xl font-medium">{puzzle.title}</span>
                <span className="text-xl text-base-content-secondary">
                  {puzzle.flavorText}
                </span>
              </div>
            </section>
            <PuzzleAnswerForm puzzleId={id} />
          </div>
          <Separator className="my-4" />
          <div className="container max-w-3xl flex flex-col gap-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
