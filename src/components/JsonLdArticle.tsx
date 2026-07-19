/**
 * src/components/JsonLdArticle.tsx
 *
 * Schema Article para guias e artigos informativos.
 */

import { SITE_URL, SITE_FULL_NAME, SEO } from "@/config/siteConfig";

interface JsonLdArticleProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

function safeJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, "<\\/script>");
}

export function JsonLdArticle({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: JsonLdArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Equipe Puro Charme",
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
      name: SITE_FULL_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SEO.logo}`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: image
        ? image.startsWith("http")
          ? image
          : `${SITE_URL}${image}`
        : `${SITE_URL}${SEO.ogImage}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(articleSchema) }}
    />
  );
}
