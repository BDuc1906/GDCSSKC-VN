export type NavItem = {
  label: string;
  href: string;
};

export type Leader = {
  name: string;
  position: string;
  note?: string;
};

export type NewsCategory = "policy" | "event" | "unit" | "other";

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  href: string;
  content?: string[];
  author?: string;
  coverGradient?: string;
  tags?: string[];
};

export type DocumentItem = {
  id: string;
  title: string;
  code: string;
  issuedDate: string;
  fileSize?: string;
  href: string;
  description?: string;
  signer?: string;
  tags?: string[];
};

export type DocumentGroup = {
  id: string;
  title: string;
  description: string;
  items: DocumentItem[];
};

export type OrganizationType =
  | "inter-branch"
  | "branch"
  | "central-office"
  | "institute-center"
  | "representative-office"
  | "member-business";

export type OrganizationUnit = {
  id: string;
  name: string;
  type: OrganizationType;
  leader?: string;
  description?: string;
};

export type FeeItem = {
  id: string;
  title: string;
  audience: string;
  amount: string;
  note?: string;
};

/* ============================================
   FORUM
   ============================================ */

export type ForumCategory = {
  id: string;
  name: string;
  description: string;
  icon: "chat" | "question" | "idea" | "news";
  color: string;
};

export type ForumTopic = {
  id: string;
  categoryId: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  createdAt: string;
  replies: number;
  views: number;
  pinned?: boolean;
  locked?: boolean;
  tags?: string[];
  content?: string[];
};

export type ForumReply = {
  id: string;
  topicId: string;
  author: string;
  authorRole: string;
  createdAt: string;
  content: string;
  likes: number;
};

/* ============================================
   REPORTS – Báo cáo
   ============================================ */

export type ReportType = "offline" | "online";

export type ReportStatus =
  | "draft"
  | "submitted"
  | "reviewing"
  | "approved"
  | "rejected";

export type ReportUnitType =
  | "inter-branch"
  | "branch"
  | "committee"
  | "institute-center"
  | "magazine";

export type Report = {
  id: string;
  reportCode: string;
  reportType: ReportType;
  unitType: ReportUnitType;
  unitName: string;
  reportTitle: string;
  reportPeriod: string;
  reportDate: string;
  submitDate: string;
  receiver: string;
  contentSummary?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  content?: ReportSection[];
  signerName: string;
  signerPosition: string;
  status: ReportStatus;
  reviewerName?: string;
  reviewNote?: string;
  reviewDate?: string;
  createdAt: string;
};

export type ReportSection = {
  id: string;
  heading: string;
  body: string;
};