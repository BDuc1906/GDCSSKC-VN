import type { NewsItem } from "@/types";
import NewsCard from "@/components/news/NewsCard";
import EmptyState from "@/components/ui/EmptyState";

export default function NewsList({ items }: { items: NewsItem[] }) {
  if (items.length === 0) {
    return <EmptyState message="Chưa có tin tức trong chuyên mục này." />;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}