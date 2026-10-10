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
  primary: "bg-[#C8102E] text-white hover:bg-[#A00D24]",
  outline:
    "border border-[#C8102E] text-[#C8102E] hover:bg-[#FCE8EB]",
  light: "bg-white hover:bg-white/90",
  "outline-light": "border border-white text-white hover:bg-white/10",
};

const variantStyle: Record<ButtonVariant, React.CSSProperties> = {
  primary: {},
  outline: {},
  light: { color: "#C8102E" },
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