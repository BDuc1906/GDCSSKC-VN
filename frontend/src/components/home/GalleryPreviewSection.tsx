import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export default function GalleryPreviewSection() {
  return (
    <Section muted>
      <div className="flex items-end justify-between gap-4">
        <SectionTitle subtitle="Hình ảnh hội nghị, thiện nguyện và các hoạt động của Hội.">
          Thư viện ảnh
        </SectionTitle>
        <Button
          href="/gallery"
          variant="outline"
          className="hidden md:inline-flex"
        >
          Xem tất cả
        </Button>
      </div>
      <GalleryGrid items={galleryItems.slice(0, 3)} />
    </Section>
  );
}