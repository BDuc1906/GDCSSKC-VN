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