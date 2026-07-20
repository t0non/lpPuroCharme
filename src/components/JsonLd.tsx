/**
 * src/components/JsonLd.tsx
 *
 * Dados estruturados JSON-LD para a página inicial.
 * Inclui: LocalBusiness (ClothingStore), WebSite e ItemList de categorias.
 *
 * REGRAS APLICADAS:
 * - AggregateRating REMOVIDO: avaliações do Google não devem ser
 *   transformadas em AggregateRating próprio (risco de política do Google)
 * - priceRange REMOVIDO: sem confirmação de política de preços com a loja
 * - paymentAccepted REMOVIDO: sem confirmação de formas de pagamento
 * - FAQPage REMOVIDO do layout global: deve ser adicionado apenas nas
 *   páginas onde a seção FAQ é renderizada visualmente
 * - JSON.stringify com escaping seguro para prevenir injeção via </script>
 */

import { SITE_URL, SITE_FULL_NAME, SITE_NAME, SITE_DESCRIPTION, CONTACT, ADDRESS, GEO, OPENING_HOURS_SPEC, SEO } from "@/config/siteConfig";

/** Serializa JSON de forma segura para uso em dangerouslySetInnerHTML */
function safeJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, "<\\/script>");
}

export function JsonLd() {
  /** Schema LocalBusiness / ClothingStore */
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ClothingStore"],
    // @id consistente — todos os schemas relacionados apontam para este ID
    "@id": `${SITE_URL}/#business`,
    name: SITE_FULL_NAME,
    alternateName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    image: `${SITE_URL}${SEO.ogImage}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${SEO.logo}`,
      width: 400,
      height: 100,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.streetAddress}, ${ADDRESS.complement}`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: confirmar coordenadas exatas com a Puro Charme
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: OPENING_HOURS_SPEC,
    sameAs: [
      CONTACT.instagram,
      CONTACT.googleProfile,
      // Adicionar Facebook quando URL for confirmada com a loja
    ].filter(Boolean),
    hasMap: CONTACT.googleMaps,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      availableLanguage: "Portuguese",
      contactOption: "TollFree",
    },
    areaServed: {
      "@type": "City",
      name: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    // Serviços principais — descrição factual sem inventar dados
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trajes para Festas e Eventos",
      itemListElement: [
        "Aluguel de vestido de debutante",
        "Vestidos para damas de honra",
        "Confecção de vestido sob medida",
        "Aluguel de ternos",
      ].map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };

  /** Schema WebSite */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_FULL_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };

  /** ItemList de categorias de serviço */
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços — Puro Charme",
    itemListElement: [
      { name: "Aluguel de vestidos", url: `${SITE_URL}/#servicos` },
      { name: "Confecção sob medida", url: `${SITE_URL}/#servicos` },
      { name: "Atendimento especializado", url: `${SITE_URL}/#servicos` },
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(itemList) }}
      />
    </>
  );
}
