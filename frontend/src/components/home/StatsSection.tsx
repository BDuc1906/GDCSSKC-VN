import Container from "@/components/ui/Container";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid grid-cols-2 gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.id} className="text-center">
            <p className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl md:text-4xl">
              <AnimatedNumber value={s.value} />
            </p>
            <p className="mt-1.5 text-xs text-[var(--color-text-muted)] sm:mt-2 sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}