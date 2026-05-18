import type { MetadataRoute } from "next";
import { getBlogPostSlugs } from "@/content/blog-posts";
import { getProjectSlugs } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-05-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: absoluteUrl("/sobre-mim"),
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.9,
      url: absoluteUrl("/projetos"),
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.85,
      url: absoluteUrl("/blog"),
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    changeFrequency: "monthly",
    lastModified,
    priority: 0.75,
    url: absoluteUrl(`/projetos/${slug}`),
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogPostSlugs().map((slug) => ({
    changeFrequency: "monthly",
    lastModified,
    priority: 0.7,
    url: absoluteUrl(`/blog/${slug}`),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
