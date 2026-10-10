export default function HomePage() {
  return (
    <div>
      <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-bold md:text-4xl">
            Hội GDCSSKCĐ Việt Nam
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Trang thông tin chính thức: giới thiệu Hội, tin tức, sự kiện và
            văn bản quan trọng.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Tin tức mới
        </h2>
        <p className="mt-2">Nội dung sẽ được cập nhật tại đây.</p>
      </section>
    </div>
  );
}