import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/config/site";

export const metadata = { title: "Liên hệ" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Liên hệ với Hội"
        description="Gửi câu hỏi, phản hồi hoặc đề nghị hợp tác tới Hội."
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Thông tin liên hệ</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
              <li>
                <strong>Địa chỉ:</strong> {site.address}
              </li>
              <li>
                <strong>Điện thoại:</strong> {site.phone}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Gửi tin nhắn</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}