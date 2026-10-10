import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    title: "Hội tổ chức Hội nghị Ban Thường vụ mở rộng quý IV",
    excerpt:
      "Hội nghị tập trung đánh giá kết quả công tác năm và đề ra phương hướng nhiệm vụ trọng tâm cho năm tiếp theo.",
    category: "event",
    date: "20/10/2025",
    href: "/news/n1",
  },
  {
    id: "n2",
    title: "Chính sách mới về chăm sóc sức khỏe nhân dân",
    excerpt:
      "Tổng hợp các văn bản, chủ trương mới của Đảng và Nhà nước về bảo vệ, chăm sóc và nâng cao sức khỏe nhân dân.",
    category: "policy",
    date: "15/10/2025",
    href: "/news/n2",
  },
  {
    id: "n3",
    title: "Chi hội trực thuộc tổ chức khám sức khỏe miễn phí cho người dân",
    excerpt:
      "Hoạt động thiện nguyện khám và tư vấn sức khỏe cho bà con tại địa phương, thu hút đông đảo hội viên tham gia.",
    category: "unit",
    date: "10/10/2025",
    href: "/news/n3",
  },
  {
    id: "n4",
    title: "Hội thảo khoa học về dinh dưỡng và sức khỏe cộng đồng",
    excerpt:
      "Các nhà khoa học, chuyên gia đầu ngành chia sẻ kết quả nghiên cứu và đề xuất giải pháp cải thiện dinh dưỡng.",
    category: "event",
    date: "05/10/2025",
    href: "/news/n4",
  },
];

export const newsCategoryLabels: Record<NewsItem["category"], string> = {
  policy: "Chính sách - Pháp luật",
  event: "Sự kiện của Hội",
  unit: "Hoạt động đơn vị",
  other: "Hoạt động khác",
};