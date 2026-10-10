import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import NewsCard from "@/components/news/NewsCard";
import { newsItems } from "@/data/news";

export default function NewsPreviewSection() {
  const items = newsItems.slice(0, 3);

  return (
    <Section muted>
      <div className="flex items-end justify-between gap-4">
        <SectionTitle subtitle="Cập nhật các chính sách, sự kiện và hoạt động mới nhất của Hội.">
          Tin tức mới
        </SectionTitle>
        <Button href="/news" variant="outline" className="hidden md:inline-flex">
          Xem tất cả
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}