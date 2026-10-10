"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import type { DocumentGroup } from "@/types";

type Props = {
  groups: DocumentGroup[];
};

export default function DocumentFilter({ groups }: Props) {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return groups
      .filter((g) => activeGroup === "all" || g.id === activeGroup)
      .map((g) => ({
        ...g,
        items: g.items.filter((d) => {
          if (!query) return true;
          return (
            d.title.toLowerCase().includes(query) ||
            d.code.toLowerCase().includes(query)
          );
        }),
      }))
      .filter((g) => g.items.length > 0 || activeGroup === g.id);
  }, [groups, activeGroup, q]);

  const total = filtered.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveGroup("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              activeGroup === "all"
                ? "bg-[var(--color-primary)] text-white"
                : "border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            Tất cả
          </button>
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGroup(g.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                activeGroup === g.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <label htmlFor="doc-search" className="sr-only">
          Tìm văn bản
        </label>
        <input
          id="doc-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm văn bản…"
          className="min-h-[40px] rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none lg:w-56"
        />
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        {total} văn bản
      </p>

      <div className="mt-6 space-y-8">
        {filtered.length === 0 ? (
          <EmptyState message="Không tìm thấy văn bản phù hợp." />
        ) : (
          filtered.map((g) => (
            <div key={g.id}>
              <h3 className="text-balance text-lg font-bold text-[var(--color-text)]">
                {g.title}
              </h3>
              <p className="mt-1 text-pretty text-sm text-[var(--color-text-muted)]">
                {g.description}
              </p>

              <div className="mt-4">
                {g.items.length === 0 ? (
                  <EmptyState message="Danh mục văn bản đang được cập nhật." />
                ) : (
                  <ul className="space-y-3">
                    {g.items.map((doc) => (
                      <li key={doc.id}>
                        <Card className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <Link
                              href={`/documents/${doc.id}`}
                              className="text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]"
                            >
                              {doc.title}
                            </Link>
                            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                              Số hiệu: {doc.code} · Ngày ban hành: {doc.issuedDate}
                            </p>
                          </div>
                          <Link
                            href={`/documents/${doc.id}`}
                            className="self-start rounded border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                          >
                            Xem chi tiết
                          </Link>
                        </Card>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}