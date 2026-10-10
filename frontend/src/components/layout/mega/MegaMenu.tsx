"use client";

import Link from "next/link";
import type { MegaGroup } from "@/config/navigation";

export default function MegaMenu({ group }: { group: MegaGroup }) {
  return (
    <div className="absolute left-0 right-0 top-full z-50 border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] shadow-xl">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {group.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item.label + item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-2 text-sm text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                    >
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {group.cta && (
            <div className="flex items-start justify-end md:col-span-2 lg:col-span-1">
              <Link
                href={group.cta.href}
                className="inline-flex min-h-[40px] items-center justify-center rounded bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                {group.cta.label}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}