"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { banners } from "@/data/banners";

const AUTOPLAY_MS = 6000;

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % banners.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner"
      className="relative overflow-hidden text-white"
    >
      <div
        className="relative transition-[background] duration-700"
        style={{ background: banners[index].gradient }}
      >
        <Container className="flex min-h-[240px] flex-col justify-center py-10 sm:min-h-[320px] sm:py-14 md:min-h-[420px] md:py-20">
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
              className="inline-flex min-h-[44px] items-center justify-center rounded bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90"
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
                className={`h-2 w-8 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}