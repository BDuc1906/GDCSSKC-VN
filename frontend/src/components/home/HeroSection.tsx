import Container from "@/components/ui/Container";
import Link from "next/link";
import { site } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="bg-[#C8102E] text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Trang thông tin chính thức
          </p>

          <h1 className="mt-3 text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
            {site.name}
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base text-white/90 md:text-lg">
            {site.fullName} — kết nối hội viên, chia sẻ tri thức và lan toả các
            hoạt động vì sức khoẻ cộng&nbsp;đồng.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "#C8102E" }}
            >
              Tìm hiểu về Hội
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded border border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tin tức - Sự kiện
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="rounded-lg border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Nhiệm vụ trọng tâm
            </p>
            <ul className="mt-3 space-y-2 text-pretty text-sm text-white/90">
              <li>• Kết nối và phát triển hệ thống tổ chức Hội.</li>
              <li>• Đẩy mạnh giáo dục, chăm sóc sức khoẻ cộng đồng.</li>
              <li>• Cập nhật văn bản, chính sách kịp thời.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}