import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import OnlineReportForm from "@/components/reports/OnlineReportForm";

export const metadata = { title: "Báo cáo Online" };

export default function OnlineReportPage() {
  return (
    <>
      <PageHero
        title="Gửi báo cáo Online"
        description="Điền trực tiếp nội dung báo cáo theo mẫu có sẵn. Phù hợp với báo cáo ngắn, báo cáo nhanh hoặc báo cáo đột xuất."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <OnlineReportForm />
        </div>
      </Section>
    </>
  );
}