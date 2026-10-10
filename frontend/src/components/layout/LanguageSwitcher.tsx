"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/dictionary";
import { IconGlobe, IconChevronDown } from "@/components/ui/Icons";

const options: { value: Lang; label: string; short: string }[] = [
  { value: "vi", label: "Tiếng Việt", short: "VI" },
  { value: "en", label: "English", short: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const current = options.find((o) => o.value === lang) ?? options[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Chọn ngôn ngữ"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-1 rounded border border-[var(--color-border)] px-2 text-[var(--color-primary)] transition hover:border-[var(--color-primary)]"
      >
        <IconGlobe size={18} />
        <span className="hidden text-xs font-semibold text-[var(--color-text)] sm:inline">
          {current.short}
        </span>
        <IconChevronDown
          size={14}
          className={`hidden text-[var(--color-text-muted)] transition-transform sm:inline ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label="Ngôn ngữ"
          className="absolute right-0 top-full z-50 mt-1 min-w-[150px] overflow-hidden rounded border border-[var(--color-border)] bg-[var(--color-bg)] shadow-lg"
        >
          {options.map((o) => {
            const selected = o.value === lang;
            return (
              <li key={o.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(o.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm transition sm:py-2 ${
                    selected
                      ? "bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  <span>{o.label}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {o.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}