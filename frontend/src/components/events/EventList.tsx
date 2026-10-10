import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import type { Event } from "@/data/events";
import { formatEventDate } from "@/data/events";

export default function EventList({ events }: { events: Event[] }) {
  if (events.length === 0) {
    return <EmptyState message="Chưa có sự kiện nào sắp diễn ra." />;
  }

  return (
    <ul className="space-y-4">
      {events.map((e) => (
        <li key={e.id}>
          <Card className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
              <span className="text-xs font-semibold uppercase">
                {new Date(e.date).toLocaleDateString("vi-VN", {
                  month: "short",
                })}
              </span>
              <span className="text-xl font-bold leading-none">
                {new Date(e.date).getDate()}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold">{e.title}</h3>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                {formatEventDate(e.date)} · {e.location}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {e.description}
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}