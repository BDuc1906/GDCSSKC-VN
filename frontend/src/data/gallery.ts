export type GalleryItem = {
  id: string;
  title: string;
  category: "hoi-nghi" | "thien-nguyen" | "hoat-dong";
  /** gradient placeholder – thay bằng src khi có ảnh thật */
  gradient: string;
};

export const galleryCategoryLabels: Record<GalleryItem["category"], string> = {
  "hoi-nghi": "Hội nghị",
  "thien-nguyen": "Thiện nguyện",
  "hoat-dong": "Hoạt động khác",
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Hội nghị BCH mở rộng", category: "hoi-nghi", gradient: "linear-gradient(135deg,#C8102E,#7A0A1B)" },
  { id: "g2", title: "Khám sức khoẻ miễn phí", category: "thien-nguyen", gradient: "linear-gradient(135deg,#1A1A1A,#4A0A14)" },
  { id: "g3", title: "Hội thảo khoa học", category: "hoi-nghi", gradient: "linear-gradient(135deg,#8B0A1F,#C8102E)" },
  { id: "g4", title: "Trao quà cho hộ nghèo", category: "thien-nguyen", gradient: "linear-gradient(135deg,#C8102E,#A00D24)" },
  { id: "g5", title: "Giao lưu thể thao", category: "hoat-dong", gradient: "linear-gradient(135deg,#4A0A14,#C8102E)" },
  { id: "g6", title: "Văn nghệ chào mừng", category: "hoat-dong", gradient: "linear-gradient(135deg,#7A0A1B,#1A1A1A)" },
];