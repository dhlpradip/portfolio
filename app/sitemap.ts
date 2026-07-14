import type { MetadataRoute } from "next";
import { siteData } from "@/lib/data";
import { features } from "@/lib/features";
import { getWritings } from "@/lib/writings";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteData.siteMeta.domain;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  if (!features.writingsPublic) {
    return staticPages;
  }

  const writings = await getWritings();
  const writingPages: MetadataRoute.Sitemap = [
    { url: `${base}/writings`, changeFrequency: "weekly", priority: 0.8 },
    ...writings.map((writing) => ({
      url: `${base}/writings/${writing.slug}`,
      lastModified: new Date(writing.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...writingPages];
}
