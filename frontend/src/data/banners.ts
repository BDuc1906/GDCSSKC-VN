export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
  gradient: string;
};

export const banners: Banner[] = [
  {
    id: "b1",
    title: "Hội GDCSSKCĐ Việt Nam",
    subtitle:
      "Kết nối hội viên, chia sẻ tri thức và lan toả các hoạt động vì sức khoẻ cộng đồng.",
    href: "/about",
    cta: "Tìm hiểu về Hội",
    gradient: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
  },
  {
    id: "b2",
    title: "Hội nghị Ban Thường vụ mở rộng",
    subtitle:
      "Đánh giá kết quả công tác và đề ra phương hướng nhiệm vụ trọng tâm cho năm tiếp theo.",
    href: "/news",
    cta: "Xem tin tức",
    gradient: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
  },
  {
    id: "b3",
    title: "Chăm sóc sức khoẻ cộng đồng",
    subtitle:
      "Lan toả các chương trình thiện nguyện, khám chữa bệnh miễn phí cho nhân dân.",
    href: "/gallery",
    cta: "Xem thư viện ảnh",
    gradient: "linear-gradient(135deg, #15803D 0%, #16A34A 100%)",
  },
];