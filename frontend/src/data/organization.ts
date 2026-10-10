import type { OrganizationType, OrganizationUnit } from "@/types";

export const organizationTypeLabels: Record<OrganizationType, string> = {
  "inter-branch": "Liên Chi hội",
  branch: "Chi hội",
  "central-office": "Cơ quan Trung ương Hội",
  "institute-center": "Viện và Trung tâm",
  "representative-office": "Văn phòng đại diện",
  "member-business": "Doanh nghiệp hội viên",
};

export const organizationUnits: OrganizationUnit[] = [
  {
    id: "tw-1",
    type: "central-office",
    name: "Văn phòng Trung ương Hội",
    leader: "ThS. Hoàng Văn E",
    description: "Điều hành công việc hành chính, tham mưu cho Ban Thường vụ.",
  },
  {
    id: "tw-2",
    type: "central-office",
    name: "Ban Tổ chức - Kiểm tra",
    leader: "TS. Lê Văn C",
  },
  {
    id: "tw-3",
    type: "central-office",
    name: "Ban Tuyên truyền - Giáo dục",
    leader: "BS. Phạm Thị D",
  },
];