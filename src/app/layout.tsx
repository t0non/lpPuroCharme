import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import {
  SITE_URL,
  SITE_FULL_NAME,
  SITE_NAME,
  SEO,
  CONTACT,
  ADDRESS,
} from "@/config/siteConfig";

export const metadata: Metadata = {
  // metadataBase define a URL base para resolver URLs relativas em Open Graph, canonical, etc.
  metadataBase: new URL(SITE_URL),

  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,

  applicationName: SITE_FULL_NAME,
  authors: [{ name: "Equipe Puro Charme" }],
  creator: SITE_NAME,
  publisher: SITE_FULL_NAME,
  category: "Moda e Vestuário",

  // Robots — permitir indexação de todas as páginas públicas
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Open Graph — compartilhamento em redes sociais e WhatsApp
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_FULL_NAME,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    url: SITE_URL,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_FULL_NAME} – Aluguel de Vestidos em Belo Horizonte`,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },

  // Alternates e canonical
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },

  // Ícones
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Web app manifest
  manifest: "/site.webmanifest",

  // Verificação de propriedade — preencher com token real após cadastrar no Search Console
  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  //   yandex: "YANDEX_VERIFICATION_TOKEN",
  // },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7BDVX289B7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7BDVX289B7');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NC6NGXRG');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NC6NGXRG"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Link de acessibilidade — permite pular direto para o conteúdo principal */}
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>

        {/* Scripts de analytics — carregados apenas se variáveis de ambiente estiverem configuradas */}
        <AnalyticsProvider />

        {/* Dados estruturados JSON-LD — presentes em todas as páginas */}
        <JsonLd />

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* Botão flutuante do WhatsApp */}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
