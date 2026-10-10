"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Chuỗi số gốc, ví dụ "10.000+", "1955", "48" */
  value: string;
  /** Thời gian đếm (ms) */
  duration?: number;
  className?: string;
};

export default function AnimatedNumber({
  value,
  duration = 1500,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  /* ── Parse number format – deterministic, chạy cả server + client ── */
  const match = value.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
  const prefix = match?.[1] ?? "";
  const numberStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = parseInt(numberStr.replace(/[.,]/g, ""), 10) || 0;
  const useThousands = numberStr.includes(".") && numberStr.length > 4;

  /* ── State ban đầu GIỐNG NHAU server + client → không mismatch ── */
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const [phase, setPhase] = useState<"idle" | "counting" | "done">("idle");

  /* ── Effect 1: Detect reduced-motion + bắt đầu observe ── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      setPhase("done");
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("counting");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  /* ── Effect 2: Chạy animation đếm số khi element vào viewport ── */
  useEffect(() => {
    if (phase !== "counting") return;

    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);

      const formatted = useThousands
        ? current.toLocaleString("vi-VN")
        : String(current);

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase("done");
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, target, duration, prefix, suffix, useThousands]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}