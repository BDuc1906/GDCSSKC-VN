import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import { documentGroups } from "@/data/documentGroups";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return documentGroups.flatMap((g) =>
    g.items.map((d) => ({ id: d.id })),
  );
}

function findDoc(id: string) {
  for (const group of documentGroups) {
    const doc = group.items.find((d) => d.id === id);
    if (doc) return { doc, group };
  }
  return null;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const found = findDoc(id);
  if (!found) return { title: "Không tìm thấy văn bản" };
  return {
    title: found.doc.title,
    description: found.doc.description ?? found.group.description,
  };
}

export default async function DocumentDetailPage({ params }: Props) {
  const { id } = await params;
  const found = findDoc(id);
  if (!found) notFound();

  const { doc, group } = found;

  return (
    <>
      <PageHero title={doc.title} description={group.title} />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                    Số hiệu
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{doc.code}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                    Ngày ban hành
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">
                    {doc.issuedDate}
                  </dd>
                </div>
                {doc.signer && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      Người ký
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">{doc.signer}</dd>
                  </div>
                )}
                {doc.fileSize && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      Dung lượng
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {doc.fileSize}
                    </dd>
                  </div>
                )}
              </dl>

              {doc.description && (
                <div className="mt-6 border-t border-[var(--color-border)] pt-6">
                  <h2 className="text-sm font-semibold">Mô tả</h2>
                  <p className="mt-2 text-pretty text-sm text-[var(--color-text-muted)]">
                    {doc.description}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={doc.href}
                  className="inline-flex min-h-[44px] items-center justify-center rounded bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)]"
                >
                  ⬇ Tải về
                </a>
                <Link
                  href="/documents"
                  className="inline-flex min-h-[44px] items-center justify-center rounded border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                >
                  ← Quay lại
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}