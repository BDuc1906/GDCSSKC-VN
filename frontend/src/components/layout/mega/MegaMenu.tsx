"use client";

import Link from "next/link";
import type { MegaGroup, MegaIcon } from "@/config/navigation";

function Icon({ name, size = 18 }: { name: MegaIcon; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M14 20c0-2 2-3 4-3s3 1 3 3" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z" />
          <path d="M18 4a3 3 0 0 1 3 3v13h-3" />
        </svg>
      );
    case "news":
      return (
        <svg {...common}>
          <path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 0 2-2V9h-3" />
          <rect x="4" y="5" width="15" height="15" rx="2" />
          <path d="M8 10h7M8 14h5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20.5s-7-4.5-7-9.5a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5-7 9.5-7 9.5z" />
        </svg>
      );
    case "money":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 12h.01M17 12h.01" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function MegaMenu({ group }: { group: MegaGroup }) {
  const hasThumbnail = !!group.thumbnail;
  const cols = group.columns.length;

  /* Grid template columns – dùng inline style để chính xác với mọi số cột */
  const gridTemplateColumns = hasThumbnail
    ? `repeat(${cols}, minmax(0, 1fr)) 1.4fr`
    : `repeat(${cols}, minmax(0, 1fr))`;

  return (
    /* Full-width backdrop – khớp với header */
    <div className="absolute left-0 right-0 top-full z-50 border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] shadow-xl">
      {/* Container khớp với nav (max-w-7xl) */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6" style={{ gridTemplateColumns }}>
          {/* Các cột dữ liệu */}
          {group.columns.map((col, idx) => (
            <div
              key={col.title}
              className={`min-w-0 ${
                idx > 0
                  ? "border-l border-[var(--color-border)] pl-6"
                  : ""
              }`}
            >
              <div
                className={
                  col.highlight
                    ? "rounded-lg bg-[var(--color-surface)] px-4 py-3"
                    : ""
                }
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label + item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-2.5 rounded px-1.5 py-1.5 transition hover:bg-[var(--color-primary-soft)]"
                      >
                        {item.icon && (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[var(--color-primary)] transition group-hover:scale-110">
                            <Icon name={item.icon} size={16} />
                          </span>
                        )}
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-[var(--color-text)] transition group-hover:text-[var(--color-primary)]">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 block text-[11px] leading-snug text-[var(--color-text-muted)]">
                              {item.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Thumbnail nổi bật */}
          {group.thumbnail && (
            <div className="min-w-0 border-l border-[var(--color-border)] pl-6">
              <Link
                href={group.thumbnail.href}
                className="group flex h-full min-h-[200px] flex-col overflow-hidden rounded-lg border border-[var(--color-border)] transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg"
              >
                <div
                  className="flex h-28 items-center justify-center text-white"
                  style={{ background: group.thumbnail.gradient }}
                >
                  <Icon name={group.thumbnail.icon} size={36} />
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                    Nổi bật
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                    {group.thumbnail.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-[var(--color-text-muted)]">
                    {group.thumbnail.subtitle}
                  </p>
                  <span className="mt-auto pt-2 text-xs font-semibold text-[var(--color-primary)]">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        {group.cta && (
          <div className="mt-5 flex justify-end border-t border-[var(--color-border)] pt-4">
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
  );
}