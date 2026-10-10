import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import ForumCategoryCard from "@/components/forum/ForumCategoryCard";
import TopicCard from "@/components/forum/TopicCard";
import { forumCategories, forumTopics, countTopics } from "@/data/forum";

export const metadata = { title: "Diễn đàn cộng đồng" };

export default function ForumPage() {
  const pinned = forumTopics.filter((t) => t.pinned);
  const recent = forumTopics
    .filter((t) => !t.pinned)
    .slice(0, 5);

  return (
    <>
      <PageHero
        title="Diễn đàn cộng đồng"
        description="Nơi hội viên trao đổi, chia sẻ kiến thức và kinh nghiệm trong lĩnh vực chăm sóc sức khoẻ cộng đồng."
      />

      <Section>
        <SectionTitle subtitle="Chọn chuyên mục để bắt đầu thảo luận.">
          Chuyên mục thảo luận
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {forumCategories.map((c) => (
            <ForumCategoryCard
              key={c.id}
              category={c}
              topicCount={countTopics(c.id)}
            />
          ))}
        </div>
      </Section>

      {pinned.length > 0 && (
        <Section muted>
          <SectionTitle subtitle="Các chủ đề được ghim bởi Ban Thường vụ.">
            Chủ đề nổi bật
          </SectionTitle>
          <div className="space-y-3">
            {pinned.map((t) => (
              <TopicCard key={t.id} topic={t} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionTitle subtitle="Các thảo luận mới nhất từ hội viên.">
          Thảo luận gần đây
        </SectionTitle>
        <div className="space-y-3">
          {recent.map((t) => (
            <TopicCard key={t.id} topic={t} />
          ))}
        </div>
      </Section>
    </>
  );
}