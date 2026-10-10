import type { NavItem } from "@/types";

/**
 * Điều hướng chính trên thanh Header.
 * Thứ tự hiển thị đúng như mảng bên dưới.
 */
export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Ban lãnh đạo", href: "/leadership" },
  { label: "Văn bản", href: "/documents" },
  { label: "Tin tức - Sự kiện", href: "/news" },
  { label: "Lịch sự kiện", href: "/events" },
  { label: "Hệ thống tổ chức", href: "/organization" },
  { label: "Quản trị", href: "/governance" },
  { label: "Hội viên", href: "/members" },
  { label: "Hội phí", href: "/fees" },
  { label: "Thư viện ảnh", href: "/gallery" },
  { label: "Liên hệ", href: "/contact" },
];

/**
 * Điều hướng phụ ở Footer (nếu muốn tách riêng).
 * Hiện dùng chung mainNav nên không bắt buộc.
 */
export const footerNav: NavItem[] = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Ban lãnh đạo", href: "/leadership" },
  { label: "Văn bản", href: "/documents" },
  { label: "Tin tức - Sự kiện", href: "/news" },
  { label: "Hệ thống tổ chức", href: "/organization" },
  { label: "Hội viên", href: "/members" },
  { label: "Hội phí", href: "/fees" },
  { label: "Liên hệ", href: "/contact" },
];

/**
 * Điều hướng pháp lý (dùng cho footer bottom nếu cần).
 */
export const legalNav: NavItem[] = [
  { label: "Điều khoản sử dụng", href: "/documents" },
  { label: "Chính sách bảo mật", href: "/documents" },
  { label: "Sitemap", href: "/sitemap.xml" },
];