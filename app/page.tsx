"use client";

import { signIn } from "next-auth/react";
import { AppSidebar } from "./components/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "./components/ui/breadcrumb";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";

export default function Page() {
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
                  <BreadcrumbPage>홈</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 600"
                className="min-h-full min-w-full"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="1"
                      strokeOpacity={0.5}
                    />
                  </pattern>
                </defs>
                <rect width="1400" height="600" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative">
              <div className="absolute left-20 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
              <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
                <div className="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
                  <div className="flex flex-col items-start text-left">
                    <div className="max-w-sm">
                      <h6 className="mt-6 text-pretty text-sm font-semibold">
                        2025 추러스 퍼즐헌트
                      </h6>
                      <h1 className="mb-6 text-pretty text-4xl font-bold lg:text-6xl">
                        교양의 세계
                      </h1>
                      <Button onClick={() => signIn()}>시작</Button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
                    {integrations.map((line, i) => (
                      <div
                        key={i}
                        className="flex gap-x-24 odd:-translate-x-24"
                      >
                        {line.map((integration) => (
                          <div
                            key={integration.id}
                            className="size-24 rounded-xl border border-background bg-background shadow-xl"
                          >
                            <div className="h-full w-full bg-muted/20 p-4">
                              {integration.icon}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const integrations = [
  [
    {
      id: "integration-1",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-1.svg"
        />
      ),
    },
    {
      id: "integration-2",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-2.svg"
        />
      ),
    },
    {
      id: "integration-3",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-3.svg"
        />
      ),
    },
    {
      id: "integration-4",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-4.svg"
        />
      ),
    },
    {
      id: "integration-5",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-5.svg"
        />
      ),
    },
  ],
  [
    {
      id: "integration-6",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-6.svg"
        />
      ),
    },
    {
      id: "integration-7",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-1.svg"
        />
      ),
    },
    {
      id: "integration-8",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-2.svg"
        />
      ),
    },
    {
      id: "integration-9",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-3.svg"
        />
      ),
    },
    {
      id: "integration-10",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-4.svg"
        />
      ),
    },
  ],
  [
    {
      id: "integration-11",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-5.svg"
        />
      ),
    },
    {
      id: "integration-12",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-6.svg"
        />
      ),
    },
    {
      id: "integration-13",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-1.svg"
        />
      ),
    },
    {
      id: "integration-14",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-2.svg"
        />
      ),
    },
    {
      id: "integration-15",
      icon: (
        <img
          alt="Integration"
          src="https://shadcnblocks.com/images/block/block-3.svg"
        />
      ),
    },
  ],
];
