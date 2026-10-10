import type { FeeItem } from "@/types";

export const feeItems: FeeItem[] = [
  {
    id: "f1",
    title: "Hội phí hội viên cá nhân",
    audience: "Hội viên cá nhân",
    amount: "200.000đ / năm",
  },
  {
    id: "f2",
    title: "Hội phí hội viên tập thể",
    audience: "Hội viên tổ chức / tập thể",
    amount: "2.000.000đ / năm",
  },
  {
    id: "f3",
    title: "Phí thành lập Viện / Trung tâm",
    audience: "Đơn vị pháp nhân trực thuộc",
    amount: "Theo quy định tại Quy chế phí",
  },
  {
    id: "f4",
    title: "Phí thành lập Chi hội",
    audience: "Chi hội mới thành lập",
    amount: "Theo quy định tại Quy chế phí",
  },
];

export const feeReportingRules = [
  "Thông báo, nhắc nhở đóng phí, hội phí định kỳ cho các đơn vị pháp nhân và Chi hội.",
  "Lưu giữ đầy đủ thông tin đóng góp của hội viên và đơn vị.",
  "Hỗ trợ đóng phí, hội phí trực tuyến (online).",
  "Tiếp nhận và quản lý các khoản đóng góp từ thiện.",
];