import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { site } from "@/config/site";
import { stats } from "@/data/stats";

export default function BentoSections() {
  return (
    <section className="bg-[var(--color-bg)]">
      <Container className="py-12 md:py-16">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              Về chúng tôi
            </p>
            <h2 className="mt-2 text-balance text-xl font-bold leading-snug text-[var(--color-text)] md:text-2xl lg:text-3xl">
              {site.fullName}
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-10">
          <Reveal delay={100} className="md:col-span-7">
            <p className="text-pretty text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
              Hội hoạt động theo Điều lệ đã được cơ quan nhà nước có thẩm quyền
              phê duyệt, tập hợp các cá nhân và tổ chức hoạt động trong lĩnh vực
              giáo dục, chăm sóc và nâng cao sức khoẻ cộng đồng.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-md"
              >
                Tìm hiểu thêm
              </Link>
              <Link
                href="/organization"
                className="inline-flex min-h-[44px] items-center justify-center rounded border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)] hover:shadow-sm"
              >
                Hệ thống tổ chức
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200} className="md:col-span-5">
            <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {stats.map((s) => (
                <div
                  key={s.id}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {s.label}
                  </span>
                  <span className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
                    <AnimatedNumber value={s.value} />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}