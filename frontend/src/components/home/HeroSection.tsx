import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
      <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
            Trang thông tin chính thức
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-base opacity-90 md:text-lg">
            {site.fullName} — kết nối hội viên, chia sẻ tri thức và lan toả các
            hoạt động vì sức khoẻ cộng đồng.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/about" variant="light">
              Tìm hiểu về Hội
            </Button>
            <Button href="/news" variant="outline-light">
              Tin tức - Sự kiện
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="rounded-lg border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
              Nhiệm vụ trọng tâm
            </p>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
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