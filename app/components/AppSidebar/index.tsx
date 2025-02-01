"use client";

import type * as React from "react";
import {
  Bell,
  BookHeart,
  CircleHelp,
  Cpu,
  Home,
  Info,
  Languages,
  Palette,
  Scale,
  School,
  ScrollText,
  Sprout,
  Trophy,
  Users,
} from "lucide-react";

import { NavPuzzle } from "./NavPuzzle";
import { NavUser } from "./NavUser";
import { PuzzlehuntSwitcher } from "./PuzzlehuntSwitcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../ui/sidebar";
import { useSession } from "next-auth/react";
import { NavMenu } from "./NavMenu";
import { NavLogin } from "./NavLogin";
import useGetUserById from "@/app/hooks/api/useGetUserById";
import useAvailablePuzzles from "@/app/hooks/useAvailablePuzzles";
import { CATEGORIES, PUZZLES } from "@/app/fixtures/puzzles";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  puzzlehunts: [
    {
      title: "교양의 세계",
      logo: School,
      subtitle: "2025 추러스 퍼즐헌트",
    },
  ],

  menus: [
    {
      name: "홈",
      url: "/",
      icon: Home,
    },
    {
      name: "퍼즐헌트가 무엇인가요?",
      url: "/guide",
      icon: Info,
    },
    {
      name: "규칙",
      url: "/rules",
      icon: Scale,
    },
    {
      name: "스토리",
      url: "/story",
      icon: ScrollText,
    },
    {
      name: "리더보드",
      url: "/leaderboard",
      icon: Trophy,
    },
    {
      name: "FAQ",
      url: "/faq",
      icon: CircleHelp,
    },
    {
      name: "공지사항",
      url: "/notices",
      icon: Bell,
    },
    {
      name: "진행 후기",
      url: "/wrap-up",
      icon: BookHeart,
      isLocked: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();

  const { data: userData } = useGetUserById({ id: session?.user?.id });

  const { availablePuzzleIds } = useAvailablePuzzles({
    solvedPuzzleIds: userData?.solvedPuzzleIds ?? [],
  });

  const puzzles = CATEGORIES["2025"]
    .filter((category) =>
      category.puzzleIds.some((id) => availablePuzzleIds.includes(id))
    )
    .map((category) => ({
      ...category,
      puzzleIds: category.puzzleIds.filter((id) =>
        availablePuzzleIds.includes(id)
      ),
    }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <PuzzlehuntSwitcher puzzlehunts={data.puzzlehunts} />
      </SidebarHeader>
      <SidebarContent>
        <NavPuzzle items={puzzles} />
        <SidebarSeparator />
        <NavMenu menus={data.menus} />
      </SidebarContent>

      <SidebarFooter>
        {status === "authenticated" ? (
          <NavUser
            user={{
              name: session.user?.name || data.user.name,
              email: session.user?.email || data.user.email,
              avatar: data.user.avatar,
            }}
          />
        ) : status === "unauthenticated" ? (
          <NavLogin />
        ) : null}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
