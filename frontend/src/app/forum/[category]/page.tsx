import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import EmptyState from "@/components/ui/EmptyState";
import TopicCard from "@/components/forum/TopicCard";
import {
  forumCategories,
  getCategoryById,
  getTopicsByCategory,
} from "@/data/forum";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return forumCategories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return { title: "Không tìm thấy" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  const topics = getTopicsByCategory(category);

  return (
    <>
      <PageHero title={cat.name} description={cat.description} />

      <Section>
        <Container>
          <nav className="mb-6 text-xs text-[var(--color-text-muted)]">
            <Link href="/forum" className="hover:text-[var(--color-primary)]">
              Diễn đàn
            </Link>
            <span> / </span>
            <span>{cat.name}</span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[var(--color-text-muted)]">
              <strong className="text-[var(--color-text)]">
                {topics.length}
              </strong>{" "}
              chủ đề
            </p>
            <button
              type="button"
              className="rounded bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              + Tạo chủ đề mới
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {topics.length === 0 ? (
              <EmptyState message="Chưa có chủ đề nào trong chuyên mục này." />
            ) : (
              topics.map((t) => <TopicCard key={t.id} topic={t} />)
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}