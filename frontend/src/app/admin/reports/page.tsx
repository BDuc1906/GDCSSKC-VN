"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import ReportStatusBadge from "@/components/reports/ReportStatusBadge";
import EmptyState from "@/components/ui/EmptyState";
import {
  reports,
  reportUnitTypeLabels,
  reportStatusLabels,
} from "@/data/reports";
import type { ReportStatus } from "@/types";

export default function AdminReportsPage() {
  const [status, setStatus] = useState<"all" | ReportStatus>("all");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return reports.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (!query) return true;
      return (
        r.reportTitle.toLowerCase().includes(query) ||
        r.reportCode.toLowerCase().includes(query) ||
        r.unitName.toLowerCase().includes(query)
      );
    });
  }, [status, q]);

  const statuses: ("all" | ReportStatus)[] = [
    "all",
    "submitted",
    "reviewing",
    "approved",
    "rejected",
    "draft",
  ];

  const current = selected ? reports.find((r) => r.id === selected) : null;

  return (
    <>
      <PageHero
        title="Duyệt báo cáo"
        description="Khu vực dành cho Ban Thường vụ Trung ương Hội – duyệt báo cáo của các đơn vị."
      />

      <Section>
        <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  status === s
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {s === "all" ? "Tất cả" : reportStatusLabels[s]}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm mã, tiêu đề, đơn vị…"
            className="min-h-[40px] rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none lg:w-72"
          />
        </div>

        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          <strong className="text-[var(--color-text)]">
            {filtered.length}
          </strong>{" "}
          báo cáo
        </p>

        <div className="mt-6 space-y-3">
          {filtered.length === 0 ? (
            <EmptyState message="Không có báo cáo nào phù hợp." />
          ) : (
            filtered.map((r) => (
              <article
                key={r.id}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition hover:border-[var(--color-primary)] sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <ReportStatusBadge status={r.status} />
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {r.reportType === "offline" ? "📎" : "✍️"}{" "}
                    {r.reportPeriod}
                  </span>
                </div>

                <h3 className="mt-2 text-balance text-base font-bold">
                  <Link
                    href={`/reports/${r.id}`}
                    className="hover:text-[var(--color-primary)]"
                  >
                    {r.reportTitle}
                  </Link>
                </h3>

                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {r.reportCode} · {r.unitName} (
                  {reportUnitTypeLabels[r.unitType]})
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelected(r.id)}
                    className="rounded border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary-soft)]"
                  >
                    Xem & duyệt
                  </button>
                  <Link
                    href={`/reports/${r.id}`}
                    className="rounded border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    Chi tiết
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </Section>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-lg bg-[var(--color-bg)] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                Duyệt báo cáo
              </h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Đóng"
                className="flex h-8 w-8 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              <strong className="text-[var(--color-text)]">
                {current.reportTitle}
              </strong>
              <br />
              {current.reportCode} · {current.unitName}
            </p>

            <div className="mt-4">
              <label
                htmlFor="reviewNote"
                className="block text-sm font-semibold text-[var(--color-text)]"
              >
                Ghi chú duyệt
              </label>
              <textarea
                id="reviewNote"
                rows={4}
                placeholder="VD: Báo cáo đầy đủ, đúng biểu mẫu."
                className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)]"
              >
                Huỷ
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded border border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Từ chối
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Duyệt
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}