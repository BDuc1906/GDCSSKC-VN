import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.id} className="text-center">
            <p className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {s.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}