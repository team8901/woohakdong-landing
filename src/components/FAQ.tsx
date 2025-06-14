import { useTheme } from "@/components/theme-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_EMAIL } from "@/lib/constants";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "어떻게 도입할 수 있나요?",
    answer:
      "우학동 도입 문의를 통해 기존 이메일 연동으로 바로 시작 가능합니다.",
    value: "item-1",
  },
  {
    question: "비용이 어떻게 되나요?",
    answer: "우학동은 현재 무료로 이용 가능합니다.",
    value: "item-2",
  },
];

export const FAQ = () => {
  const { theme } = useTheme();

  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br text-transparent bg-clip-text ${
          theme === "dark"
            ? "from-white  to-white/80"
            : "from-black  to-black/80"
        }`}
      >
        자주 묻는 질문
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        더 궁금한 점이 있으신가요?{" "}
        <a
          rel="noreferrer noopener"
          href={`mailto:${CONTACT_EMAIL}?subject=[우학동 도입 문의]`}
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          문의하기
        </a>
      </h3>
    </section>
  );
};
