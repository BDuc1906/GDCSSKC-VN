import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  return (
    <Section>
      <SectionTitle subtitle="Giải đáp các thắc mắc phổ biến về hội viên, hội phí và hoạt động của Hội.">
        Câu hỏi thường gặp
      </SectionTitle>

      <div className="mx-auto max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}