import type { NavItem } from "@/types";

export type MegaIcon =
  | "home"
  | "users"
  | "user"
  | "doc"
  | "book"
  | "news"
  | "calendar"
  | "building"
  | "chat"
  | "shield"
  | "heart"
  | "money"
  | "camera"
  | "mail"
  | "chart";

export type MegaItem = NavItem & {
  icon?: MegaIcon;
  description?: string;
};

export type MegaColumn = {
  title: string;
  items: MegaItem[];
  /** Cột đầu tiên có nền nhạt hơn */
  highlight?: boolean;
};

export type MegaGroup = {
  matchHref: string;
  columns: MegaColumn[];
  cta?: { label: string; href: string };
  /** Thumbnail cho sự kiện nổi bật */
  thumbnail?: {
    title: string;
    subtitle: string;
    href: string;
    gradient: string;
    icon: MegaIcon;
  };
};

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Tin tức", href: "/news" },
  { label: "Văn bản", href: "/documents" },
  { label: "Tổ chức", href: "/organization" },
  { label: "Báo cáo", href: "/reports" },
  { label: "Hội viên", href: "/members" },
  { label: "Diễn đàn", href: "/forum" },
  { label: "Liên hệ", href: "/contact" },
];

export const megaGroups: MegaGroup[] = [
  {
    matchHref: "/about",
    columns: [
      {
        title: "Về Hội",
        highlight: true,
        items: [
          {
            label: "Giới thiệu chung",
            href: "/about",
            icon: "home",
            description: "Tóm tắt về Hội",
          },
          {
            label: "Ban lãnh đạo",
            href: "/leadership",
            icon: "users",
            description: "BCH, Ban Thường vụ",
          },
          {
            label: "Hệ thống tổ chức",
            href: "/organization",
            icon: "building",
            description: "6 loại đơn vị",
          },
        ],
      },
      {
        title: "Nhân sự",
        items: [
          { label: "Ban Chấp hành", href: "/leadership#bch", icon: "user" },
          { label: "Ban Thường vụ", href: "/leadership#btv", icon: "user" },
          {
            label: "Lãnh đạo đơn vị",
            href: "/leadership#don-vi",
            icon: "users",
          },
          { label: "Bổ nhiệm cán bộ", href: "/governance", icon: "doc" },
        ],
      },
    ],
  },
  {
    matchHref: "/news",
    columns: [
      {
        title: "Chuyên mục tin",
        highlight: true,
        items: [
          {
            label: "Chính sách - Pháp luật",
            href: "/news",
            icon: "shield",
            description: "Văn bản, chủ trương mới",
          },
          {
            label: "Sự kiện của Hội",
            href: "/news",
            icon: "calendar",
            description: "Đại hội, hội nghị",
          },
          {
            label: "Hoạt động đơn vị",
            href: "/news",
            icon: "building",
            description: "Tin từ Chi hội",
          },
          { label: "Hoạt động khác", href: "/news", icon: "heart" },
        ],
      },
      {
        title: "Sự kiện",
        items: [
          { label: "Lịch sự kiện", href: "/events", icon: "calendar" },
          { label: "Hội nghị - Hội thảo", href: "/events", icon: "chat" },
          { label: "Thiện nguyện", href: "/news", icon: "heart" },
        ],
      },
      {
        title: "Đa phương tiện",
        items: [
          { label: "Thư viện ảnh", href: "/gallery", icon: "camera" },
          { label: "Tin nổi bật", href: "/news", icon: "news" },
        ],
      },
    ],
    cta: { label: "Tất cả tin tức →", href: "/news" },
    thumbnail: {
      title: "Hội nghị BCH mở rộng 2025",
      subtitle: "Đánh giá công tác năm và triển khai nhiệm vụ",
      href: "/news",
      gradient: "linear-gradient(135deg,#16A34A 0%,#22C55E 100%)",
      icon: "calendar",
    },
  },
  {
    matchHref: "/documents",
    columns: [
      {
        title: "Văn bản pháp lý",
        highlight: true,
        items: [
          {
            label: "Điều lệ Hội",
            href: "/documents",
            icon: "book",
            description: "Văn bản nền tảng",
          },
          { label: "Quyết định thành lập", href: "/documents", icon: "doc" },
        ],
      },
      {
        title: "Quản trị",
        items: [
          { label: "Quy định Chi hội", href: "/governance", icon: "doc" },
          { label: "Quy định Liên Chi hội", href: "/governance", icon: "doc" },
          { label: "Chế độ báo cáo", href: "/governance", icon: "chart" },
          { label: "Quy định bổ nhiệm", href: "/governance", icon: "user" },
        ],
      },
      {
        title: "Báo cáo",
        items: [
          { label: "Danh sách báo cáo", href: "/reports", icon: "chart" },
          { label: "Gửi báo cáo mới", href: "/reports/new", icon: "doc" },
        ],
      },
    ],
  },
  {
    matchHref: "/organization",
    columns: [
      {
        title: "Hệ thống tổ chức",
        highlight: true,
        items: [
          { label: "Cơ quan TW Hội", href: "/organization", icon: "building" },
          { label: "Liên Chi hội", href: "/organization", icon: "building" },
          { label: "Chi hội", href: "/organization", icon: "building" },
        ],
      },
      {
        title: "Đơn vị trực thuộc",
        items: [
          {
            label: "Viện và Trung tâm",
            href: "/organization",
            icon: "building",
          },
          {
            label: "Văn phòng đại diện",
            href: "/organization",
            icon: "building",
          },
          {
            label: "Doanh nghiệp hội viên",
            href: "/organization",
            icon: "money",
          },
        ],
      },
    ],
  },
  {
    matchHref: "/reports",
    columns: [
      {
        title: "Báo cáo",
        highlight: true,
        items: [
          {
            label: "Danh sách báo cáo",
            href: "/reports",
            icon: "chart",
            description: "Xem tất cả báo cáo",
          },
          {
            label: "Gửi báo cáo mới",
            href: "/reports/new",
            icon: "doc",
            description: "Tạo báo cáo mới",
          },
        ],
      },
      {
        title: "Hình thức gửi",
        items: [
          {
            label: "Báo cáo Offline",
            href: "/reports/new/offline",
            icon: "doc",
            description: "Upload file PDF/DOCX",
          },
          {
            label: "Báo cáo Online",
            href: "/reports/new/online",
            icon: "chart",
            description: "Điền trực tiếp",
          },
        ],
      },
      {
        title: "Dành cho TW Hội",
        items: [
          {
            label: "Duyệt báo cáo",
            href: "/admin/reports",
            icon: "shield",
            description: "Ban Thường vụ duyệt",
          },
        ],
      },
    ],
  },
  {
    matchHref: "/members",
    columns: [
      {
        title: "Hội viên",
        highlight: true,
        items: [
          { label: "Kết nạp hội viên", href: "/members", icon: "users" },
          { label: "Hội viên cá nhân", href: "/members", icon: "user" },
          { label: "Hội viên tổ chức", href: "/members", icon: "building" },
        ],
      },
      {
        title: "Hội phí",
        items: [
          { label: "Biểu phí, hội phí", href: "/fees", icon: "money" },
          { label: "Đóng phí trực tuyến", href: "/fees", icon: "money" },
          { label: "Đóng góp từ thiện", href: "/fees", icon: "heart" },
        ],
      },
    ],
  },
];