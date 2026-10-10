"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  description?: string;
  /** Ghi đè breadcrumb tự động */
  breadcrumb?: BreadcrumbItem[];
  /** Ẩn breadcrumb nếu không cần */
  hideBreadcrumb?: boolean;
};

/* Bản đồ dịch segment URL → tiếng Việt */
const LABELS: Record<string, string> = {
  about: "Giới thiệu",
  leadership: "Ban lãnh đạo",
  documents: "Văn bản",
  news: "Tin tức - Sự kiện",
  events: "Lịch sự kiện",
  organization: "Hệ thống tổ chức",
  governance: "Quản trị",
  reports: "Báo cáo",
  members: "Hội viên",
  fees: "Hội phí",
  forum: "Diễn đàn",
  gallery: "Thư viện ảnh",
  contact: "Liên hệ",
  search: "Tìm kiếm",
  login: "Đăng nhập",
  register: "Đăng ký",
  "forgot-password": "Quên mật khẩu",
  admin: "Quản trị",
  new: "Gửi mới",
  offline: "Báo cáo Offline",
  online: "Báo cáo Online",
  profile: "Trang cá nhân",
};

function buildBreadcrumb(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((seg, idx) => ({
    label: LABELS[seg] ?? decodeURIComponent(seg),
    href: "/" + segments.slice(0, idx + 1).join("/"),
  }));
}

export default function PageHero({
  title,
  description,
  breadcrumb,
  hideBreadcrumb = false,
}: PageHeroProps) {
  const pathname = usePathname();

  const items =
    breadcrumb ??
    (pathname && pathname !== "/" ? buildBreadcrumb(pathname) : []);

  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
      <Container className="py-8 sm:py-10 md:py-14">
        {!hideBreadcrumb && items.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex flex-wrap items-center gap-1.5 text-xs text-white/80 sm:text-sm"
          >
            <Link
              href="/"
              className="transition hover:text-white hover:underline"
            >
              Trang chủ
            </Link>
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <span key={i} className="flex items-center gap-1.5">
                  <span aria-hidden className="text-white/50">
                    /
                  </span>
                  {isLast || !item.href ? (
                    <span className="font-medium text-white">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        <h1 className="text-balance text-xl font-bold sm:text-2xl md:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-pretty text-sm opacity-90 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}