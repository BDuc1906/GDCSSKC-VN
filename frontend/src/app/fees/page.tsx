import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import DocumentList from "@/components/documents/DocumentList";
import { feeItems, feeReportingRules } from "@/data/fees";
import { documentGroups } from "@/data/documentGroups";

export const metadata = { title: "Hội phí" };

export default function FeesPage() {
  const regulationGroup = documentGroups.find((g) => g.id === "fees");

  return (
    <>
      <PageHero
        title="Phí, Hội phí và Đóng góp"
        description="Quy định về phí, hội phí; hướng dẫn đóng phí trực tuyến và tiếp nhận đóng góp từ thiện."
      />

      <Section>
        <SectionTitle subtitle="Mức phí áp dụng cho hội viên và các đơn vị thuộc Hội.">
          Biểu phí và hội phí
        </SectionTitle>
        {feeItems.length === 0 ? (
          <EmptyState message="Biểu phí đang được cập nhật." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {feeItems.map((fee) => (
              <Card key={fee.id}>
                <p className="text-sm font-bold text-[var(--color-text)]">
                  {fee.title}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Đối tượng: {fee.audience}
                </p>
                <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
                  {fee.amount}
                </p>
                {fee.note ? (
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    {fee.note}
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section muted>
        <SectionTitle subtitle="Quy trình đóng phí, nhắc nhở và lưu giữ thông tin.">
          Đóng phí, hội phí trực tuyến
        </SectionTitle>
        <ul className="space-y-3">
          {feeReportingRules.map((rule) => (
            <li
              key={rule}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm"
            >
              {rule}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle subtitle="Quy định về phí, hội phí hiện hành.">
          Văn bản quy định
        </SectionTitle>
        {regulationGroup ? (
          <DocumentList group={regulationGroup} />
        ) : (
          <EmptyState />
        )}
      </Section>
    </>
  );
}