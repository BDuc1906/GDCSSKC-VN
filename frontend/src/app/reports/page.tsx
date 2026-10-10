import Link from "next/link";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import ReportCard from "@/components/reports/ReportCard";
import EmptyState from "@/components/ui/EmptyState";
import { reports } from "@/data/reports";

export const metadata = { title: "Báo cáo" };

export default function ReportsPage() {
  return (
    <>
      <PageHero
        title="Báo cáo gửi Trung ương Hội"
        description="Danh sách báo cáo định kỳ của các Liên Chi hội, Chi hội, Ban chuyên môn, Viện, Trung tâm và Tạp chí."
      />

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-[var(--color-text-muted)]">
            <strong className="text-[var(--color-text)]">
              {reports.length}
            </strong>{" "}
            báo cáo
          </p>
          <Link
            href="/reports/new"
            className="inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            + Gửi báo cáo mới
          </Link>
        </div>

        <div className="mt-6 space-y-3">
          {reports.length === 0 ? (
            <EmptyState message="Chưa có báo cáo nào." />
          ) : (
            reports.map((r) => <ReportCard key={r.id} report={r} />)
          )}
        </div>
      </Section>
    </>
  );
}