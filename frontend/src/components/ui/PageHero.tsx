import Container from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
      <Container className="py-10 md:py-14">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-base opacity-90">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}