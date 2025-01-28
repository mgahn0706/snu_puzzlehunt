"use client";

import { signIn } from "next-auth/react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/hooks/use-toast";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.status === 401) {
      toast({
        title: "로그인 실패",
        description: "아이디 또는 비밀번호가 일치하지 않습니다.",
        type: "foreground",
        variant: "destructive",
      });
      return;
    }

    router.push("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-balance text-muted-foreground">
                  추러스 퍼즐헌트에 로그인 해주세요.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">팀 아이디</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="example@snu.ac.kr"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">비밀번호</Label>
                </div>
                <Input id="password" type="password" required name="password" />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
              <div className="text-center text-sm">
                아직 팀 계정이 없나요?{" "}
                <a href="/signup" className="underline underline-offset-4">
                  팀 등록
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/next.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
