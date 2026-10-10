import Link from "next/link";
import type { ForumCategory } from "@/types";

function CategoryIcon({ icon }: { icon: ForumCategory["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
  };

  if (icon === "question") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 5 0c0 1.5-2 2-2 3.5" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    );
  }
  if (icon === "idea") {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.5 1 2.5h6c0-1 .5-2 1-2.5A6 6 0 0 0 12 3z" />
      </svg>
    );
  }
  if (icon === "news") {
    return (
      <svg {...common}>
        <path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 0 2-2V9h-3" />
        <rect x="4" y="5" width="15" height="15" rx="2" />
        <path d="M8 10h7M8 14h5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

export default function ForumCategoryCard({
  category,
  topicCount,
}: {
  category: ForumCategory;
  topicCount: number;
}) {
  return (
    <Link
      href={`/forum/${category.id}`}
      className="group flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-md"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white"
        style={{ background: category.color }}
      >
        <CategoryIcon icon={category.icon} />
      </div>

      <div className="flex-1">
        <h3 className="text-balance text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
          {category.name}
        </h3>
        <p className="mt-1 text-pretty text-sm text-[var(--color-text-muted)]">
          {category.description}
        </p>
        <p className="mt-3 text-xs font-semibold text-[var(--color-primary)]">
          {topicCount} chủ đề →
        </p>
      </div>
    </Link>
  );
}