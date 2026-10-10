import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { IconHeartPulse } from "@/components/ui/Icons";
import { programs } from "@/data/programs";

function ProgramIcon({ icon }: { icon: string }) {
  if (icon === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
        <path d="M14 20c0-2 2-3 4-3s3 1 3 3" />
      </svg>
    );
  }
  if (icon === "book") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z" />
        <path d="M18 4a3 3 0 0 1 3 3v13h-3" />
      </svg>
    );
  }
  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  return <IconHeartPulse size={20} />;
}

export default function ProgramsSection() {
  return (
    <Section muted>
      <SectionTitle subtitle="Các chương trình, hoạt động trọng tâm của Hội vì sức khoẻ cộng đồng.">
        Hoạt động tiêu biểu
      </SectionTitle>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {programs.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <Link
              href={p.href}
              className="group flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                <ProgramIcon icon={p.icon} />
              </div>
              <h3 className="mt-4 text-balance text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-[var(--color-text-muted)]">
                {p.description}
              </p>
              <span className="mt-4 text-xs font-semibold text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-1">
                Xem thêm →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}