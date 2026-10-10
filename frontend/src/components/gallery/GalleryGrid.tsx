import Reveal from "@/components/ui/Reveal";
import type { GalleryItem } from "@/data/gallery";
import { galleryCategoryLabels } from "@/data/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.id} delay={i * 80} as="figure">
          <div className="group overflow-hidden rounded-lg border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg">
            <div
              role="img"
              aria-label={it.title}
              className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
              style={{ background: it.gradient }}
            />
            <figcaption className="p-3">
              <span className="inline-block rounded bg-[var(--color-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-primary)] sm:text-xs">
                {galleryCategoryLabels[it.category]}
              </span>
              <p className="mt-2 text-pretty text-xs font-semibold sm:text-sm">
                {it.title}
              </p>
            </figcaption>
          </div>
        </Reveal>
      ))}
    </div>
  );
}