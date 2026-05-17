import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { allBlogSlugsQuery, allLeistungsSlugsQuery } from "@/lib/sanity/queries";
import { leistungenContent } from "@/lib/leistungenContent";

const BASE_URL = "https://levi-rudolph.de";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/ueber-mich`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/leistungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/termin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const leistungsRoutes: MetadataRoute.Sitemap = leistungenContent.map((l) => ({
    url: `${BASE_URL}/leistungen/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs: { slug: string }[] = await client.fetch(allBlogSlugsQuery);
    blogRoutes = slugs.map((s) => ({
      url: `${BASE_URL}/blog/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // Sanity not configured yet
  }

  return [...staticRoutes, ...leistungsRoutes, ...blogRoutes];
}
