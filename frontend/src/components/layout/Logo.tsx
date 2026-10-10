import Link from "next/link";
import { IconHeartPulse } from "@/components/ui/Icons";

type LogoProps = {
  iconOnly?: boolean;
  className?: string;
  /** Dùng cho footer nền tối */
  variant?: "default" | "onDark";
};

export default function Logo({
  iconOnly = false,
  className = "",
  variant = "default",
}: LogoProps) {
  const colorClass =
    variant === "onDark"
      ? "border-white text-white"
      : "border-[var(--color-primary)] text-[var(--color-primary)]";

  const textClass =
    variant === "onDark"
      ? "text-white"
      : "text-[var(--color-primary)]";

  return (
    <Link
      href="/"
      aria-label="Hội GDCSSKCĐ Việt Nam – Trang chủ"
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap ${className}`}
    >
      <span
        aria-hidden
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-2 ${colorClass}`}
      >
        <IconHeartPulse size={20} />
      </span>

      {!iconOnly && (
        <span className={`text-sm font-bold leading-tight md:text-base ${textClass}`}>
          Hội GDCSSKCĐ Việt Nam
        </span>
      )}
    </Link>
  );
}