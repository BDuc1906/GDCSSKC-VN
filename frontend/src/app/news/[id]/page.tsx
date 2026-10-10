import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import NewsCard from "@/components/news/NewsCard";
import { newsItems, newsCategoryLabels } from "@/data/news";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return newsItems.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === id);
  if (!item) return { title: "Không tìm thấy" };
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === id);
  if (!item) notFound();

  const related = newsItems
    .filter((n) => n.id !== item.id && n.category === item.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="text-white"
        style={{
          background:
            item.coverGradient ??
            "linear-gradient(135deg,#16A34A 0%,#22C55E 100%)",
        }}
      >
        <Container className="py-10 sm:py-14 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-xs text-white/80"
          >
            <Link href="/" className="hover:text-white">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white">
              Tin tức
            </Link>
            <span>/</span>
            <span className="line-clamp-1">{item.title}</span>
          </nav>

          <span className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            {newsCategoryLabels[item.category]}
          </span>

          <h1 className="mt-3 max-w-4xl text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {item.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/80 sm:text-sm">
            <time>{item.date}</time>
            {item.author && (
              <>
                <span>·</span>
                <span>{item.author}</span>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="text-pretty text-base font-medium leading-relaxed text-[var(--color-text)] sm:text-lg">
              {item.excerpt}
            </p>

            {item.content?.map((paragraph, idx) => (
              <p
                key={idx}
                className="mt-5 text-pretty text-base leading-relaxed text-[var(--color-text)]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
              <Link
                href="/news"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                ← Quay lại danh sách tin tức
              </Link>
            </div>
          </article>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section muted>
          <Container>
            <h2 className="mb-6 inline-block border-b-4 border-[var(--color-primary)] pb-2 text-xl font-bold md:text-2xl">
              Tin liên quan
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {related.map((r) => (
                <NewsCard key={r.id} item={r} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}