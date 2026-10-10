"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "@/components/ui/Icons";

export default function SearchBox() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className="flex w-full max-w-md items-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] focus-within:border-[var(--color-primary)]"
    >
      <label htmlFor="site-search" className="sr-only">
        Tìm kiếm
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Tìm văn bản, tin tức…"
        className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Tìm kiếm"
        className="flex h-9 w-9 items-center justify-center text-[var(--color-primary)] transition hover:opacity-80"
      >
        <IconSearch size={18} />
      </button>
    </form>
  );
}