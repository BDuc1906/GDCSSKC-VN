import Link from "next/link";
import { site } from "@/config/site";
import { mainNav } from "@/config/navigation";
import FooterYear from "@/components/layout/FooterYear";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-base font-bold">{site.name}</p>
          <p className="mt-2 text-sm opacity-80">{site.fullName}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
            Liên kết
          </p>
          <ul className="mt-3 space-y-2 text-sm">
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
          <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
            Liên hệ
          </p>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>Địa chỉ: {site.address}</li>
            <li>Điện thoại: {site.phone}</li>
            <li>Email: {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs opacity-70">
          © <FooterYear /> Bản quyền thuộc về {site.name}.
        </div>
      </div>
    </footer>
  );
}