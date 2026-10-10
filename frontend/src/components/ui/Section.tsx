import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  muted?: boolean;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  muted = false,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      className={`${muted ? "bg-[var(--color-surface)]" : "bg-[var(--color-bg)]"} ${className}`}
    >
      <Container className={`py-8 sm:py-10 md:py-14 ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
}