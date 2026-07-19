import { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { SITE_URL } from "@/config/siteConfig";

/**
 * Sitemap gerado estaticamente.
 *
 * As datas de lastModified são fixas e controladas manualmente.
 * Atualize a data correspondente sempre que alterar o conteúdo de uma página.
 * Não use `new Date()` — datas dinâmicas que mudam a cada build
 * não refletem a data real de atualização e podem prejudicar a indexação.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Páginas de categoria — cada uma é uma das principais landing pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date("2026-07-19"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Guias de conteúdo — artigos informativos
  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guias/como-escolher-vestido-debutante`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/quanto-tempo-antes-alugar-vestido-debutante`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/como-combinar-vestidos-damas-daminhas`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/aluguel-ou-compra-vestido-festa`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/vestidos-edificio-mariana-bh`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticPages, ...categoryPages, ...guidePages];
}
