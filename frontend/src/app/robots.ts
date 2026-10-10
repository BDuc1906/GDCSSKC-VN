import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/register", "/forgot-password"],
      },
    ],
    sitemap: "https://hoigdcsskcd.vn/sitemap.xml",
  };
}