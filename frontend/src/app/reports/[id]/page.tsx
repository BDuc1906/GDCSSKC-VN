import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ReportStatusBadge from "@/components/reports/ReportStatusBadge";
import {
  reports,
  getReportById,
  reportUnitTypeLabels,
} from "@/data/reports";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return reports.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const r = getReportById(id);
  if (!r) return { title: "Không tìm thấy" };
  return { title: r.reportTitle, description: r.contentSummary };
}

export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const r = getReportById(id);
  if (!r) notFound();

  return (
    <>
      <section className="bg-[var(--color-primary)] text-white">
        <Container className="py-8 sm:py-10 md:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-xs text-white/80"
          >
            <Link href="/" className="hover:text-white">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/reports" className="hover:text-white">
              Báo cáo
            </Link>
            <span>/</span>
            <span className="line-clamp-1">{r.reportCode}</span>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <ReportStatusBadge status={r.status} />
            <span className="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold">
              {r.reportType === "offline" ? "📎 Offline" : "✍️ Online"}
            </span>
          </div>

          <h1 className="mt-3 max-w-4xl text-balance text-2xl font-bold leading-tight sm:text-3xl">
            {r.reportTitle}
          </h1>

          <p className="mt-3 text-sm text-white/90">
            {r.reportCode} · {r.unitName} ({reportUnitTypeLabels[r.unitType]})
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 sm:grid-cols-2 sm:p-6">
              <Info label="Kỳ báo cáo" value={r.reportPeriod} />
              <Info label="Ngày lập" value={r.reportDate} />
              <Info label="Ngày gửi" value={r.submitDate} />
              <Info label="Người nhận" value={r.receiver} />
              <Info label="Người ký" value={r.signerName} />
              <Info label="Chức vụ" value={r.signerPosition} />
            </div>

            {r.contentSummary && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                  Tóm tắt
                </h2>
                <p className="mt-2 text-pretty text-base leading-relaxed text-[var(--color-text)]">
                  {r.contentSummary}
                </p>
              </div>
            )}

            {r.content && r.content.length > 0 && (
              <div className="mt-8 space-y-6">
                {r.content.map((s) => (
                  <div key={s.id}>
                    <h3 className="text-base font-bold text-[var(--color-text)] sm:text-lg">
                      {s.heading}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {r.reportType === "offline" && r.fileUrl && (
              <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  File báo cáo đính kèm
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {r.fileName} {r.fileSize && `· ${r.fileSize}`}
                </p>
                <a
                  href={r.fileUrl}
                  className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
                >
                  ⬇ Tải về
                </a>
              </div>
            )}

            {r.reviewerName && (
              <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-primary-soft)] p-5">
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  Thông tin duyệt
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[var(--color-text)]">
                      Người duyệt:
                    </dt>
                    <dd className="text-[var(--color-text-muted)]">
                      {r.reviewerName}
                    </dd>
                  </div>
                  {r.reviewDate && (
                    <div className="flex gap-2">
                      <dt className="font-semibold text-[var(--color-text)]">
                        Ngày duyệt:
                      </dt>
                      <dd className="text-[var(--color-text-muted)]">
                        {r.reviewDate}
                      </dd>
                    </div>
                  )}
                  {r.reviewNote && (
                    <div>
                      <dt className="font-semibold text-[var(--color-text)]">
                        Ghi chú:
                      </dt>
                      <dd className="mt-1 text-pretty text-[var(--color-text-muted)]">
                        {r.reviewNote}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            <div className="mt-8">
              <Link
                href="/reports"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                ← Quay lại danh sách báo cáo
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-[var(--color-text)]">
        {value}
      </dd>
    </div>
  );
}