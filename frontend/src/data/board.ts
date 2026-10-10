import type { Leader } from "@/types";

export type BoardMember = Leader & {
  id: string;
  title?: string;
  organization?: string;
};

export const executiveBoard: BoardMember[] = [
  { id: "b1", name: "TS. Nguyễn Văn A", position: "Ủy viên BCH", title: "Chủ tịch Hội" },
  { id: "b2", name: "PGS.TS. Trần Thị B", position: "Ủy viên BCH", title: "Phó Chủ tịch Thường trực" },
  { id: "b3", name: "TS. Lê Văn C", position: "Ủy viên BCH", title: "Phó Chủ tịch" },
  { id: "b4", name: "BS. Phạm Thị D", position: "Ủy viên BCH", title: "Phó Chủ tịch" },
  { id: "b5", name: "ThS. Hoàng Văn E", position: "Ủy viên BCH", title: "Tổng Thư ký" },
  { id: "b6", name: "TS. Đỗ Văn F", position: "Ủy viên BCH", title: "Ủy viên" },
  { id: "b7", name: "BS. Ngô Thị G", position: "Ủy viên BCH", title: "Ủy viên" },
];

export const standingCommittee: BoardMember[] = [
  { id: "s1", name: "TS. Nguyễn Văn A", position: "Chủ tịch Hội" },
  { id: "s2", name: "PGS.TS. Trần Thị B", position: "Phó Chủ tịch Thường trực" },
  { id: "s3", name: "TS. Lê Văn C", position: "Phó Chủ tịch" },
  { id: "s4", name: "BS. Phạm Thị D", position: "Phó Chủ tịch" },
  { id: "s5", name: "ThS. Hoàng Văn E", position: "Tổng Thư ký" },
];

export type UnitLeader = {
  id: string;
  name: string;
  unitName: string;
  unitType:
    | "committee"
    | "representative-office"
    | "inter-branch"
    | "branch"
    | "institute-center";
  position: string;
};

export const unitLeaders: UnitLeader[] = [
  { id: "ul1", name: "TS. Lê Văn C", unitName: "Ban Tổ chức - Kiểm tra", unitType: "committee", position: "Trưởng ban" },
  { id: "ul2", name: "BS. Phạm Thị D", unitName: "Ban Tuyên truyền - Giáo dục", unitType: "committee", position: "Trưởng ban" },
];