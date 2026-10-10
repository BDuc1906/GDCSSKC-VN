import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";

type ButtonVariant = "primary" | "outline" | "light" | "outline-light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClass =
  "inline-flex min-h-[44px] items-center justify-center rounded px-4 py-2.5 text-sm font-semibold transition sm:px-5";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
  light: "bg-white hover:bg-white/90",
  "outline-light": "border border-white text-white hover:bg-white/10",
};

const variantStyle: Record<ButtonVariant, CSSProperties> = {
  primary: {},
  outline: {},
  light: { color: "var(--color-primary)" },
  "outline-light": {},
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      style={variantStyle[variant]}
    >
      {children}
    </Link>
  );
}