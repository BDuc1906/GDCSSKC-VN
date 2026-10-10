import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHero from "@/components/ui/PageHero";
import LeaderCard from "@/components/leadership/LeaderCard";
import EmptyState from "@/components/ui/EmptyState";
import {
  executiveBoard,
  standingCommittee,
  unitLeaders,
} from "@/data/board";

export const metadata = { title: "Ban lãnh đạo Hội" };

const unitTypeLabels: Record<string, string> = {
  committee: "Ban chuyên môn",
  "representative-office": "Văn phòng đại diện",
  "inter-branch": "Liên Chi hội",
  branch: "Chi hội",
  "institute-center": "Viện / Trung tâm",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Ban lãnh đạo Hội"
        description="Cơ sở dữ liệu cập nhật về Ban Chấp hành, Ban Thường vụ và Lãnh đạo các đơn vị trực thuộc Hội."
      />

      <Section>
        <SectionTitle subtitle="Danh sách Ủy viên Ban Chấp hành Trung ương Hội.">
          Ban Chấp hành TW Hội
        </SectionTitle>
        {executiveBoard.length === 0 ? (
          <EmptyState message="Cơ sở dữ liệu đang được cập nhật." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {executiveBoard.map((m) => (
              <LeaderCard
                key={m.id}
                leader={{
                  name: m.name,
                  position: m.title ?? m.position,
                }}
              />
            ))}
          </div>
        )}
      </Section>

      <Section muted>
        <SectionTitle subtitle="Danh sách Ủy viên Ban Thường vụ Trung ương Hội.">
          Ban Thường vụ TW Hội
        </SectionTitle>
        {standingCommittee.length === 0 ? (
          <EmptyState message="Cơ sở dữ liệu đang được cập nhật." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standingCommittee.map((m) => (
              <LeaderCard
                key={m.id}
                leader={{ name: m.name, position: m.position }}
              />
            ))}
          </div>
        )}
      </Section>

      <Section>
        <SectionTitle subtitle="Lãnh đạo các Ban chuyên môn, VP đại diện, Liên Chi hội, Chi hội, Viện và Trung tâm.">
          Lãnh đạo các Đơn vị trực thuộc
        </SectionTitle>
        {unitLeaders.length === 0 ? (
          <EmptyState message="Cơ sở dữ liệu đang được cập nhật." />
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
            <table className="min-w-full text-sm">
              <thead className="bg-[var(--color-surface)] text-left text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                <tr>
                  <th className="px-4 py-3">Họ và tên</th>
                  <th className="px-4 py-3">Chức vụ</th>
                  <th className="px-4 py-3">Đơn vị</th>
                  <th className="px-4 py-3">Loại đơn vị</th>
                </tr>
              </thead>
              <tbody>
                {unitLeaders.map((ul) => (
                  <tr
                    key={ul.id}
                    className="border-t border-[var(--color-border)]"
                  >
                    <td className="px-4 py-3 font-semibold">{ul.name}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">
                      {ul.position}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">
                      {ul.unitName}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">
                      {unitTypeLabels[ul.unitType]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </>
  );
}