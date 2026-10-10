import type { Leader } from "@/types";

export default function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-lg font-bold text-[var(--color-primary)]">
        {leader.name.trim().charAt(0)}
      </div>
      <div>
        <p className="text-sm font-bold text-[var(--color-text)]">
          {leader.name}
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          {leader.position}
        </p>
        {leader.note ? (
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            {leader.note}
          </p>
        ) : null}
      </div>
    </div>
  );
}