"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import AdvancedSearch from "@/components/search/AdvancedSearch";

function SearchContent() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";

  return <AdvancedSearch initialQuery={initial} />;
}

export default function SearchPage() {
  return (
    <>
      <PageHero
        title="Tìm kiếm nâng cao"
        description="Tìm văn bản, tin tức theo từ khóa, chuyên mục, khoảng thời gian và thẻ."
      />

      <Section>
        <Suspense
          fallback={
            <p className="text-sm text-[var(--color-text-muted)]">Đang tải…</p>
          }
        >
          <SearchContent />
        </Suspense>
      </Section>
    </>
  );
}