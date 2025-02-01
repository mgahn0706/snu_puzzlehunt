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

const StoryPage = () => {
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
                  <BreadcrumbPage>스토리</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <section className="py-4 px-4 bg-base-200 rounded-xl">
            <div className="container max-w-3xl">
              <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
                스토리
              </h1>
            </div>
            <span className="text-xl font-medium">
              {" "}
              옛날 옛적에 퍼즐을 좋아하는 사람들이 모여 퍼즐헌트를 만들었습니다.{" "}
            </span>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default StoryPage;
