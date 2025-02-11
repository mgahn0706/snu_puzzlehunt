"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/components/ui/collapsible";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/app/components/ui/sidebar";
import { Category } from "@/app/types";
import { PUZZLES } from "@/app/fixtures/puzzles";
import { usePathname } from "next/navigation";

export function NavPuzzle({ items }: { items: Category[] }) {
  const pathname = usePathname();

  const currentCategoryId = (pathname.split("/")[2] ?? "")[0];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>퍼즐</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={currentCategoryId === item.id}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item.puzzleIds && item.puzzleIds.length > 0 && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.puzzleIds.map((puzzleId) => {
                    const puzzle = PUZZLES[2025][puzzleId];

                    if (!puzzle) {
                      return null;
                    }

                    return (
                      <SidebarMenuSubItem key={puzzle.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={`/puzzle/${puzzle.id}`}>
                            <span>{puzzle.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
