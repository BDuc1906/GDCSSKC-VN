import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const quickLinks = [
  { title: "Văn bản quan trọng", href: "/documents", note: "Điều lệ, Quyết định, Nghị quyết" },
  { title: "Hệ thống tổ chức", href: "/organization", note: "Liên Chi hội, Chi hội, Viện, Trung tâm" },
  { title: "Quản trị Hội", href: "/governance", note: "Quy định thành lập, giải thể, báo cáo" },
  { title: "Hội viên & Hội phí", href: "/members", note: "Kết nạp, đóng phí, từ thiện" },
  { title: "Lịch sự kiện", href: "/events", note: "Hội nghị, hội thảo sắp diễn ra" },
  { title: "Thư viện ảnh", href: "/gallery", note: "Hình ảnh hoạt động của Hội" },
  { title: "Liên hệ", href: "/contact", note: "Gửi câu hỏi, phản hồi tới Hội" },
  { title: "Ban lãnh đạo", href: "/leadership", note: "BCH, Ban Thường vụ, lãnh đạo đơn vị" },
];

export default function QuickLinksSection() {
  return (
    <Section>
      <SectionTitle subtitle="Truy cập nhanh các khu vực quan trọng.">
        Truy cập nhanh
      </SectionTitle>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {quickLinks.map((link, i) => (
          <Reveal key={link.href} delay={i * 60}>
            <Link
              href={link.href}
              className="group block h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-md sm:p-5"
            >
              <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] sm:text-base">
                {link.title}
              </p>
              <p className="mt-1.5 text-pretty text-xs text-[var(--color-text-muted)] sm:mt-2 sm:text-sm">
                {link.note}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}