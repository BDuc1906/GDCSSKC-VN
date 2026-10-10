import type { MetadataRoute } from "next";

const baseUrl = "https://hoigdcsskcd.vn";

const routes = [
  "",
  "/about",
  "/leadership",
  "/documents",
  "/news",
  "/organization",
  "/governance",
  "/members",
  "/fees",
  "/events",
  "/gallery",
  "/contact",
  "/login",
  "/register",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${baseUrl}${r}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}