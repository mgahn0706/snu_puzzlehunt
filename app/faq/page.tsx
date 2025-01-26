import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
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

const faqs = [
  {
    question: "퍼즐헌트가 뭐죠?",
    answer:
      "퍼즐헌트는 미궁게임과 비슷한 퍼즐 게임으로, 미궁보다 좀 더 협력을 강조한 콘텐츠입니다. 자세한 내용은 퍼즐헌트가 무엇인가요? 페이지를 참고해주세요.",
  },
  {
    question: "퍼즐을 도저히 못풀겠어요. 도와주세요!",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "풀어야할 퍼즐은 총 몇 개인가요?",
    answer: "약 25개의 퍼즐이 준비되어 있습니다.",
  },
  {
    question: "문제에 오류가 있는 것 같습니다.",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
  {
    question: "이 퍼즐헌트를 만든 사람들은 누구인가요?",
    answer:
      "서울대학교 중앙 추리동아리 추러스에서 운영하고 있습니다. 제작자는 안민규입니다.",
  },
  {
    question: "빨리 풀면 상품이 있나요?",
    answer: "빨리 풀었다는 뿌듯함?",
  },
  {
    question: "직접 학교에 가서 풀어야하는 문제가 있나요?",
    answer: "적어도 '이번' 퍼즐헌트에서는 없습니다 :)",
  },
  {
    question: "가입 기한이 존재하나요?",
    answer:
      "아니오, 하지만 다음 퍼즐헌트가 시작될 때는 정답을 모두 공개하고 기존 기록들은 초기화할 예정이니 참고해주세요.",
  },
];

const FaqPage = () => {
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
                  <BreadcrumbPage>FAQ</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <section className="py-4 px-4 bg-base-200 rounded-xl">
            <div className="container max-w-3xl">
              <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
                자주 묻는 질문
              </h1>
              {faqs.map((faq, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default FaqPage;
