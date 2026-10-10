import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHero from "@/components/ui/PageHero";
import DocumentList from "@/components/documents/DocumentList";
import { documentGroups } from "@/data/documentGroups";

export const metadata = { title: "Quản trị tổ chức" };

const governanceGroupIds = [
  "branch",
  "inter-branch",
  "committees",
  "legal-entity",
  "reporting",
  "appointment",
];

export default function GovernancePage() {
  const groups = documentGroups.filter((group) =>
    governanceGroupIds.includes(group.id),
  );

  return (
    <>
      <PageHero
        title="Quản trị Tổ chức của Hội"
        description="Các quy định về thành lập, giải thể, bổ nhiệm và chế độ báo cáo trong hệ thống tổ chức Hội."
      />

      <Section>
        <SectionTitle subtitle="Quy định, biểu mẫu, hướng dẫn hiện hành.">
          Văn bản quản trị
        </SectionTitle>
        <div className="space-y-10">
          {groups.map((group) => (
            <DocumentList key={group.id} group={group} />
          ))}
        </div>
      </Section>
    </>
  );
}