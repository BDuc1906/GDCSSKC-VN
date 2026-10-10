import type { ForumReply } from "@/types";

export default function ReplyItem({ reply }: { reply: ForumReply }) {
  return (
    <article className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:gap-4 sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs font-bold text-[var(--color-primary)]">
        {reply.author.split(" ").pop()?.charAt(0) ?? "?"}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <p className="text-sm font-bold text-[var(--color-text)]">
            {reply.author}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {reply.authorRole}
          </p>
          <span className="text-xs text-[var(--color-text-muted)]">
            · {reply.createdAt}
          </span>
        </div>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-[var(--color-text)]">
          {reply.content}
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
          <button
            type="button"
            className="transition hover:text-[var(--color-primary)]"
          >
            👍 Thích ({reply.likes})
          </button>
          <button
            type="button"
            className="transition hover:text-[var(--color-primary)]"
          >
            💬 Trả lời
          </button>
        </div>
      </div>
    </article>
  );
}