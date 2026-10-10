import type { NavItem } from "@/types";

export type MegaColumn = {
  title: string;
  items: NavItem[];
};

export type MegaGroup = {
  matchHref: string;
  columns: MegaColumn[];
  cta?: { label: string; href: string };
};

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Ban lãnh đạo", href: "/leadership" },
  { label: "Văn bản", href: "/documents" },
  { label: "Tin tức - Sự kiện", href: "/news" },
  { label: "Lịch sự kiện", href: "/events" },
  { label: "Hệ thống tổ chức", href: "/organization" },
  { label: "Quản trị", href: "/governance" },
  { label: "Báo cáo", href: "/reports" },
  { label: "Hội viên", href: "/members" },
  { label: "Hội phí", href: "/fees" },
  { label: "Diễn đàn", href: "/forum" },
  { label: "Thư viện ảnh", href: "/gallery" },
  { label: "Liên hệ", href: "/contact" },
];

export const megaGroups: MegaGroup[] = [
  {
    matchHref: "/about",
    columns: [
      {
        title: "Tổng quan",
        items: [
          { label: "Giới thiệu chung", href: "/about" },
          { label: "Tầm nhìn - Sứ mệnh", href: "/about#tam-nhin" },
          { label: "Lịch sử hình thành", href: "/about#lich-su" },
        ],
      },
      {
        title: "Nhân sự",
        items: [
          { label: "Ban lãnh đạo Hội", href: "/leadership" },
          { label: "Ban Chấp hành", href: "/leadership#bch" },
          { label: "Ban Thường vụ", href: "/leadership#btv" },
        ],
      },
    ],
  },
  {
    matchHref: "/documents",
    columns: [
      {
        title: "Văn bản pháp lý",
        items: [
          { label: "Điều lệ Hội", href: "/documents#charter" },
          { label: "Quyết định thành lập", href: "/documents#charter" },
        ],
      },
      {
        title: "Văn bản quản trị",
        items: [
          { label: "Quy định Chi hội", href: "/governance" },
          { label: "Quy định Liên Chi hội", href: "/governance" },
          { label: "Chế độ báo cáo", href: "/governance" },
        ],
      },
      {
        title: "Hội viên & Phí",
        items: [
          { label: "Quy định kết nạp", href: "/members" },
          { label: "Quy định phí, hội phí", href: "/fees" },
        ],
      },
    ],
    cta: { label: "Tìm văn bản →", href: "/search" },
  },
  {
    matchHref: "/news",
    columns: [
      {
        title: "Chuyên mục tin",
        items: [
          { label: "Chính sách - Pháp luật", href: "/news" },
          { label: "Sự kiện của Hội", href: "/news" },
          { label: "Hoạt động đơn vị", href: "/news" },
          { label: "Hoạt động khác", href: "/news" },
        ],
      },
      {
        title: "Sự kiện",
        items: [
          { label: "Lịch sự kiện sắp tới", href: "/events" },
          { label: "Hội nghị - Hội thảo", href: "/events" },
          { label: "Thiện nguyện", href: "/news" },
        ],
      },
      {
        title: "Đa phương tiện",
        items: [
          { label: "Thư viện ảnh", href: "/gallery" },
          { label: "Tin nổi bật", href: "/news" },
        ],
      },
    ],
    cta: { label: "Tất cả tin tức →", href: "/news" },
  },
  {
    matchHref: "/organization",
    columns: [
      {
        title: "Hệ thống tổ chức",
        items: [
          { label: "Cơ quan TW Hội", href: "/organization" },
          { label: "Liên Chi hội", href: "/organization" },
          { label: "Chi hội", href: "/organization" },
        ],
      },
      {
        title: "Đơn vị trực thuộc",
        items: [
          { label: "Viện và Trung tâm", href: "/organization" },
          { label: "Văn phòng đại diện", href: "/organization" },
          { label: "Doanh nghiệp hội viên", href: "/organization" },
        ],
      },
    ],
  },
  {
    matchHref: "/reports",
    columns: [
      {
        title: "Báo cáo",
        items: [
          { label: "Danh sách báo cáo", href: "/reports" },
          { label: "Gửi báo cáo mới", href: "/reports/new" },
        ],
      },
      {
        title: "Hình thức",
        items: [
          { label: "Báo cáo Offline (upload file)", href: "/reports/new/offline" },
          { label: "Báo cáo Online (điền trực tiếp)", href: "/reports/new/online" },
        ],
      },
      {
        title: "Dành cho TW Hội",
        items: [
          { label: "Duyệt báo cáo", href: "/admin/reports" },
        ],
      },
    ],
  },
  {
    matchHref: "/members",
    columns: [
      {
        title: "Hội viên",
        items: [
          { label: "Kết nạp hội viên", href: "/members" },
          { label: "Hội viên cá nhân", href: "/members" },
          { label: "Hội viên tổ chức", href: "/members" },
        ],
      },
      {
        title: "Hội phí",
        items: [
          { label: "Biểu phí, hội phí", href: "/fees" },
          { label: "Đóng phí trực tuyến", href: "/fees" },
          { label: "Đóng góp từ thiện", href: "/fees" },
        ],
      },
    ],
  },
];