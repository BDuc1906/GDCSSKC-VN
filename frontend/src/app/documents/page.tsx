import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import DocumentFilter from "@/components/documents/DocumentFilter";
import { documentGroups } from "@/data/documentGroups";

export const metadata = { title: "Văn bản" };

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        title="Văn bản quan trọng của Hội"
        description="Điều lệ, Quyết định thành lập và các văn bản quan trọng của Ban Chấp hành, Ban Thường vụ."
      />

      <Section>
        <DocumentFilter groups={documentGroups} />
      </Section>
    </>
  );
}