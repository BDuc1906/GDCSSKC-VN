import type {
  ForumCategory,
  ForumTopic,
  ForumReply,
} from "@/types";

export const forumCategories: ForumCategory[] = [
  {
    id: "general",
    name: "Thảo luận chung",
    description:
      "Trao đổi về các chủ đề chung liên quan đến hoạt động của Hội và ngành y tế cộng đồng.",
    icon: "chat",
    color: "#16A34A",
  },
  {
    id: "qa",
    name: "Hỏi đáp chuyên môn",
    description:
      "Đặt câu hỏi và chia sẻ kinh nghiệm về chuyên môn y tế, chăm sóc sức khoẻ cộng đồng.",
    icon: "question",
    color: "#0EA5E9",
  },
  {
    id: "ideas",
    name: "Sáng kiến & Đề xuất",
    description:
      "Đề xuất ý tưởng, sáng kiến đóng góp cho sự phát triển của Hội và cộng đồng.",
    icon: "idea",
    color: "#F59E0B",
  },
  {
    id: "announcements",
    name: "Thông báo từ Hội",
    description:
      "Các thông báo, tin tức quan trọng từ Ban Thường vụ và Văn phòng Trung ương Hội.",
    icon: "news",
    color: "#16A34A",
  },
];

export const forumTopics: ForumTopic[] = [
  {
    id: "t1",
    categoryId: "general",
    title: "Chia sẻ kinh nghiệm tổ chức khám sức khoẻ miễn phí ở vùng sâu",
    excerpt:
      "Chi hội chúng tôi vừa tổ chức đợt khám sức khoẻ miễn phí cho bà con ở vùng sâu, xin chia sẻ một số kinh nghiệm...",
    author: "BS. Nguyễn Thị A",
    authorRole: "Chi hội Hà Nội",
    createdAt: "2 giờ trước",
    replies: 12,
    views: 245,
    pinned: true,
    tags: ["Thiện nguyện", "Kinh nghiệm"],
    content: [
      "Chào các anh chị, Chi hội chúng tôi vừa tổ chức đợt khám sức khoẻ miễn phí cho bà con ở vùng sâu. Đợt này chúng tôi khám cho khoảng 500 lượt người dân trong 2 ngày.",
      "Một số kinh nghiệm chúng tôi rút ra: cần chuẩn bị trước danh sách bệnh nhân, phân chia ca khám theo khung giờ để tránh ùn tắc, và quan trọng nhất là có đội ngũ tình nguyện viên hỗ trợ hướng dẫn bà con.",
      "Ngoài ra, việc phối hợp với chính quyền địa phương và trạm y tế xã từ sớm giúp công tác chuẩn bị thuận lợi hơn rất nhiều.",
    ],
  },
  {
    id: "t2",
    categoryId: "qa",
    title: "Thủ tục thành lập Chi hội mới cần những giấy tờ gì?",
    excerpt:
      "Tôi muốn thành lập Chi hội tại địa phương, xin hỏi cần chuẩn bị những hồ sơ gì và gửi về đâu?",
    author: "TS. Trần Văn B",
    authorRole: "Hội viên cá nhân",
    createdAt: "1 ngày trước",
    replies: 5,
    views: 189,
    tags: ["Thủ tục", "Chi hội"],
    content: [
      "Kính thưa Ban Thường vụ, tôi là hội viên cá nhân, hiện đang sinh hoạt tại Chi hội Hà Nội. Tôi muốn thành lập Chi hội mới tại quê nhà, xin hỏi cần chuẩn bị những hồ sơ gì?",
      "Theo tôi được biết cần có đơn đề nghị, đề án thành lập và danh sách hội viên sáng lập. Ngoài ra còn cần giấy tờ gì nữa không?",
    ],
  },
  {
    id: "t3",
    categoryId: "ideas",
    title: "Đề xuất tổ chức chuỗi hội thảo trực tuyến về dinh dưỡng",
    excerpt:
      "Tôi thấy Hội nên tổ chức chuỗi hội thảo trực tuyến hàng tháng về dinh dưỡng cộng đồng để thu hút đông đảo hội viên tham gia.",
    author: "ThS. Lê Thị C",
    authorRole: "Ban chuyên môn",
    createdAt: "3 ngày trước",
    replies: 8,
    views: 312,
    tags: ["Đề xuất", "Hội thảo"],
    content: [
      "Kính thưa Ban Thường vụ, tôi xin đề xuất Hội tổ chức chuỗi hội thảo trực tuyến hàng tháng về các chủ đề dinh dưỡng và sức khoẻ cộng đồng.",
      "Với hình thức trực tuyến, hội viên ở các tỉnh xa có thể dễ dàng tham gia, đồng thời Hội cũng tiết kiệm được chi phí tổ chức.",
      "Tôi sẵn sàng hỗ trợ Ban chuyên môn trong việc xây dựng nội dung và mời diễn giả cho các buổi đầu tiên.",
    ],
  },
  {
    id: "t4",
    categoryId: "announcements",
    title: "Thông báo về việc tổ chức Đại hội nhiệm kỳ 2025-2030",
    excerpt:
      "Ban Thường vụ Hội thông báo kế hoạch tổ chức Đại hội đại biểu toàn quốc nhiệm kỳ 2025-2030.",
    author: "Văn phòng TW Hội",
    authorRole: "Ban Thường vụ",
    createdAt: "1 tuần trước",
    replies: 3,
    views: 567,
    pinned: true,
    locked: true,
    tags: ["Đại hội", "Thông báo"],
    content: [
      "Ban Thường vụ Hội GDCSSKCĐ Việt Nam thông báo kế hoạch tổ chức Đại hội đại biểu toàn quốc nhiệm kỳ 2025-2030.",
      "Thời gian dự kiến: quý II/2026. Địa điểm: Hà Nội.",
      "Các Chi hội, Liên Chi hội cần chuẩn bị báo cáo tổng kết nhiệm kỳ và danh sách đại biểu tham dự Đại hội theo quy định.",
    ],
  },
  {
    id: "t5",
    categoryId: "general",
    title: "Cách tiếp cận truyền thông sức khoẻ hiệu quả cho người cao tuổi",
    excerpt:
      "Người cao tuổi thường khó tiếp cận thông tin qua internet. Xin chia sẻ cách truyền thông phù hợp cho nhóm đối tượng này.",
    author: "BS. Phạm Thị D",
    authorRole: "Chi hội TP.HCM",
    createdAt: "5 ngày trước",
    replies: 15,
    views: 421,
    tags: ["Truyền thông", "Người cao tuổi"],
    content: [
      "Chào các anh chị, đối tượng người cao tuổi tại địa phương chúng tôi ít sử dụng internet nên việc truyền thông qua mạng xã hội không hiệu quả.",
      "Chúng tôi đang thử nghiệm các buổi nói chuyện trực tiếp tại nhà văn hoá, phát tờ rơi chữ to, và phối hợp với đài phát thanh xã. Kết quả ban đầu khá khả quan.",
      "Anh chị nào có kinh nghiệm về truyền thông cho người cao tuổi xin chia sẻ thêm.",
    ],
  },
];

