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

  /* Tách "Liên hệ" ra khỏi nav chính để render dạng button */
  const navItems = mainNav.filter((item) => item.href !== "/contact");

  return (
    <header
      className="sticky top-0 z-40 bg-[var(--color-bg)] shadow-sm"
      onMouseLeave={() => setHovered(null)}
    >
      {/* ───── TẦNG 1: Logo | Search | Actions ───── */}
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
              href="/contact"
              className="hidden whitespace-nowrap rounded border-2 border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)] hover:shadow-md lg:inline-flex"
            >
              Liên hệ
            </Link>

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

      {/* ───── TẦNG 2: Nav + Mega menu ───── */}
      <nav
        aria-label="Điều hướng chính"
        className="relative hidden border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] md:block"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-start gap-0">
            {navItems.map((item) => {
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
                    className={`group relative flex items-center gap-1 whitespace-nowrap rounded px-3 py-3 text-[13.5px] font-medium transition-colors lg:text-sm ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                    {hasMega && (
                      <span aria-hidden className="text-[9px] opacity-60">
                        ▾
                      </span>
                    )}
                    <span
                      aria-hidden
                      className={`absolute bottom-1 left-3 right-3 h-0.5 origin-left bg-[var(--color-primary)] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
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