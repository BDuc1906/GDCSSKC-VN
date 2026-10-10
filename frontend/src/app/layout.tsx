import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "@/styles/tokens.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const font = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hội GDCSSKCĐ Việt Nam",
  description: "Trang thông tin chính thức của Hội GDCSSKCĐ Việt Nam",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${font.className} flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}