import type { ReportStatus } from "@/types";
import { reportStatusLabels, reportStatusColors } from "@/data/reports";

export default function ReportStatusBadge({
  status,
}: {
  status: ReportStatus;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${reportStatusColors[status]}`}
    >
      {reportStatusLabels[status]}
    </span>
  );
}