import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import NewsFilter from "@/components/news/NewsFilter";
import { newsItems } from "@/data/news";

export const metadata = { title: "Tin tức - Sự kiện" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Tin tức - Sự kiện"
        description="Cập nhật chính sách, sự kiện lớn của Hội và hoạt động của các đơn vị trực thuộc."
      />

      <Section>
        <NewsFilter items={newsItems} />
      </Section>
    </>
  );
}