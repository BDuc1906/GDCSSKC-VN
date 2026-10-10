"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: nối API thật ở đây
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary-soft)] p-6 text-sm text-[var(--color-primary)]"
      >
        ✅ Cảm ơn bạn đã gửi liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm
        nhất.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="c-name"
          className="block text-sm font-semibold text-[var(--color-text)]"
        >
          Họ và tên <span aria-hidden>*</span>
        </label>
        <input
          id="c-name"
          required
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-email"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Email <span aria-hidden>*</span>
          </label>
          <input
            id="c-email"
            type="email"
            required
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="c-phone"
            className="block text-sm font-semibold text-[var(--color-text)]"
          >
            Số điện thoại
          </label>
          <input
            id="c-phone"
            type="tel"
            className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="c-subject"
          className="block text-sm font-semibold text-[var(--color-text)]"
        >
          Tiêu đề
        </label>
        <input
          id="c-subject"
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="c-message"
          className="block text-sm font-semibold text-[var(--color-text)]"
        >
          Nội dung <span aria-hidden>*</span>
        </label>
        <textarea
          id="c-message"
          required
          rows={6}
          className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)]"
      >
        Gửi liên hệ
      </button>
    </form>
  );
}