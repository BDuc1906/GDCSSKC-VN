import Link from "next/link";
import type { NewsItem } from "@/types";
import { newsCategoryLabels } from "@/data/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition hover:border-[var(--color-primary)] sm:p-5">
      <span className="w-fit rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-primary)] sm:px-3 sm:text-xs">
        {newsCategoryLabels[item.category]}
      </span>

      <h3 className="mt-3 text-balance text-sm font-bold leading-snug sm:text-base">
        <Link href={item.href} className="hover:text-[var(--color-primary)]">
          {item.title}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-pretty text-xs text-[var(--color-text-muted)] sm:text-sm">
        {item.excerpt}
      </p>

      <time className="mt-4 text-[10px] text-[var(--color-text-muted)] sm:text-xs">
        {item.date}
      </time>
    </article>
  );
}