import { MetadataRoute } from "next";
import { niches } from "@/data/niches";
import { caseStudies } from "@/data/caseStudies";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/precos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/como-funciona`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/auditoria`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/nichos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicos/website`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/whatsapp-ia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/rececionista-ia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos/crm`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${base}/nichos/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const casePages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${base}/casos/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...nichePages, ...casePages];
}
