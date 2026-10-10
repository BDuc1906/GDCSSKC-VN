import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  subtitle?: string;
};

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="inline-block border-b-4 border-[var(--color-primary)] pb-2 text-xl font-bold text-[var(--color-text)] md:text-2xl">
        {children}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}