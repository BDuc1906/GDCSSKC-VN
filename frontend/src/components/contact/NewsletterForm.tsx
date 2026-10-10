"use client";

import { useState } from "react";

type Status = "idle" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const val = email.trim();
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email nhận bản tin
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Email của bạn"
          className="min-h-[44px] flex-1 rounded border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="min-h-[44px] whitespace-nowrap rounded bg-white px-5 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-white/90"
        >
          Đăng ký
        </button>
      </div>

      {status === "success" && (
        <p className="mt-2 text-xs text-white/90">
          ✅ Cảm ơn bạn! Chúng tôi sẽ gửi bản tin sớm nhất.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-white/90">
          ⚠️ Vui lòng nhập email hợp lệ.
        </p>
      )}
    </form>
  );
}