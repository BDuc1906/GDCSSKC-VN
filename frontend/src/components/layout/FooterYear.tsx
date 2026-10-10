"use client";

import { useEffect, useState } from "react";

export default function FooterYear() {
  // Khởi tạo null – chỉ tính sau khi mount (client-side)
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Trong lúc chờ, hiển thị placeholder để không bị nhảy layout
  if (year === null) return <span>2026</span>;
  return <span>{year}</span>;
}