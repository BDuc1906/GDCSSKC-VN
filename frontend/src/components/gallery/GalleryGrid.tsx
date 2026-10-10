import type { GalleryItem } from "@/data/gallery";
import { galleryCategoryLabels } from "@/data/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <figure
          key={it.id}
          className="group overflow-hidden rounded-lg border border-[var(--color-border)]"
        >
          <div
            role="img"
            aria-label={it.title}
            className="aspect-[4/3] w-full transition group-hover:scale-105"
            style={{ background: it.gradient }}
          />
          <figcaption className="p-3">
            <span className="inline-block rounded bg-[var(--color-primary-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
              {galleryCategoryLabels[it.category]}
            </span>
            <p className="mt-2 text-sm font-semibold">{it.title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}