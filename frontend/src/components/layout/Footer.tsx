export default function Footer() {
  return (
    <footer className="border-t-4 border-[var(--color-primary)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm">
        <p className="font-semibold">Hội GDCSSKCĐ Việt Nam</p>
        <p>© {new Date().getFullYear()} Bản quyền thuộc về Hội.</p>
      </div>
    </footer>
  );
}