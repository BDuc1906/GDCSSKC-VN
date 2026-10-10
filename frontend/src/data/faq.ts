export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "Làm thế nào để trở thành hội viên của Hội?",
    answer:
      "Cá nhân hoặc tổ chức có nguyện vọng tham gia Hội cần nộp đơn đăng ký kèm hồ sơ theo quy định. Sau khi được Ban Thường vụ xét duyệt, hội viên sẽ được cấp Thẻ hội viên và hưởng các quyền lợi theo Điều lệ Hội.",
  },
  {
    id: "f2",
    question: "Mức hội phí hàng năm là bao nhiêu?",
    answer:
      "Hội phí đối với hội viên cá nhân là 200.000đ/năm, hội viên tổ chức/tập thể là 2.000.000đ/năm. Đối với đơn vị pháp nhân trực thuộc, mức phí thành lập áp dụng theo Quy chế phí của Hội.",
  },
  {
    id: "f3",
    question: "Hội viên được hưởng những quyền lợi gì?",
    answer:
      "Hội viên được tham gia các hoạt động chuyên môn, hội thảo, tập huấn; được hỗ trợ về chuyên môn, nghiệp vụ; được tham gia các chương trình khám sức khoẻ cộng đồng; được cấp Thẻ hội viên và các tài liệu của Hội.",
  },
  {
    id: "f4",
    question: "Làm thế nào để thành lập Chi hội mới?",
    answer:
      "Cá nhân hoặc tổ chức có nhu cầu thành lập Chi hội cần gửi hồ sơ theo quy định tới Ban Thường vụ Hội. Hồ sơ bao gồm: Đơn đề nghị thành lập, đề án thành lập, danh sách hội viên sáng lập. Sau khi Ban Thường vụ xem xét và ra Quyết định thành lập, Chi hội chính thức đi vào hoạt động.",
  },
  {
    id: "f5",
    question: "Làm sao để đóng hội phí trực tuyến?",
    answer:
      "Hội viên và các đơn vị có thể đóng hội phí trực tuyến qua các kênh thanh toán được Hội công bố. Sau khi đóng, vui lòng gửi xác nhận tới Văn phòng Trung ương Hội để được ghi nhận.",
  },
];