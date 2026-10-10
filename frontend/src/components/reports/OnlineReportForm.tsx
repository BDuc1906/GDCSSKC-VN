"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReportUnitType, ReportSection } from "@/types";
import { reportUnitTypeLabels } from "@/data/reports";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/* ID cố định cho 3 phần ban đầu – không dùng Math.random để tránh lỗi prerender */
const INITIAL_SECTIONS: ReportSection[] = [
  { id: "section-1", heading: "I. Đặc điểm tình hình", body: "" },
  { id: "section-2", heading: "II. Kết quả công tác", body: "" },
  { id: "section-3", heading: "III. Phương hướng nhiệm vụ", body: "" },
];

export default function OnlineReportForm() {
  const [sections, setSections] =
    useState<ReportSection[]>(INITIAL_SECTIONS);
  const [submitted, setSubmitted] = useState(false);

  function addSection() {
    setSections((prev) => [
      ...prev,
      {
        id: uid(),
        heading: `Phần ${prev.length + 1}`,
        body: "",
      },
    ]);
  }

  function removeSection(id: string) {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }

  function updateSection(id: string, key: "heading" | "body", value: string) {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [key]: value } : s)),
    );
  }

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
            placeholder="VD: Chi hội Hà Nội"
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
            Ngày lập <span className="text-[var(--color-primary)]">*</span>
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
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            Nội dung báo cáo{" "}
            <span className="text-[var(--color-primary)]">*</span>
          </p>
          <button
            type="button"
            onClick={addSection}
            className="rounded border border-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
          >
            + Thêm phần
          </button>
        </div>

        <div className="mt-3 space-y-4">
          {sections.map((s, idx) => (
            <div
              key={s.id}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={s.heading}
                  onChange={(e) =>
                    updateSection(s.id, "heading", e.target.value)
                  }
                  placeholder={`Tiêu đề phần ${idx + 1}`}
                  className="flex-1 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm font-semibold focus:border-[var(--color-primary)] focus:outline-none"
                />
                {sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(s.id)}
                    aria-label="Xoá phần này"
                    className="flex h-9 w-9 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:border-red-500 hover:text-red-500"
                  >
                    ✕
                  </button>
                )}
              </div>
              <textarea
                rows={4}
                value={s.body}
                onChange={(e) => updateSection(s.id, "body", e.target.value)}
                placeholder="Nội dung chi tiết…"
                className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
          ))}
        </div>
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