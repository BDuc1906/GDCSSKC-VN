import Link from "next/link";
import { mainNav } from "@/config/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b-4 border-[var(--color-primary)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-[var(--color-primary)]">
          Hội GDCSSKCĐ Việt Nam
        </Link>

        <nav className="hidden gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/dang-nhap"
            className="rounded bg-[var(--color-primary)] px-4 py-2 font-medium text-[var(--color-on-primary)]"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}