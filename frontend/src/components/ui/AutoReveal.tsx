"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Tự động áp dụng hiệu ứng scroll reveal cho mọi element khớp selector
 * trong <main>. Không cần bọc <Reveal> thủ công ở từng page.
 */

const REVEAL_SELECTOR = [
  "main h1",
  "main h2",
  "main h3",
  "main article",
  "main section > div > div", // cards trong grid
  "main table",
  "main ul > li",
  "main figure",
  "main blockquote",
].join(", ");

const AUTO_CLASS = "auto-reveal";

export default function AutoReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Tôn trọng prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      document
        .querySelectorAll<HTMLElement>(`.${AUTO_CLASS}`)
        .forEach((el) => el.classList.add(`${AUTO_CLASS}--visible`));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add(`${AUTO_CLASS}--visible`);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    // Gán delay theo vị trí trong cùng parent
    function applyReveal() {
      const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);

      elements.forEach((el) => {
        // Bỏ qua nếu đã xử lý, hoặc bỏ qua Reveal đã có sẵn
        if (el.classList.contains(AUTO_CLASS)) return;
        if (el.closest("[data-no-reveal]")) return;
        if (el.closest("header")) return;
        if (el.closest("footer")) return;
        if (el.closest("[role='dialog']")) return;
        if (el.closest("[data-reveal-skip]")) return;

        // Bỏ qua element ẩn hoặc đã dùng Reveal component
        const isAlreadyReveal =
          el.classList.contains("page-enter") ||
          el.style.transitionDelay !== "";
        if (isAlreadyReveal) return;

        // Delay theo vị trí trong parent (stagger)
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(
            parent.querySelectorAll<HTMLElement>(`:scope > ${el.tagName}`),
          );
          const idx = siblings.indexOf(el);
          if (idx > 0 && idx < 12) {
            el.style.transitionDelay = `${idx * 60}ms`;
          }
        }

        el.classList.add(AUTO_CLASS);
        observer.observe(el);
      });
    }

    applyReveal();

    // Re-scan khi DOM thay đổi (Client Component render sau)
    const mo = new MutationObserver(() => {
      applyReveal();
    });

    mo.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return <>{children}</>;
}