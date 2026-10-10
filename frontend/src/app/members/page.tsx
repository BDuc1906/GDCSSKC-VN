import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHero from "@/components/ui/PageHero";
import DocumentList from "@/components/documents/DocumentList";
import { documentGroups } from "@/data/documentGroups";

export const metadata = { title: "Hội viên" };

const memberGroupIds = ["membership", "congress"];

export default function MembersPage() {
  const groups = documentGroups.filter((group) =>
    memberGroupIds.includes(group.id),
  );

  return (
    <>
      <PageHero
        title="Hội viên"
        description="Quy định kết nạp hội viên tổ chức/tập thể, hội viên cá nhân và quy định về Đại hội, bầu cử."
      />

      <Section>
        <SectionTitle subtitle="Hội viên tổ chức/tập thể và hội viên cá nhân.">
          Quy định về hội viên
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