"use client";

import { LogIn } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { signIn } from "next-auth/react";

export function NavLogin() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="lg w-full" onClick={() => signIn()}>
          <LogIn />
          <span className="ml-2 hidden sm:inline">로그인</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
