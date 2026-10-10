"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import { newsItems, newsCategoryLabels } from "@/data/news";
import { documentGroups } from "@/data/documentGroups";
import type { NewsCategory } from "@/types";

type ResultType = "all" | "news" | "doc";

type Result = {
  id: string;
  type: "news" | "doc";
  title: string;
  snippet: string;
  href: string;
  date: string;
  tags: string[];
};

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* Đổi tên hàm thành parseVNDate để tránh trùng với state toDate */
function parseVNDate(iso: string): Date | null {
  const parts = iso.split("/");
  if (parts.length === 3) {
    const [d, m, y] = parts;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  return null;
}

function buildIndex(): Result[] {
  const news: Result[] = newsItems.map((n) => ({
    id: n.id,
    type: "news",
    title: n.title,
    snippet: n.excerpt,
    href: n.href,
    date: n.date,
    tags: n.tags ?? [],
  }));

  const docs: Result[] = documentGroups.flatMap((g) =>
    g.items.map((d) => ({
      id: d.id,
      type: "doc" as const,
      title: d.title,
      snippet: `${g.title} · ${d.code}`,
      href: `/documents/${d.id}`,
      date: d.issuedDate,
      tags: d.tags ?? [],
    })),
  );

  return [...news, ...docs];
}

export default function AdvancedSearch({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [q, setQ] = useState(initialQuery);
  const [type, setType] = useState<ResultType>("all");
  const [category, setCategory] = useState<"all" | NewsCategory>("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const allData = useMemo(() => buildIndex(), []);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    allData.forEach((r) => r.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [allData]);

  const toggleTag = (t: string) => {
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  };

  const results = useMemo(() => {
    const query = normalize(q.trim());
    const fromBound = fromDate ? new Date(fromDate) : null;
    const toBound = toDate ? new Date(toDate) : null;

    return allData.filter((r) => {
      /* Type filter */
      if (type !== "all" && r.type !== type) return false;

      /* Category filter */
      if (category !== "all") {
        if (r.type === "news") {
          const item = newsItems.find((n) => n.id === r.id);
          if (!item || item.category !== category) return false;
        } else {
          return false;
        }
      }

      /* Date filter */
      if (fromBound || toBound) {
        const d = parseVNDate(r.date);
        if (!d) return false;
        if (fromBound && d < fromBound) return false;
        if (toBound) {
          const toEnd = new Date(toBound);
          toEnd.setHours(23, 59, 59, 999);
          if (d > toEnd) return false;
        }
      }

      /* Tag filter */
      if (activeTags.length > 0) {
        const hasTag = activeTags.some((t) => r.tags.includes(t));
        if (!hasTag) return false;
      }

      /* Text search */
      if (query) {
        const text = normalize(`${r.title} ${r.snippet} ${r.tags.join(" ")}`);
        if (!text.includes(query)) return false;
      }

      return true;
    });
  }, [allData, q, type, category, fromDate, toDate, activeTags]);

  const hasFilter =
    q.trim() !== "" ||
    type !== "all" ||
    category !== "all" ||
    fromDate !== "" ||
    toDate !== "" ||
    activeTags.length > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
      {/* SIDEBAR FILTER */}
      <aside className="space-y-5">
        <div>
          <label
            htmlFor="adv-q"
            className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]"
          >
            Từ khóa
          </label>
          <input
            id="adv-q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nhập từ khóa…"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
            Loại nội dung
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { v: "all", label: "Tất cả" },
              { v: "news", label: "Tin tức" },
              { v: "doc", label: "Văn bản" },
            ].map((o) => (
              <button
                key={o.v}
                type="button"
                onClick={() => setType(o.v as ResultType)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  type === o.v
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] hover:border-[var(--color-primary)]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {type !== "doc" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              Chuyên mục tin tức
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  { v: "all", label: "Tất cả" },
                  { v: "policy", label: newsCategoryLabels.policy },
                  { v: "event", label: newsCategoryLabels.event },
                  { v: "unit", label: newsCategoryLabels.unit },
                  { v: "other", label: newsCategoryLabels.other },
                ] as const
              ).map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => setCategory(o.v)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    category === o.v
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-[var(--color-border)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
            Khoảng thời gian
          </p>
          <div className="mt-2 space-y-2">
            <div>
              <label
                htmlFor="adv-from"
                className="text-xs text-[var(--color-text-muted)]"
              >
                Từ
              </label>
              <input
                id="adv-from"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="adv-to"
                className="text-xs text-[var(--color-text-muted)]"
              >
                Đến
              </label>
              <input
                id="adv-to"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="mt-1 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {allTags.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              Thẻ (tags)
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {allTags.map((t) => {
                const active = activeTags.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTag(t)}
                    className={`rounded px-2 py-1 text-xs transition ${
                      active
                        ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary)]"
                        : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]"
                    }`}
                  >
                    #{t}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {hasFilter && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              setType("all");
              setCategory("all");
              setFromDate("");
              setToDate("");
              setActiveTags([]);
            }}
            className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-xs font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Xóa bộ lọc
          </button>
        )}
      </aside>

      {/* RESULTS */}
      <div>
        <p className="mb-4 text-sm text-[var(--color-text-muted)]">
          <strong className="text-[var(--color-text)]">
            {results.length}
          </strong>{" "}
          kết quả {hasFilter ? "phù hợp" : "tổng cộng"}
        </p>

        {results.length === 0 ? (
          <EmptyState message="Không tìm thấy kết quả phù hợp. Thử xóa bộ lọc hoặc đổi từ khóa." />
        ) : (
          <div className="space-y-3">
            {results.map((r) => (
              <Card key={`${r.type}-${r.id}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded bg-[var(--color-primary-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                    {r.type === "news" ? "Tin tức" : "Văn bản"}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {r.date}
                  </span>
                </div>

                <h3 className="mt-2 text-balance text-base font-bold">
                  <Link
                    href={r.href}
                    className="hover:text-[var(--color-primary)]"
                  >
                    {r.title}
                  </Link>
                </h3>
                <p className="mt-1 text-pretty text-sm text-[var(--color-text-muted)]">
                  {r.snippet}
                </p>

                {r.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTag(t)}
                        className="rounded bg-[var(--color-surface)] px-2 py-0.5 text-[10px] text-[var(--color-text-muted)] transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                      >
                        #{t}
                      </button>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}