"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { IconMenu, IconClose } from "@/components/ui/Icons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-primary)] transition hover:border-[var(--color-primary)]"
      >
        {open ? <IconClose size={20} /> : <IconMenu size={20} />}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full max-h-[85vh] overflow-y-auto border-b-4 border-[var(--color-primary)] bg-[var(--color-bg)] shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[var(--color-border)] py-3.5 text-sm font-medium last:border-b-0 hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded border border-[var(--color-primary)] px-4 text-center text-sm font-semibold text-[var(--color-primary)]"
              >
                Đăng nhập
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-4 text-center text-sm font-semibold text-[var(--color-on-primary)]"
              >
                Đăng ký
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}