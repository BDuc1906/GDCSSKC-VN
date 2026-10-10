"use client";

import { useMemo, useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import EmptyState from "@/components/ui/EmptyState";
import type { NewsItem, NewsCategory } from "@/types";
import { newsCategoryLabels } from "@/data/news";

type Props = {
  items: NewsItem[];
};

const ALL: "all" | NewsCategory = "all";

export default function NewsFilter({ items }: Props) {
  const [category, setCategory] = useState<"all" | NewsCategory>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      if (category !== ALL && it.category !== category) return false;
      if (!query) return true;
      return (
        it.title.toLowerCase().includes(query) ||
        it.excerpt.toLowerCase().includes(query)
      );
    });
  }, [items, category, q]);

  const categories: ("all" | NewsCategory)[] = [
    "all",
    "policy",
    "event",
    "unit",
    "other",
  ];

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                category === c
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {c === "all" ? "Tất cả" : newsCategoryLabels[c]}
            </button>
          ))}
        </div>

        <label htmlFor="news-search" className="sr-only">
          Tìm trong tin tức
        </label>
        <input
          id="news-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm tin tức…"
          className="min-h-[40px] rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none sm:w-56"
        />
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        {filtered.length} kết quả
      </p>

      <div className="mt-4">
        {filtered.length === 0 ? (
          <EmptyState message="Không tìm thấy tin tức phù hợp." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filtered.map((it) => (
              <NewsCard key={it.id} item={it} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}