export const forumReplies: ForumReply[] = [
  {
    id: "r1",
    topicId: "t1",
    author: "BS. Lê Văn E",
    authorRole: "Chi hội Đà Nẵng",
    createdAt: "1 giờ trước",
    content:
      "Cảm ơn chia sẻ của anh. Chúng tôi cũng đang chuẩn bị đợt khám tương tự, kinh nghiệm phân chia ca khám theo khung giờ rất hữu ích.",
    likes: 5,
  },
  {
    id: "r2",
    topicId: "t1",
    author: "ThS. Hoàng Thị F",
    authorRole: "Ban chuyên môn",
    createdAt: "45 phút trước",
    content:
      "Bổ sung thêm: nên chuẩn bị sẵn các mẫu bệnh án đơn giản để ghi chép nhanh, đồng thời có khu vực riêng cho các ca cần tư vấn sâu.",
    likes: 3,
  },
  {
    id: "r3",
    topicId: "t2",
    author: "Văn phòng TW Hội",
    authorRole: "Ban Thường vụ",
    createdAt: "20 giờ trước",
    content:
      "Chào anh, hồ sơ thành lập Chi hội bao gồm: (1) Đơn đề nghị thành lập, (2) Đề án thành lập, (3) Danh sách hội viên sáng lập, (4) Sơ yếu lý lịch của các hội viên sáng lập. Anh gửi về Văn phòng Trung ương Hội theo địa chỉ trên website.",
    likes: 8,
  },
];

export function getCategoryById(id: string) {
  return forumCategories.find((c) => c.id === id);
}

export function getTopicById(id: string) {
  return forumTopics.find((t) => t.id === id);
}

export function getTopicsByCategory(categoryId: string) {
  return forumTopics.filter((t) => t.categoryId === categoryId);
}

export function getRepliesByTopic(topicId: string) {
  return forumReplies.filter((r) => r.topicId === topicId);
}

export function countTopics(categoryId: string) {
  return forumTopics.filter((t) => t.categoryId === categoryId).length;
}