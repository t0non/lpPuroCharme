// src/data/site.ts
// ARQUIVO CENTRAL DE CONFIGURAÇÃO DO SITE
// Altere aqui para atualizar telefone, endereço, horários, redes sociais e mensagens do WhatsApp

export const siteConfig = {
  name: "Puro Charme",
  fullName: "Puro Charme Debutantes & Damas",
  tagline: "Especialistas em fazer você se sentir pronta para o seu momento.",
  description:
    "Aluguel de vestidos para debutantes e damas em Belo Horizonte. Confecção sob medida e primeiro aluguel. Atendimento personalizado no Edifício Mariana, Centro de BH.",
  url: "https://purocharmebh.site", // ⚠️ Substituir pelo domínio real

  // ─── CONTATO ──────────────────────────────────────────────────────────────
  contact: {
    phone: "(31) 99715-1194",
    phoneRaw: "5531997151194",
    whatsapp: "5531997151194",
    instagram: "https://www.instagram.com/purocharme_debutantes_damas/",
    instagramHandle: "@purocharme_debutantes_damas",
    googleMaps:
      "https://www.google.com/maps/place/Puro+Charme+Debutantes+%26+Damas/@-19.9166,-43.9345,17z",
    googleProfile: "https://share.google/6bQNr86UocznAPBKM",
  },

  // ─── ENDEREÇO ─────────────────────────────────────────────────────────────
  address: {
    street: "Av. Afonso Pena, 526",
    complement: "Sala 916 – 9º andar",
    building: "Edifício Mariana",
    neighborhood: "Centro",
    city: "Belo Horizonte",
    state: "MG",
    zip: "30130-901",
    full: "Av. Afonso Pena, 526, Sala 916 (9º andar) – Edifício Mariana, Centro, Belo Horizonte/MG",
  },

  // ─── HORÁRIOS ─────────────────────────────────────────────────────────────
  hours: [
    { day: "Segunda a sexta-feira", time: "09:00 – 18:00" },
    { day: "Sábado", time: "09:00 – 13:00" },
    { day: "Domingo", time: "Fechado" },
  ],

  // ─── AVALIAÇÕES ───────────────────────────────────────────────────────────
  rating: {
    score: "5.0",
    count: 40,
    source: "Google",
  },

  // ─── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | Puro Charme – Vestidos em BH",
    defaultTitle:
      "Puro Charme – Aluguel de Vestidos para Debutantes e Damas em BH",
    defaultDescription:
      "Aluguel de vestidos para debutantes e damas em Belo Horizonte. Confecção sob medida e primeiro aluguel. Atendimento personalizado no Edifício Mariana, Centro de BH.",
    ogImage: "/og-image.jpg", // ⚠️ Criar imagem OG real
    twitterCard: "summary_large_image",
  },

  // ─── MENSAGENS DO WHATSAPP ────────────────────────────────────────────────
  whatsappMessages: {
    default:
      "Olá! Vi o site da Puro Charme Debutantes & Damas e gostaria de agendar uma visita.",
    debutantes:
      "Olá! Gostaria de conhecer os vestidos de debutante disponíveis e agendar uma visita.",
    damas:
      "Olá! Gostaria de conhecer as opções para damas e agendar uma visita.",
    contato:
      "Olá! Gostaria de receber mais informações sobre a locação e agendar uma visita.",
    primeiroAluguel:
      "Olá! Gostaria de saber mais sobre a confecção sob medida e o primeiro aluguel para debutantes e damas.",
    modelos:
      "Olá! Gostaria de conhecer os modelos disponíveis para aluguel.",
  },
};

export function getWhatsAppUrl(
  message: string,
  utmSource?: string
): string {
  const phone = siteConfig.contact.whatsapp;
  const baseMessage = utmSource
    ? `${message} (Origem: ${utmSource})`
    : message;
  const encoded = encodeURIComponent(baseMessage);
  return `https://wa.me/${phone}?text=${encoded}`;
}
