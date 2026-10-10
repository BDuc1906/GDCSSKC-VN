import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata = { title: "Thư viện ảnh" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Thư viện ảnh"
        description="Hình ảnh các sự kiện, hoạt động của Hội và các đơn vị trực thuộc."
      />
      <Section>
        <GalleryGrid items={galleryItems} />
      </Section>
    </>
  );
}