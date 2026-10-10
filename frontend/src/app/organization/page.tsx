import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import OrganizationTable from "@/components/organization/OrganizationTable";
import { organizationUnits } from "@/data/organization";
import type { OrganizationType } from "@/types";

export const metadata = { title: "Hệ thống tổ chức" };

const orderedTypes: OrganizationType[] = [
  "central-office",
  "inter-branch",
  "branch",
  "institute-center",
  "representative-office",
  "member-business",
];

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        title="Quản trị Hệ thống tổ chức Hội"
        description="Cơ sở dữ liệu về Liên Chi hội, Chi hội, cơ quan Trung ương Hội, Viện, Trung tâm, Văn phòng đại diện và Doanh nghiệp hội viên."
      />

      <Section>
        <div className="space-y-10">
          {orderedTypes.map((type) => (
            <OrganizationTable
              key={type}
              type={type}
              units={organizationUnits}
            />
          ))}
        </div>
      </Section>
    </>
  );
}