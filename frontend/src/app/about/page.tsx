import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PageHero from "@/components/ui/PageHero";
import LeaderCard from "@/components/leadership/LeaderCard";
import { site } from "@/config/site";
import { permanentLeadership } from "@/data/leadership";

export const metadata = { title: "Giới thiệu" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Giới thiệu về Hội"
        description="Thông tin chung về Hội GDCSSKCĐ Việt Nam và Ban lãnh đạo (Thường trực)."
      />

      <Section>
        <SectionTitle subtitle="Giới thiệu tóm tắt">Tóm tắt về Hội</SectionTitle>
        <p className="max-w-3xl leading-relaxed text-[var(--color-text)]">
          {site.fullName} được thành lập nhằm tập hợp, đoàn kết các cá nhân và tổ
          chức hoạt động trong lĩnh vực giáo dục, chăm sóc và nâng cao sức khoẻ
          cộng đồng; góp phần thực hiện các mục tiêu chăm sóc sức khoẻ nhân dân
          của Đảng và Nhà nước.
        </p>
      </Section>

      <Section muted>
        <SectionTitle subtitle="Ban lãnh đạo Hội (Thường trực)">
          Ban lãnh đạo Hội
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {permanentLeadership.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} />
          ))}
        </div>
      </Section>
    </>
  );
}