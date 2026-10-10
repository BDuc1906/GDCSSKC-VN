import Container from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
      <Container className="py-8 sm:py-10 md:py-14">
        <h1 className="text-balance text-xl font-bold sm:text-2xl md:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-3xl text-pretty text-sm opacity-90 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}