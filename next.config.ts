import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Gerar formatos modernos — AVIF e WebP reduzem significativamente o tamanho
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que o site seja embutido em iframes de terceiros (clickjacking)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Previne sniffing de MIME type
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Habilita proteção XSS em browsers legados
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Garante que referrer seja enviado de forma segura
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Força HTTPS por 1 ano — habilitar apenas após confirmar domínio próprio com HTTPS
          // { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
      {
        // Cache de longa duração para arquivos estáticos com hash no nome
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache moderado para imagens públicas
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  // Redirecionamento do host temporário da Vercel para o domínio oficial
  // Ativar após confirmar o domínio próprio e apontar DNS
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [{ type: "host", value: "lp-puro-charme-2lqh-ivory.vercel.app" }],
  //       destination: `${process.env.NEXT_PUBLIC_SITE_URL || "https://purocharmebh.site"}/:path*`,
  //       permanent: true, // status 308
  //     },
  //   ];
  // },
};

export default nextConfig;
