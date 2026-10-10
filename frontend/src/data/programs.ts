export type Program = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "heart" | "shield" | "book" | "users";
  gradient: string;
};

export const programs: Program[] = [
  {
    id: "p1",
    title: "Khám sức khoẻ miễn phí",
    description:
      "Tổ chức các đợt khám, tư vấn và cấp phát thuốc miễn phí cho người dân ở vùng sâu, vùng xa, đối tượng chính sách.",
    href: "/news",
    icon: "heart",
    gradient: "linear-gradient(135deg,#16A34A 0%,#22C55E 100%)",
  },
  {
    id: "p2",
    title: "Giáo dục sức khoẻ cộng đồng",
    description:
      "Tuyên truyền, phổ biến kiến thức về dinh dưỡng, phòng chống dịch bệnh và các bệnh không lây nhiễm.",
    href: "/news",
    icon: "book",
    gradient: "linear-gradient(135deg,#22C55E 0%,#16A34A 100%)",
  },
  {
    id: "p3",
    title: "Nghiên cứu khoa học",
    description:
      "Thực hiện các đề tài nghiên cứu về y tế công cộng, dinh dưỡng và chăm sóc sức khoẻ cộng đồng.",
    href: "/news",
    icon: "shield",
    gradient: "linear-gradient(135deg,#15803D 0%,#16A34A 100%)",
  },
  {
    id: "p4",
    title: "Phát triển hội viên",
    description:
      "Kết nạp hội viên mới, xây dựng mạng lưới Chi hội, Liên chi hội trên toàn quốc.",
    href: "/members",
    icon: "users",
    gradient: "linear-gradient(135deg,#16A34A 0%,#4ADE80 100%)",
  },
];