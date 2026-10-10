"use client";

import Link from "next/link";
import { mainNav } from "@/config/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchBox from "@/components/search/SearchBox";
import Logo from "@/components/layout/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-bg)] shadow-sm">
      {/* ───── TẦNG 1: Logo | Search | Actions ───── */}
      <div className="border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          <Logo />

          <div className="hidden flex-1 justify-center md:flex">
            <SearchBox />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden whitespace-nowrap rounded border border-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] md:inline-flex"
            >
              Đăng nhập
            </Link>
            <Link
              href="/register"
              className="hidden whitespace-nowrap rounded bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)] md:inline-flex"
            >
              Đăng ký
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* ───── TẦNG 2: Nav bar ───── */}
      <nav
        aria-label="Điều hướng chính"
        className="hidden border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] lg:block"
      >
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex items-center gap-0.5 overflow-x-auto py-1.5">
            {mainNav.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block whitespace-nowrap rounded px-3 py-2 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}