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
  /** Tags để tìm kiếm/lọc nâng cao */
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
  /** Tags để tìm kiếm/lọc nâng cao */
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