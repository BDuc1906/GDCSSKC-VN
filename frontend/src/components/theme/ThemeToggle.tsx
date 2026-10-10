"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

// true khi đã chạy trên trình duyệt (tránh lệch giao diện lúc tải trang)
function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded border border-[var(--color-border)] text-lg hover:border-[var(--color-primary)]"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}