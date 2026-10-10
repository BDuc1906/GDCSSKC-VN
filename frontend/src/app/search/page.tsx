"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import { newsItems } from "@/data/news";
import { documentGroups } from "@/data/documentGroups";

type Result = {
  id: string;
  type: "news" | "doc";
  title: string;
  snippet: string;
  href: string;
};

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function SearchPage() {
  const params = useSearchParams();
  const [q, setQ] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setQ(params.get("q") ?? "");
    setHydrated(true);
  }, [params]);

  const results = useMemo<Result[]>(() => {
    const query = normalize(q.trim());
    if (!query) return [];

    const fromNews: Result[] = newsItems
      .filter(
        (n) =>
          normalize(n.title).includes(query) ||
          normalize(n.excerpt).includes(query),
      )
      .map((n) => ({
        id: n.id,
        type: "news",
        title: n.title,
        snippet: n.excerpt,
        href: n.href,
      }));

    const fromDocs: Result[] = documentGroups.flatMap((g) =>
      g.items
        .filter(
          (d) =>
            normalize(d.title).includes(query) ||
            normalize(g.title).includes(query),
        )
        .map((d) => ({
          id: d.id,
          type: "doc" as const,
          title: d.title,
          snippet: `${g.title} · ${d.code}`,
          href: d.href,
        })),
    );

    return [...fromNews, ...fromDocs];
  }, [q]);

  return (
    <>
      <PageHero
        title="Tìm kiếm"
        description="Tìm nhanh văn bản, tin tức và tài liệu của Hội."
      />

      <Section>
        <label htmlFor="q" className="sr-only">
          Từ khóa
        </label>
        <input
          id="q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Nhập từ khóa…"
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          autoFocus
        />

        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          {hydrated && q.trim()
            ? `${results.length} kết quả cho “${q.trim()}”`
            : "Nhập từ khóa để bắt đầu tìm kiếm."}
        </p>

        <div className="mt-6 space-y-3">
          {results.length === 0 && q.trim() ? (
            <EmptyState message="Không tìm thấy kết quả." />
          ) : (
            results.map((r) => (
              <Card key={`${r.type}-${r.id}`}>
                <span className="inline-block rounded bg-[var(--color-primary-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                  {r.type === "news" ? "Tin tức" : "Văn bản"}
                </span>
                <h3 className="mt-2 text-base font-bold">
                  <Link
                    href={r.href}
                    className="hover:text-[var(--color-primary)]"
                  >
                    {r.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {r.snippet}
                </p>
              </Card>
            ))
          )}
        </div>
      </Section>
    </>
  );
}