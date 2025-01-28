"use client";

import { signIn } from "next-auth/react";
import { useToast } from "../hooks/use-toast";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const SignUpErrorMessageMapper: Record<string, string> = {
  EMAIL_EXISTS: "이미 존재하는 아이디입니다.",
  VALIDATION_ERROR: "이름, 아이디, 비밀번호가 입력되지 않았습니다.",
  INTERNAL_SERVER_ERROR: "서버 오류가 발생했습니다.",
};

const SignUpPage = () => {
  const { toast } = useToast();

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    const result = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      const errorCode = await result.json().then((data) => data.code);

      toast({
        title: "회원가입 실패",
        description: SignUpErrorMessageMapper[errorCode] || "알 수 없는 오류",
        type: "foreground",
        variant: "destructive",
      });
      return;
    }

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const name = data.get("name") as string;

    if (!name || !email || !password) {
      toast({
        title: "회원가입 실패",
        description: "이름, 아이디, 비밀번호가 입력되지 않았습니다.",
        type: "foreground",
        variant: "destructive",
      });
      return;
    }

    if (password !== data.get("password-confirm")) {
      toast({
        title: "회원가입 실패",
        description: "비밀번호 확인이 일치하지 않습니다.",
        type: "foreground",
        variant: "destructive",
      });
      return;
    }

    handleSignUp(name, email, password);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <section className="py-32">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow bg-card">
                <div className="mb-6 flex flex-col items-center">
                  <img
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="mb-7 h-10 w-auto"
                  />
                  <p className="mb-2 text-2xl font-bold">퍼즐헌트 팀 등록</p>
                  <p className="text-muted-foreground">
                    추러스 퍼즐헌트에 가입해보세요.
                  </p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <div className="grid gap-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="팀 이름"
                          required
                          name="name"
                        />
                      </div>
                      <Input
                        placeholder="아이디"
                        required
                        id="email"
                        name="email"
                      />
                      <div>
                        <Input
                          type="password"
                          placeholder="비밀번호"
                          required
                          id="password"
                          name="password"
                        />
                      </div>
                      <div>
                        <Input
                          type="password"
                          placeholder="비밀번호 확인"
                          required
                          id="password-confirm"
                          name="password-confirm"
                        />
                      </div>
                      <Button type="submit" className="mt-2 w-full">
                        회원가입
                      </Button>
                    </div>
                    <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                      <p>이미 계정이 있으신가요? </p>
                      <a href="/login" className="font-medium text-primary">
                        로그인
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUpPage;
