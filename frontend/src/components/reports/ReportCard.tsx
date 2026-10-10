import Link from "next/link";
import type { Report } from "@/types";
import ReportStatusBadge from "@/components/reports/ReportStatusBadge";
import { reportUnitTypeLabels } from "@/data/reports";

export default function ReportCard({ report }: { report: Report }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition hover:border-[var(--color-primary)] hover:shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <ReportStatusBadge status={report.status} />
        <span className="text-xs text-[var(--color-text-muted)]">
          {report.reportType === "offline" ? "📎 Offline" : "✍️ Online"}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">
          · {report.reportPeriod}
        </span>
      </div>

      <h3 className="text-balance text-base font-bold leading-snug">
        <Link
          href={`/reports/${report.id}`}
          className="hover:text-[var(--color-primary)]"
        >
          {report.reportTitle}
        </Link>
      </h3>

      <p className="text-xs font-semibold text-[var(--color-text-muted)]">
        {report.reportCode} · {report.unitName} (
        {reportUnitTypeLabels[report.unitType]})
      </p>

      {report.contentSummary && (
        <p className="line-clamp-2 text-pretty text-sm text-[var(--color-text-muted)]">
          {report.contentSummary}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-text-muted)]">
        <span>
          Kỳ:{" "}
          <strong className="text-[var(--color-text)]">
            {report.reportPeriod}
          </strong>
        </span>
        <span>·</span>
        <span>Gửi: {report.submitDate}</span>
        <span>·</span>
        <span>Người ký: {report.signerName}</span>
      </div>
    </article>
  );
}