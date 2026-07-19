// src/data/site.ts
// ARQUIVO CENTRAL DE CONFIGURAÇÃO DO SITE
// Altere aqui para atualizar telefone, endereço, horários, redes sociais e mensagens do WhatsApp

export const siteConfig = {
  name: "Puro Charme",
  fullName: "Puro Charme Debutantes & Damas",
  tagline: "Especialistas em fazer você se sentir pronta para o seu momento.",
  description:
    "Aluguel de vestidos para debutantes, damas, daminhas, formandas e madrinhas em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH.",
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
    titleTemplate: "%s | Puro Charme – Vestidos e Trajes em BH",
    defaultTitle:
      "Puro Charme – Aluguel de Vestidos para Debutantes e Festas em BH",
    defaultDescription:
      "Aluguel de vestidos para debutantes, damas, daminhas, formandas e madrinhas em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH. Agende sua visita.",
    ogImage: "/og-image.jpg", // ⚠️ Criar imagem OG real
    twitterCard: "summary_large_image",
  },

  // ─── MENSAGENS DO WHATSAPP ────────────────────────────────────────────────
  whatsappMessages: {
    default:
      "Olá! Vi o site da Puro Charme e gostaria de agendar uma visita para conhecer os modelos.",
    debutantes:
      "Olá! Gostaria de conhecer os vestidos de debutante disponíveis e agendar uma visita.",
    damas:
      "Olá! Gostaria de conhecer as opções para damas e daminhas e agendar uma visita.",
    festa:
      "Olá! Gostaria de conhecer os vestidos de festa disponíveis.",
    ternos:
      "Olá! Gostaria de conhecer os trajes para ternos e pajens disponíveis.",
    contato:
      "Olá! Gostaria de receber mais informações sobre a locação de trajes na Puro Charme.",
    galeria:
      "Olá! Vi a galeria da Puro Charme e gostaria de agendar uma visita.",
    guias:
      "Olá! Li um artigo no site da Puro Charme e gostaria de agendar uma visita.",
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
