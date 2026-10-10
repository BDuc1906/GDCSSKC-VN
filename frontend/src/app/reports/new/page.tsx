import Link from "next/link";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Gửi báo cáo mới" };

export default function NewReportPage() {
  return (
    <>
      <PageHero
        title="Gửi báo cáo mới"
        description="Chọn hình thức báo cáo phù hợp với đơn vị của bạn."
      />

      <Section>
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <Link
            href="/reports/new/offline"
            className="group flex flex-col rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-2xl">
              📎
            </div>
            <h3 className="mt-4 text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
              Báo cáo Offline
            </h3>
            <p className="mt-2 flex-1 text-pretty text-sm text-[var(--color-text-muted)]">
              Tải lên file báo cáo đã soạn sẵn (PDF, DOCX). Phù hợp với báo
              cáo đã có mẫu biểu và cần đóng dấu, ký tên.
            </p>
            <span className="mt-4 text-xs font-semibold text-[var(--color-primary)]">
              Chọn hình thức này →
            </span>
          </Link>

          <Link
            href="/reports/new/online"
            className="group flex flex-col rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-2xl">
              ✍️
            </div>
            <h3 className="mt-4 text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
              Báo cáo Online
            </h3>
            <p className="mt-2 flex-1 text-pretty text-sm text-[var(--color-text-muted)]">
              Điền trực tiếp nội dung báo cáo theo mẫu có sẵn. Phù hợp với báo
              cáo ngắn, báo cáo nhanh hoặc báo cáo đột xuất.
            </p>
            <span className="mt-4 text-xs font-semibold text-[var(--color-primary)]">
              Chọn hình thức này →
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}