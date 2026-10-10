export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarGradient: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Tham gia Hội, tôi có cơ hội cống hiến cho cộng đồng thông qua các chương trình khám sức khoẻ miễn phí. Đây là công việc ý nghĩa và nhân văn.",
    name: "BS. Nguyễn Thị A",
    role: "Hội viên cá nhân – Chi hội Hà Nội",
    avatarGradient: "linear-gradient(135deg,#16A34A,#22C55E)",
  },
  {
    id: "t2",
    quote:
      "Hội là cầu nối giúp các Chi hội, Liên chi hội trên cả nước chia sẻ kinh nghiệm, hỗ trợ nhau trong công tác chăm sóc sức khoẻ cộng đồng.",
    name: "TS. Trần Văn B",
    role: "Chủ tịch Liên Chi hội miền Trung",
    avatarGradient: "linear-gradient(135deg,#22C55E,#4ADE80)",
  },
  {
    id: "t3",
    quote:
      "Được Hội hỗ trợ đào tạo, tập huấn, đội ngũ cán bộ y tế của chúng tôi đã nâng cao năng lực và phục vụ nhân dân tốt hơn.",
    name: "ThS. Lê Thị C",
    role: "Lãnh đạo đơn vị pháp nhân",
    avatarGradient: "linear-gradient(135deg,#15803D,#16A34A)",
  },
];