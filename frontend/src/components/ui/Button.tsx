import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "light" | "outline-light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center rounded px-5 py-2.5 text-sm font-semibold transition";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)]",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
  light: "bg-white text-[var(--color-primary)] hover:bg-white/90",
  "outline-light": "border border-white text-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${baseClass} ${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}