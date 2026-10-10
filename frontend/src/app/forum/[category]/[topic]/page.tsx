import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ReplyItem from "@/components/forum/ReplyItem";
import {
  forumTopics,
  getCategoryById,
  getTopicById,
  getRepliesByTopic,
} from "@/data/forum";

type Props = {
  params: Promise<{ category: string; topic: string }>;
};

export function generateStaticParams() {
  return forumTopics.map((t) => ({
    category: t.categoryId,
    topic: t.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const t = getTopicById(topic);
  if (!t) return { title: "Không tìm thấy" };
  return { title: t.title, description: t.excerpt };
}

export default async function TopicPage({ params }: Props) {
  const { category, topic } = await params;
  const cat = getCategoryById(category);
  const t = getTopicById(topic);
  if (!cat || !t) notFound();

  const replies = getRepliesByTopic(topic);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] text-white">
        <Container className="py-8 sm:py-10 md:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-xs text-white/80"
          >
            <Link href="/" className="hover:text-white">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/forum" className="hover:text-white">
              Diễn đàn
            </Link>
            <span>/</span>
            <Link href={`/forum/${cat.id}`} className="hover:text-white">
              {cat.name}
            </Link>
          </nav>

          <h1 className="mt-4 max-w-3xl text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {t.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/80 sm:text-sm">
            <span className="font-semibold">{t.author}</span>
            <span>·</span>
            <span>{t.authorRole}</span>
            <span>·</span>
            <span>{t.createdAt}</span>
            <span>·</span>
            <span>{t.views} lượt xem</span>
          </div>

          {t.tags && t.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-semibold sm:text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Nội dung chủ đề */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 sm:p-6">
              {t.content?.map((p, i) => (
                <p
                  key={i}
                  className="text-pretty text-sm leading-relaxed text-[var(--color-text)] sm:text-base"
                  style={{ marginTop: i > 0 ? "1rem" : 0 }}
                >
                  {p}
                </p>
              ))}
            </article>

            {/* Replies */}
            <h2 className="mt-10 text-xl font-bold">
              {replies.length} trả lời
            </h2>

            <div className="mt-4 space-y-3">
              {replies.map((r) => (
                <ReplyItem key={r.id} reply={r} />
              ))}
            </div>

            {/* Reply box */}
            {!t.locked ? (
              <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-sm font-bold">Trả lời chủ đề</h3>
                <textarea
                  rows={4}
                  placeholder="Nhập nội dung trả lời của bạn…"
                  className="mt-3 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                />
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="rounded bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                  >
                    Gửi trả lời
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center text-sm text-[var(--color-text-muted)]">
                🔒 Chủ đề này đã được khoá, không thể trả lời.
              </div>
            )}

            <div className="mt-8">
              <Link
                href={`/forum/${cat.id}`}
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                ← Quay lại {cat.name}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}