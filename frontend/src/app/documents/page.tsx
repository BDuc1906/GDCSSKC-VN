import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import DocumentList from "@/components/documents/DocumentList";
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
        <div className="space-y-10">
          {documentGroups.map((group) => (
            <DocumentList key={group.id} group={group} />
          ))}
        </div>
      </Section>
    </>
  );
}