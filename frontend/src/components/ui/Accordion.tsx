"use client";

import { useState } from "react";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[var(--color-border)] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : it.id)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-[var(--color-surface)] sm:px-5"
            >
              <span className="text-sm font-semibold text-[var(--color-text)] sm:text-base">
                {it.question}
              </span>
              <span
                aria-hidden
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-3 w-3"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 sm:px-5">
                <p className="text-pretty text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {it.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}