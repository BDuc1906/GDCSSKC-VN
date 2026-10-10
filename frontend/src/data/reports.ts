import type { Report, ReportUnitType, ReportStatus } from "@/types";

export const reportUnitTypeLabels: Record<ReportUnitType, string> = {
  "inter-branch": "Liên Chi hội",
  branch: "Chi hội",
  committee: "Ban chuyên môn",
  "institute-center": "Viện / Trung tâm",
  magazine: "Tạp chí",
};

export const reportStatusLabels: Record<ReportStatus, string> = {
  draft: "Bản nháp",
  submitted: "Đã gửi",
  reviewing: "Đang duyệt",
  approved: "Đã duyệt",
  rejected: "Từ chối",
};

export const reportStatusColors: Record<ReportStatus, string> = {
  draft: "bg-gray-100 text-gray-700",
  submitted: "bg-blue-100 text-blue-700",
  reviewing: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export const reports: Report[] = [
  {
    id: "r1",
    reportCode: "BC-LCHMT-2025-Q4",
    reportType: "online",
    unitType: "inter-branch",
    unitName: "Liên Chi hội miền Trung",
    reportTitle: "Báo cáo kết quả công tác Quý IV/2025",
    reportPeriod: "Quý IV/2025",
    reportDate: "20/12/2025",
    submitDate: "22/12/2025",
    receiver: "Ban Thường vụ TW Hội",
    contentSummary:
      "Tổng kết các hoạt động khám sức khoẻ miễn phí, đào tạo hội viên và phát triển tổ chức trong Quý IV/2025.",
    signerName: "TS. Trần Văn B",
    signerPosition: "Chủ tịch Liên Chi hội miền Trung",
    status: "approved",
    reviewerName: "Văn phòng TW Hội",
    reviewNote: "Báo cáo đầy đủ, đúng biểu mẫu. Đã tiếp nhận và lưu trữ.",
    reviewDate: "25/12/2025",
    createdAt: "2025-12-20",
    content: [
      {
        id: "s1",
        heading: "I. Đặc điểm tình hình",
        body: "Trong Quý IV/2025, Liên Chi hội miền Trung tiếp tục duy trì ổn định hoạt động với 12 Chi hội trực thuộc và hơn 850 hội viên sinh hoạt thường xuyên. Điều kiện kinh tế - xã hội tại địa bàn còn nhiều khó khăn, ảnh hưởng đến công tác phát triển hội viên.",
      },
      {
        id: "s2",
        heading: "II. Kết quả công tác",
        body: "Tổ chức 05 đợt khám sức khoẻ miễn phí cho hơn 2.500 lượt người dân tại các huyện vùng sâu, vùng xa. Kết nạp mới 45 hội viên, thành lập mới 02 Chi hội. Phối hợp với các đơn vị y tế địa phương tổ chức 03 buổi tập huấn chuyên môn.",
      },
      {
        id: "s3",
        heading: "III. Phương hướng Quý I/2026",
        body: "Tiếp tục đẩy mạnh công tác khám sức khoẻ cộng đồng. Tổ chức Hội nghị sơ kết công tác năm và triển khai nhiệm vụ năm 2026. Đẩy mạnh ứng dụng công nghệ thông tin trong quản lý hội viên.",
      },
    ],
  },
  {
    id: "r2",
    reportCode: "BC-CHHN-2025-Q4",
    reportType: "offline",
    unitType: "branch",
    unitName: "Chi hội Hà Nội",
    reportTitle: "Báo cáo kết quả công tác Quý IV/2025",
    reportPeriod: "Quý IV/2025",
    reportDate: "18/12/2025",
    submitDate: "19/12/2025",
    receiver: "Ban Thường vụ TW Hội",
    contentSummary:
      "Báo cáo tổng kết các hoạt động chuyên môn, thiện nguyện và công tác hội viên Quý IV/2025.",
    fileUrl: "#",
    fileName: "Bao-cao-CHHN-QuyIV-2025.pdf",
    fileSize: "2.4 MB",
    signerName: "BS. Nguyễn Thị A",
    signerPosition: "Chủ tịch Chi hội Hà Nội",
    status: "reviewing",
    reviewerName: "Ban Tổ chức - Kiểm tra",
    createdAt: "2025-12-18",
  },
  {
    id: "r3",
    reportCode: "BC-VTT-2025-Q4",
    reportType: "online",
    unitType: "institute-center",
    unitName: "Viện Nghiên cứu Sức khoẻ Cộng đồng",
    reportTitle: "Báo cáo kết quả nghiên cứu và chuyển giao Quý IV/2025",
    reportPeriod: "Quý IV/2025",
    reportDate: "15/12/2025",
    submitDate: "16/12/2025",
    receiver: "Ban Thường vụ TW Hội",
    contentSummary:
      "Kết quả 03 đề tài nghiên cứu cấp cơ sở, 02 hội thảo khoa học và các hoạt động chuyển giao kỹ thuật.",
    signerName: "PGS.TS. Lê Văn C",
    signerPosition: "Viện trưởng",
    status: "submitted",
    createdAt: "2025-12-15",
    content: [
      {
        id: "s1",
        heading: "I. Kết quả nghiên cứu",
        body: "Hoàn thành 03 đề tài nghiên cứu cấp cơ sở về dinh dưỡng cộng đồng, phòng chống bệnh không lây nhiễm và chăm sóc sức khoẻ người cao tuổi. Đã công bố 05 bài báo trên các tạp chí chuyên ngành.",
      },
      {
        id: "s2",
        heading: "II. Hoạt động chuyển giao",
        body: "Tổ chức 02 hội thảo khoa học với hơn 200 đại biểu tham dự. Chuyển giao 01 quy trình kỹ thuật cho 03 đơn vị y tế cơ sở tại các tỉnh miền núi phía Bắc.",
      },
    ],
  },
  {
    id: "r4",
    reportCode: "BC-BCM-2025-Q4",
    reportType: "online",
    unitType: "committee",
    unitName: "Ban Tổ chức - Kiểm tra",
    reportTitle: "Báo cáo công tác tổ chức và kiểm tra Quý IV/2025",
    reportPeriod: "Quý IV/2025",
    reportDate: "10/12/2025",
    submitDate: "11/12/2025",
    receiver: "Ban Thường vụ TW Hội",
    contentSummary:
      "Kết quả kiểm tra hoạt động của các Chi hội, Liên Chi hội và công tác phát triển tổ chức trong Quý IV.",
    signerName: "TS. Lê Văn C",
    signerPosition: "Trưởng ban Tổ chức - Kiểm tra",
    status: "draft",
    createdAt: "2025-12-10",
  },
  {
    id: "r5",
    reportCode: "BC-TC-2025-Q3",
    reportType: "offline",
    unitType: "magazine",
    unitName: "Tạp chí Sức khoẻ Cộng đồng",
    reportTitle: "Báo cáo hoạt động xuất bản Quý III/2025",
    reportPeriod: "Quý III/2025",
    reportDate: "05/10/2025",
    submitDate: "06/10/2025",
    receiver: "Ban Thường vụ TW Hội",
    contentSummary:
      "Báo cáo hoạt động xuất bản, phát hành và công tác bạn đọc của Tạp chí trong Quý III/2025.",
    fileUrl: "#",
    fileName: "Bao-cao-TapChi-QuyIII-2025.pdf",
    fileSize: "1.8 MB",
    signerName: "ThS. Hoàng Văn E",
    signerPosition: "Tổng Biên tập",
    status: "approved",
    reviewerName: "Văn phòng TW Hội",
    reviewNote: "Đã tiếp nhận và lưu hồ sơ.",
    reviewDate: "08/10/2025",
    createdAt: "2025-10-05",
  },
];

export function getReportById(id: string) {
  return reports.find((r) => r.id === id);
}