import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";

export default function IntroSection() {
  return (
    <Section>
      <SectionTitle subtitle="Sơ lược về quá trình hình thành, tôn chỉ, mục đích hoạt động của Hội.">
        Giới thiệu chung về Hội
      </SectionTitle>
      <p className="max-w-3xl text-base leading-relaxed text-[var(--color-text)]">
        {site.fullName} là tổ chức xã hội - nghề nghiệp, tập hợp các cá nhân và
        tổ chức hoạt động trong lĩnh vực giáo dục, chăm sóc và nâng cao sức khoẻ
        cộng đồng. Hội hoạt động theo Điều lệ đã được cơ quan nhà nước có thẩm
        quyền phê duyệt.
      </p>
      <div className="mt-6">
        <Button href="/about" variant="outline">
          Xem chi tiết
        </Button>
      </div>
    </Section>
  );
}