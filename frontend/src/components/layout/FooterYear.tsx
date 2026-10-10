"use client";

import { useState } from "react";

export default function FooterYear() {
  const [year] = useState(() => new Date().getFullYear());
  return <>{year}</>;
}