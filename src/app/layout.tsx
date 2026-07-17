import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://purocharme.com.br"),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    "aluguel vestido debutante BH",
    "vestido 15 anos Belo Horizonte",
    "aluguel vestido festa BH",
    "vestido dama BH",
    "vestido daminha BH",
    "aluguel terno BH",
    "traje pajem BH",
    "Edifício Mariana BH",
    "loja vestidos centro BH",
  ],
  authors: [{ name: "Puro Charme Debutantes & Damas" }],
  creator: "Puro Charme",
  publisher: "Puro Charme Debutantes & Damas",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.fullName,
    title: "Puro Charme – Vestidos e Trajes para Eventos em Belo Horizonte",
    description:
      "Aluguel de vestidos para debutantes, damas, daminhas, formandas e madrinhas em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Puro Charme Debutantes & Damas – Belo Horizonte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puro Charme – Vestidos e Trajes para Eventos em BH",
    description:
      "Aluguel de vestidos para debutantes, damas, formandas e madrinhas. Atendimento personalizado no Edifício Mariana, BH.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        <AnalyticsProvider />
        <JsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
