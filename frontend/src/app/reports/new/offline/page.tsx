import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import OfflineReportForm from "@/components/reports/OfflineReportForm";

export const metadata = { title: "Báo cáo Offline" };

export default function OfflineReportPage() {
  return (
    <>
      <PageHero
        title="Gửi báo cáo Offline"
        description="Tải lên file báo cáo (PDF, DOCX) đã soạn sẵn và có ký tên, đóng dấu của đơn vị."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <OfflineReportForm />
        </div>
      </Section>
    </>
  );
}