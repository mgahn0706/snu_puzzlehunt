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
  puzzles: [
    {
      title: "언어와 문학",
      url: "/",
      icon: Languages,
      items: [
        {
          title: "한국어와 문학",
          url: "/",
        },
      ],
    },
    {
      title: "문화와 예술",
      url: "/guide",
      icon: Palette,
      items: [
        {
          title: "예술과 디자인",
          url: "/",
        },
      ],
    },
    {
      title: "인간과 사회",
      url: "#",
      icon: Users,
      items: [
        {
          title: "심리학개론",
          url: "#",
        },
      ],
    },
    {
      title: "자연과 기술",
      url: "#",
      icon: Cpu,
      items: [
        {
          title: "컴퓨터 과학",
          url: "#",
        },
      ],
    },
    {
      title: "생명과 환경",
      url: "#",
      icon: Sprout,
      items: [
        {
          title: "생명과학",
          url: "#",
        },
      ],
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
  const { data: userData, status } = useSession();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <PuzzlehuntSwitcher puzzlehunts={data.puzzlehunts} />
      </SidebarHeader>
      <SidebarContent>
        <NavPuzzle items={data.puzzles} />
        <SidebarSeparator />
        <NavMenu menus={data.menus} />
      </SidebarContent>

      <SidebarFooter>
        {status === "authenticated" ? (
          <NavUser
            user={{
              name: userData.user?.name || data.user.name,
              email: userData.user?.email || data.user.email,
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
