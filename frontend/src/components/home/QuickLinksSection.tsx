import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const quickLinks = [
  { title: "Văn bản quan trọng", href: "/documents", note: "Điều lệ, Quyết định, Nghị quyết" },
  { title: "Hệ thống tổ chức", href: "/organization", note: "Liên Chi hội, Chi hội, Viện, Trung tâm" },
  { title: "Quản trị Hội", href: "/governance", note: "Quy định thành lập, giải thể, báo cáo" },
  { title: "Hội viên & Hội phí", href: "/members", note: "Kết nạp, đóng phí, từ thiện" },
];

export default function QuickLinksSection() {
  return (
    <Section>
      <SectionTitle subtitle="Truy cập nhanh các khu vực quan trọng trên cổng thông tin của Hội.">
        Truy cập nhanh
      </SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-primary)]"
          >
            <p className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
              {link.title}
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {link.note}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}