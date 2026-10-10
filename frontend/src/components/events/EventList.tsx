import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import type { Event } from "@/data/events";
import { formatEventDate } from "@/data/events";

export default function EventList({ events }: { events: Event[] }) {
  if (events.length === 0) {
    return <EmptyState message="Chưa có sự kiện nào sắp diễn ra." />;
  }

  return (
    <ul className="space-y-3 sm:space-y-4">
      {events.map((e) => (
        <li key={e.id}>
          <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)] sm:h-16 sm:w-16">
              <span className="text-[10px] font-semibold uppercase sm:text-xs">
                {new Date(e.date).toLocaleDateString("vi-VN", {
                  month: "short",
                })}
              </span>
              <span className="text-lg font-bold leading-none sm:text-xl">
                {new Date(e.date).getDate()}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-balance text-sm font-bold sm:text-base">
                {e.title}
              </h3>
              <p className="mt-1 text-[10px] text-[var(--color-text-muted)] sm:text-xs">
                {formatEventDate(e.date)} · {e.location}
              </p>
              <p className="mt-2 text-pretty text-xs text-[var(--color-text-muted)] sm:text-sm">
                {e.description}
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}