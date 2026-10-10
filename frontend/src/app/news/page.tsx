import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import NewsList from "@/components/news/NewsList";
import EmptyState from "@/components/ui/EmptyState";
import { newsItems, newsCategoryLabels } from "@/data/news";
import type { NewsCategory } from "@/types";

export const metadata = { title: "Tin tức - Sự kiện" };

const categories: NewsCategory[] = ["policy", "event", "unit", "other"];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Tin tức - Sự kiện"
        description="Cập nhật chính sách, sự kiện lớn của Hội và hoạt động của các đơn vị trực thuộc."
      />

      {categories.map((category) => {
        const items = newsItems.filter((item) => item.category === category);
        return (
          <Section key={category} muted={category === "event"}>
            <h2 className="mb-6 inline-block border-b-4 border-[var(--color-primary)] pb-2 text-xl font-bold text-[var(--color-text)]">
              {newsCategoryLabels[category]}
            </h2>
            {items.length === 0 ? (
              <EmptyState message="Chưa có tin tức trong chuyên mục này." />
            ) : (
              <NewsList items={items} />
            )}
          </Section>
        );
      })}
    </>
  );
}