export type GalleryItem = {
  id: string;
  title: string;
  category: "hoi-nghi" | "thien-nguyen" | "hoat-dong";
  gradient: string;
};

export const galleryCategoryLabels: Record<GalleryItem["category"], string> = {
  "hoi-nghi": "Hội nghị",
  "thien-nguyen": "Thiện nguyện",
  "hoat-dong": "Hoạt động khác",
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Hội nghị BCH mở rộng", category: "hoi-nghi", gradient: "linear-gradient(135deg,#16A34A,#15803D)" },
  { id: "g2", title: "Khám sức khoẻ miễn phí", category: "thien-nguyen", gradient: "linear-gradient(135deg,#15803D,#22C55E)" },
  { id: "g3", title: "Hội thảo khoa học", category: "hoi-nghi", gradient: "linear-gradient(135deg,#22C55E,#16A34A)" },
  { id: "g4", title: "Trao quà cho hộ nghèo", category: "thien-nguyen", gradient: "linear-gradient(135deg,#16A34A,#4ADE80)" },
  { id: "g5", title: "Giao lưu thể thao", category: "hoat-dong", gradient: "linear-gradient(135deg,#15803D,#16A34A)" },
  { id: "g6", title: "Văn nghệ chào mừng", category: "hoat-dong", gradient: "linear-gradient(135deg,#22C55E,#15803D)" },
];