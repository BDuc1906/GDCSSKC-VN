"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReportUnitType } from "@/types";
import { reportUnitTypeLabels } from "@/data/reports";

export default function OfflineReportForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary-soft)] p-6 text-center">
        <p className="text-lg font-bold text-[var(--color-primary)]">
          ✅ Đã gửi báo cáo thành công
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Văn phòng Trung ương Hội sẽ tiếp nhận và phản hồi trong thời gian sớm
          nhất.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/reports"
            className="inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
          >
            Về danh sách báo cáo
          </Link>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex min-h-[44px] items-center justify-center rounded border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-white"
          >
            Gửi báo cáo khác
          </button>
        </div>
      </div>
    );
  }

  const unitTypes: ReportUnitType[] = [
    "inter-branch",
    "branch",
    "committee",
    "institute-center",
    "magazine",
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="unitType"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Loại đơn vị <span className="text-[var(--color-primary)]">*</span>
          </label>
          <select
            id="unitType"
            required
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          >
            {unitTypes.map((t) => (
              <option key={t} value={t}>
                {reportUnitTypeLabels[t]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="unitName"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Tên đơn vị <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="unitName"
            type="text"
            required
            placeholder="VD: Liên Chi hội miền Trung"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Tiêu đề báo cáo <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="title"
            type="text"
            required
            placeholder="VD: Báo cáo kết quả công tác Quý IV/2025"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="period"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Kỳ báo cáo <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="period"
            type="text"
            required
            placeholder="VD: Quý IV/2025"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="reportDate"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Ngày lập báo cáo{" "}
            <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="reportDate"
            type="date"
            required
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="submitDate"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Ngày gửi <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="submitDate"
            type="date"
            required
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="summary"
          className="block text-sm font-semibold text-[var(--color-text)]"
        >
          Tóm tắt nội dung
        </label>
        <textarea
          id="summary"
          rows={3}
          placeholder="Mô tả ngắn gọn nội dung chính của báo cáo…"
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
        />
      </div>

      <div>
        <p className="block text-sm font-semibold text-[var(--color-text)]">
          File báo cáo <span className="text-[var(--color-primary)]">*</span>
        </p>
        <label
          htmlFor="file"
          className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-8 text-center transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
        >
          <span className="text-3xl">📎</span>
          {fileName ? (
            <span className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
              {fileName}
            </span>
          ) : (
            <>
              <span className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                Nhấn để chọn file hoặc kéo thả vào đây
              </span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)]">
                Hỗ trợ: PDF, DOC, DOCX · Tối đa 20 MB
              </span>
            </>
          )}
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="signerName"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Người ký <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="signerName"
            type="text"
            required
            placeholder="VD: TS. Trần Văn B"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="signerPosition"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Chức vụ <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="signerPosition"
            type="text"
            required
            placeholder="VD: Chủ tịch Liên Chi hội"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-3 border-t border-[var(--color-border)] pt-5">
        <Link
          href="/reports/new"
          className="inline-flex min-h-[44px] items-center justify-center rounded border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Quay lại
        </Link>
        <button
          type="submit"
          className="inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
        >
          Gửi báo cáo
        </button>
      </div>
    </form>
  );
}