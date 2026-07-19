import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Regra geral — permite rastreamento de todas as páginas públicas
        userAgent: "*",
        allow: "/",
        // Bloqueia apenas rotas internas/técnicas que não devem ser indexadas
        disallow: ["/api/"],
      },
      {
        // Permite explicitamente que OAI-SearchBot (ChatGPT) rastreie o site
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // Garante que Googlebot e Bingbot não sejam bloqueados acidentalmente
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
