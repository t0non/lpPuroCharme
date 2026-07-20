/**
 * src/config/siteConfig.ts
 *
 * CONFIGURAÇÃO CENTRAL DO SITE — ÚNICA FONTE DA VERDADE
 *
 * Todos os metadados, schemas JSON-LD e componentes devem consumir este arquivo.
 * Nunca espalhe telefone, endereço ou nome manualmente pelos componentes.
 *
 * Para alternar entre domínio temporário e domínio próprio, basta definir
 * a variável de ambiente NEXT_PUBLIC_SITE_URL.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://purocharmebh.site";

// ─── IDENTIDADE ───────────────────────────────────────────────────────────────

export const SITE_NAME = "Puro Charme";
export const SITE_FULL_NAME = "Puro Charme Debutantes & Damas";
export const SITE_TAGLINE =
  "Especialistas em fazer você se sentir pronta para o seu momento.";
export const SITE_DESCRIPTION =
  "Aluguel de vestidos para debutantes e damas, além de ternos elegantes em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH.";

// ─── CONTATO ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  /** Telefone formatado para exibição */
  phone: "(31) 99715-1194",
  /** Número raw para href tel: */
  phoneRaw: "5531997151194",
  /** Número para wa.me */
  whatsapp: "5531997151194",
  /** Instagram oficial */
  instagram: "https://www.instagram.com/purocharme_debutantes_damas/",
  instagramHandle: "@purocharme_debutantes_damas",
  /** Facebook — TODO: confirmar URL oficial com a Puro Charme */
  // facebook: "https://www.facebook.com/purocharme",
  /** Link do Google Maps para a localização exata */
  googleMaps:
    "https://www.google.com/maps/place/Puro+Charme+Debutantes+%26+Damas/@-19.9166,-43.9345,17z",
  /** Link do perfil no Google */
  googleProfile: "https://share.google/6bQNr86UocznAPBKM",
} as const;

// ─── ENDEREÇO ─────────────────────────────────────────────────────────────────
// Nome, endereço e telefone (NAP) devem ser absolutamente consistentes.

export const ADDRESS = {
  streetAddress: "Av. Afonso Pena, 526",
  complement: "Sala 916, 9º andar",
  building: "Edifício Mariana",
  neighborhood: "Centro",
  city: "Belo Horizonte",
  state: "MG",
  postalCode: "30130-901",
  country: "BR",
  countryLabel: "Brasil",
  /** Endereço completo formatado para exibição */
  full: "Av. Afonso Pena, 526, Sala 916 (9º andar) – Edifício Mariana, Centro, Belo Horizonte/MG",
} as const;

// ─── GEOLOCALIZAÇÃO ───────────────────────────────────────────────────────────
// TODO: confirmar coordenadas exatas com a Puro Charme (verificar no Google Maps)

export const GEO = {
  latitude: -19.9166,
  longitude: -43.9345,
} as const;

// ─── HORÁRIOS ─────────────────────────────────────────────────────────────────

export const HOURS = [
  { day: "Segunda a sexta-feira", time: "09:00 – 18:00" },
  { day: "Sábado", time: "09:00 – 13:00" },
  { day: "Domingo", time: "Fechado" },
] as const;

/** Horários em formato schema.org */
export const OPENING_HOURS_SPEC = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as string[],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Saturday"] as string[],
    opens: "09:00",
    closes: "13:00",
  },
];

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const SEO = {
  /** Template de título para páginas internas */
  titleTemplate: "%s | Puro Charme",
  /** Título padrão da página inicial */
  defaultTitle:
    "Puro Charme Debutantes & Damas | Aluguel de Vestidos em BH",
  /** Descrição padrão */
  defaultDescription:
    "Aluguel de vestidos para debutantes e damas, e ternos elegantes em Belo Horizonte.",
  /** Imagem Open Graph padrão */
  ogImage: "/og-image.jpg",
  /** Logotipo para schema */
  logo: "/images/logo.png",
} as const;

// ─── WHATSAPP — MENSAGENS POR PÁGINA ─────────────────────────────────────────
// Mensagens distintas para cada página aumentam a qualificação do lead.

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Conheci a Puro Charme Debutantes & Damas pelo site e gostaria de agendar uma visita.",
  ternos:
    "Olá! Gostaria de conhecer os ternos disponíveis para aluguel e agendar uma visita.",
  modelos:
    "Olá! Gostaria de conhecer os modelos disponíveis para aluguel.",
  debutantes:
    "Olá! Encontrei a Puro Charme pelo site e gostaria de agendar uma visita para conhecer os vestidos de debutante.",
  damas:
    "Olá! Encontrei a Puro Charme pelo site e gostaria de conhecer opções para damas.",
  contato:
    "Olá! Encontrei a Puro Charme pelo site e gostaria de receber mais informações sobre os serviços.",
} as const;

export type WhatsAppKey = keyof typeof WHATSAPP_MESSAGES;

// ─── AVALIAÇÕES ───────────────────────────────────────────────────────────────
// Dados de avaliações — exibidos visualmente no site, não usados em AggregateRating.

export const RATING = {
  score: "5.0",
  count: 40,
  source: "Google",
} as const;

// ─── HELPER: URL DO WHATSAPP ──────────────────────────────────────────────────

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ─── RE-EXPORT como siteConfig para compatibilidade com código existente ──────
// Permite migração gradual sem quebrar imports que usam @/data/site

export const siteConfig = {
  name: SITE_NAME,
  fullName: SITE_FULL_NAME,
  tagline: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  contact: {
    phone: CONTACT.phone,
    phoneRaw: CONTACT.phoneRaw,
    whatsapp: CONTACT.whatsapp,
    instagram: CONTACT.instagram,
    instagramHandle: CONTACT.instagramHandle,
    googleMaps: CONTACT.googleMaps,
    googleProfile: CONTACT.googleProfile,
  },
  address: {
    street: ADDRESS.streetAddress,
    complement: ADDRESS.complement,
    building: ADDRESS.building,
    neighborhood: ADDRESS.neighborhood,
    city: ADDRESS.city,
    state: ADDRESS.state,
    zip: ADDRESS.postalCode,
    full: ADDRESS.full,
  },
  hours: HOURS,
  rating: RATING,
  seo: SEO,
  whatsappMessages: WHATSAPP_MESSAGES,
} as const;
