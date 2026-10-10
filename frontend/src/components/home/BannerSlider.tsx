"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { banners } from "@/data/banners";

const AUTOPLAY_MS = 6000;

export default function BannerSlider() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % banners.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, []);

  // Parallax nhẹ khi cuộn (chỉ chạy nếu không phải reduced-motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        // Hệ số 0.15 – rất nhẹ, chỉ trong 200px đầu
        setOffset(Math.min(window.scrollY * 0.15, 120));
        frame = 0;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner"
      className="relative overflow-hidden text-white"
    >
      {/* Lớp nền parallax */}
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{
          background: banners[index].gradient,
          transform: `translate3d(0, ${offset}px, 0) scale(1.15)`,
          transformOrigin: "center top",
          willChange: "transform",
        }}
        aria-hidden
      />

      {/* Overlay mờ nhẹ để chữ nổi bật */}
      <div
        className="absolute inset-0 bg-black/5"
        aria-hidden
      />

      <Container className="relative flex min-h-[260px] flex-col justify-center py-10 sm:min-h-[320px] sm:py-14 md:min-h-[420px] md:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80 sm:text-xs">
          Trang thông tin chính thức
        </p>

        <h1 className="mt-2 max-w-3xl text-balance text-2xl font-bold leading-tight text-white sm:mt-3 sm:text-3xl md:text-4xl">
          {banners[index].title}
        </h1>

        <p className="mt-3 max-w-2xl text-pretty text-sm text-white/90 sm:mt-4 sm:text-base md:text-lg">
          {banners[index].subtitle}
        </p>

        <div className="mt-5 sm:mt-6">
          <Link
            href={banners[index].href}
            className="inline-flex min-h-[44px] items-center justify-center rounded bg-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-md"
            style={{ color: "#16A34A" }}
          >
            {banners[index].cta || "Xem thêm"}
          </Link>
        </div>

        <div
          className="mt-6 flex gap-2 sm:mt-8"
          role="tablist"
          aria-label="Chọn banner"
        >
          {banners.map((b, i) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}