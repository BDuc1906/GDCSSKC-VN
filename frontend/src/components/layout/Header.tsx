"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, megaGroups } from "@/config/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchBox from "@/components/search/SearchBox";
import Logo from "@/components/layout/Logo";
import MegaMenu from "@/components/layout/mega/MegaMenu";

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const activeGroup = megaGroups.find((g) => g.matchHref === hovered);

  return (
    <header
      className="sticky top-0 z-40 bg-[var(--color-bg)] shadow-sm"
      onMouseLeave={() => setHovered(null)}
    >
      {/* TẦNG 1 */}
      <div className="border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:h-16 sm:gap-4 sm:px-4 lg:px-6">
          <Logo />

          <div className="hidden flex-1 justify-center md:flex">
            <SearchBox />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            <Link
              href="/login"
              className="hidden whitespace-nowrap rounded border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)] md:inline-flex"
            >
              Đăng nhập
            </Link>
            <Link
              href="/register"
              className="hidden whitespace-nowrap rounded bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-on-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-md md:inline-flex"
            >
              Đăng ký
            </Link>

            <MobileMenu />
          </div>
        </div>
      </div>

      {/* TẦNG 2: Nav với mega menu */}
      <nav
        aria-label="Điều hướng chính"
        className="relative hidden border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] md:block"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <ul className="flex items-center gap-0.5 overflow-x-auto py-1.5">
            {mainNav.map((item) => {
              const hasMega = megaGroups.some(
                (g) => g.matchHref === item.href,
              );
              const isActive = hovered === item.href;

              return (
                <li
                  key={item.href}
                  className="shrink-0"
                  onMouseEnter={() => setHovered(hasMega ? item.href : null)}
                >
                  <Link
                    href={item.href}
                    className={`group relative block whitespace-nowrap rounded px-2.5 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                    {hasMega && (
                      <span
                        aria-hidden
                        className="ml-1 inline-block text-[10px]"
                      >
                        ▾
                      </span>
                    )}
                    <span
                      aria-hidden
                      className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 origin-left bg-[var(--color-primary)] transition-transform duration-300 sm:left-3 sm:right-3 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {activeGroup && <MegaMenu group={activeGroup} />}
      </nav>
    </header>
  );
}