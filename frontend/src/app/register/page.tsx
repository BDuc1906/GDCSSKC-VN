import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata = { title: "Đăng ký" };

export default function RegisterPage() {
  return (
    <>
      <PageHero
        title="Đăng ký tài khoản"
        description="Dành cho hội viên cá nhân, hội viên tổ chức/tập thể và các đơn vị thuộc Hội."
      />

      <Container className="py-12">
        <form className="mx-auto max-w-lg space-y-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
          {/* Loại tài khoản */}
          <fieldset>
            <legend className="block text-sm font-semibold text-[var(--color-text)]">
              Loại tài khoản
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-2 rounded border border-[var(--color-border)] px-3 py-2 text-sm hover:border-[var(--color-primary)]">
                <input
                  type="radio"
                  name="accountType"
                  value="individual"
                  defaultChecked
                  className="accent-[var(--color-primary)]"
                />
                Hội viên cá nhân
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded border border-[var(--color-border)] px-3 py-2 text-sm hover:border-[var(--color-primary)]">
                <input
                  type="radio"
                  name="accountType"
                  value="organization"
                  className="accent-[var(--color-primary)]"
                />
                Hội viên tổ chức / tập thể
              </label>
            </div>
          </fieldset>

          {/* Họ tên / Tên đơn vị */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Họ và tên / Tên đơn vị
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              placeholder="VD: Nguyễn Văn A"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Số điện thoại
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
              placeholder="09xx xxx xxx"
            />
          </div>

          {/* Mật khẩu */}
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
              autoComplete="new-password"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>

          {/* Xác nhận mật khẩu */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-[var(--color-text)]"
            >
              Xác nhận mật khẩu
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="mt-2 w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>

          {/* Điều khoản */}
          <label className="flex items-start gap-2 text-sm text-[var(--color-text)]">
            <input
              type="checkbox"
              className="mt-0.5 accent-[var(--color-primary)]"
            />
            <span>
              Tôi đồng ý với{" "}
              <Link
                href="/documents"
                className="font-semibold text-[var(--color-primary)] hover:underline"
              >
                Điều lệ Hội
              </Link>{" "}
              và các quy định về hội viên.
            </span>
          </label>

          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full rounded bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] hover:bg-[var(--color-primary-dark)]"
          >
            Đăng ký
          </button>

          {/* Link đăng nhập */}
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            Đã có tài khoản?{" "}
            <Link
              href="/login"
              className="font-semibold text-[var(--color-primary)] hover:underline"
            >
              Đăng nhập
            </Link>
          </p>
        </form>
      </Container>
    </>
  );
}