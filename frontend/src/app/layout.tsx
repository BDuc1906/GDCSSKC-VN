import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Be_Vietnam_Pro } from "next/font/google";

import "./globals.css";
import "@/styles/tokens.css";

import ThemeProvider from "@/components/theme/ThemeProvider";
import LanguageProvider from "@/i18n/LanguageProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import PageTransition from "@/components/layout/PageTransition";
import { site } from "@/config/site";

const font = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoigdcsskcd.vn"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  keywords: [
    "Hội GDCSSKCĐ",
    "giáo dục chăm sóc sức khoẻ cộng đồng",
    "hội xã hội nghề nghiệp",
    "sức khoẻ cộng đồng",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hoigdcsskcd.vn",
    siteName: site.name,
    title: site.name,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.shortDescription,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#16A34A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <SkipToContent />
            {/* Wrapper: flex column full height, KHÔNG có overflow */}
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main" className="flex-1">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}