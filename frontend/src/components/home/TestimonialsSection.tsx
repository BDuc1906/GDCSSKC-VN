import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section muted>
      <SectionTitle subtitle="Chia sẻ từ hội viên, cán bộ và các đơn vị thuộc Hội.">
        Cảm nhận từ cộng đồng
      </SectionTitle>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 120}>
            <blockquote className="flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-md">
              <span
                aria-hidden
                className="text-3xl font-serif leading-none text-[var(--color-primary)]"
              >
                &ldquo;
              </span>
              <p className="mt-1 flex-1 text-pretty text-sm italic leading-relaxed text-[var(--color-text)]">
                {t.quote}
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: t.avatarGradient }}
                >
                  {t.name.trim().charAt(t.name.indexOf(" ") + 1) || "?"}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-text)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}