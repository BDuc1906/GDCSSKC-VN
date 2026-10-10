import Link from "next/link";
import type { ForumTopic } from "@/types";

export default function TopicCard({ topic }: { topic: ForumTopic }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition hover:border-[var(--color-primary)] sm:flex-row sm:items-center sm:gap-4 sm:p-5">
      {/* Avatar chữ cái */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-sm font-bold text-[var(--color-primary)]">
        {topic.author.split(" ").pop()?.charAt(0) ?? "?"}
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {topic.pinned && (
            <span className="rounded bg-[var(--color-primary)] px-1.5 py-0.5 text-[10px] font-semibold text-white">
              GHIM
            </span>
          )}
          {topic.locked && (
            <span className="rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-text-muted)]">
              🔒 KHOÁ
            </span>
          )}
        </div>

        <h3 className="mt-1 text-balance text-sm font-bold sm:text-base">
          <Link
            href={`/forum/${topic.categoryId}/${topic.id}`}
            className="hover:text-[var(--color-primary)]"
          >
            {topic.title}
          </Link>
        </h3>

        <p className="mt-1 line-clamp-2 text-pretty text-xs text-[var(--color-text-muted)] sm:text-sm">
          {topic.excerpt}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-[var(--color-text-muted)] sm:text-xs">
          <span className="font-semibold text-[var(--color-text)]">
            {topic.author}
          </span>
          <span>·</span>
          <span>{topic.authorRole}</span>
          <span>·</span>
          <span>{topic.createdAt}</span>
        </div>

        {topic.tags && topic.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {topic.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-[var(--color-surface)] px-2 py-0.5 text-[10px] text-[var(--color-text-muted)]"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="flex shrink-0 items-center gap-4 text-xs text-[var(--color-text-muted)]">
        <div className="text-center">
          <p className="text-base font-bold text-[var(--color-text)]">
            {topic.replies}
          </p>
          <p>trả lời</p>
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-[var(--color-text)]">
            {topic.views}
          </p>
          <p>lượt xem</p>
        </div>
      </div>
    </article>
  );
}