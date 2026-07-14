import type { MetadataRoute } from "next";
import { siteData } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteData.siteMeta.domain}/sitemap.xml`,
  };
}
