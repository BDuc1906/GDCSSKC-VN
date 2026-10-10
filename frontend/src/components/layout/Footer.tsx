import Link from "next/link";
import { site } from "@/config/site";
import { mainNav } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="mx-auto grid max-w-7xl gap-6 px-3 py-8 sm:gap-8 sm:px-4 sm:py-10 md:grid-cols-3 lg:px-6">
        <div>
          <p className="text-balance text-sm font-bold sm:text-base">
            {site.name}
          </p>
          <p className="mt-2 text-pretty text-xs opacity-80 sm:text-sm">
            {site.fullName}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80 sm:text-sm">
            Liên kết
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm md:grid-cols-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="opacity-90 transition hover:text-[var(--color-primary)] hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80 sm:text-sm">
            Liên hệ
          </p>
          <ul className="mt-3 space-y-2 text-xs opacity-90 sm:text-sm">
            <li className="text-pretty">Địa chỉ: {site.address}</li>
            <li>Điện thoại: {site.phone}</li>
            <li className="break-all">Email: {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-3 py-4 text-[10px] opacity-70 sm:px-4 sm:text-xs lg:px-6">
          © 2026 Bản quyền thuộc về {site.name}.
        </div>
      </div>
    </footer>
  );
}