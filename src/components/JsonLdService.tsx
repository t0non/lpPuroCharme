/**
 * src/components/JsonLdService.tsx
 *
 * Schema Service para páginas de categoria.
 * O `provider` aponta para o @id da empresa, garantindo consistência.
 */

import { SITE_URL, SITE_FULL_NAME } from "@/config/siteConfig";

interface JsonLdServiceProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

/** Serializa JSON de forma segura para uso em dangerouslySetInnerHTML */
function safeJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, "<\\/script>");
}

export function JsonLdService({ name, description, url, image }: JsonLdServiceProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": `${SITE_URL}/#business`,
      name: SITE_FULL_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(serviceSchema) }}
    />
  );
}
