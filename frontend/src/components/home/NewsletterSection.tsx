import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/contact/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
        <div>
          <h2 className="text-balance text-xl font-bold md:text-2xl">
            Đăng ký nhận bản tin của Hội
          </h2>
          <p className="mt-2 max-w-xl text-pretty text-sm text-white/90">
            Cập nhật tin tức, sự kiện và văn bản mới nhất qua email.
          </p>
        </div>
        <NewsletterForm />
      </Container>
    </section>
  );
}