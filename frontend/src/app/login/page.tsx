import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Đăng nhập" };

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Đăng nhập"
        description="Khu vực dành cho cán bộ, hội viên và đơn vị thuộc Hội."
      />

      <Container className="py-12">
        <form className="mx-auto max-w-md space-y-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Email / Tên đăng nhập
            </label>
            <input
              id="email"
              type="text"
              autoComplete="username"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)]"
          >
            Đăng nhập
          </button>
        </form>
      </Container>
    </>
  );
}