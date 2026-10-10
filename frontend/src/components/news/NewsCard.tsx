import Link from "next/link";
import type { NewsItem } from "@/types";
import { newsCategoryLabels } from "@/data/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-primary)]">
      <span className="w-fit rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
        {newsCategoryLabels[item.category]}
      </span>

      <h3 className="mt-3 text-balance text-base font-bold leading-snug">
        <Link href={item.href} className="hover:text-[var(--color-primary)]">
          {item.title}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-pretty text-sm text-[var(--color-text-muted)]">
        {item.excerpt}
      </p>

      <time className="mt-4 text-xs text-[var(--color-text-muted)]">
        {item.date}
      </time>
    </article>
  );
}