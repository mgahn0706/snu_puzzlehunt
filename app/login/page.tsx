"use client";

import { useSession } from "next-auth/react";
import { LoginForm } from "../components/login/LoginForm";
import { redirect } from "next/navigation";

export default function SignIn() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
