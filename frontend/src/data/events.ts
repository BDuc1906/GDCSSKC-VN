export type Event = {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  description: string;
  href?: string;
};

export const upcomingEvents: Event[] = [
  {
    id: "e1",
    title: "Hội nghị Ban Thường vụ mở rộng quý IV/2025",
    date: "2025-11-15",
    location: "Hà Nội",
    description:
      "Đánh giá kết quả công tác năm và xây dựng phương hướng nhiệm vụ năm tiếp theo.",
  },
  {
    id: "e2",
    title: "Hội thảo khoa học về dinh dưỡng cộng đồng",
    date: "2025-12-05",
    location: "TP. Hồ Chí Minh",
    description:
      "Các chuyên gia chia sẻ kết quả nghiên cứu và đề xuất giải pháp cải thiện dinh dưỡng.",
  },
  {
    id: "e3",
    title: "Chương trình khám sức khoẻ miễn phí",
    date: "2025-12-20",
    location: "Đà Nẵng",
    description:
      "Phối hợp với các Chi hội tổ chức khám và tư vấn sức khoẻ cho người dân.",
  },
];

export function formatEventDate(iso: string, locale = "vi-VN") {
  const d = new Date(iso);
  return d.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}