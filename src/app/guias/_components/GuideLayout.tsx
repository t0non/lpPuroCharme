/**
 * src/app/guias/_components/GuideLayout.tsx
 *
 * Layout compartilhado para todos os guias.
 */

import Link from "next/link";
import { CONTACT, SITE_URL } from "@/config/siteConfig";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLdArticle } from "@/components/JsonLdArticle";
import { MessageCircle } from "lucide-react";

interface GuideLayoutProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  whatsappMessage: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
}

export function GuideLayout({
  title,
  description,
  url,
  datePublished,
  dateModified,
  whatsappMessage,
  breadcrumbLabel,
  children,
}: GuideLayoutProps) {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <JsonLdArticle
        headline={title}
        description={description}
        url={`${SITE_URL}${url}`}
        datePublished={datePublished}
        dateModified={dateModified}
      />

      <Breadcrumb
        items={[
          { label: "Guias", href: "/guias" },
          { label: breadcrumbLabel },
        ]}
      />

      <article>
        {/* Hero do artigo */}
        <header
          style={{
            background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
            padding: "3.5rem 0 2.5rem",
          }}
        >
          <div className="container" style={{ maxWidth: "780px" }}>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-gold-light)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.875rem",
              }}
            >
              Equipe Puro Charme ·{" "}
              {new Date(datePublished).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#FAF7F4",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "rgba(250,247,244,0.72)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              {description}
            </p>
          </div>
        </header>

        {/* Conteúdo do artigo */}
        <div className="section" style={{ background: "var(--color-cream)" }}>
          <div
            className="container guide-content"
            style={{
              maxWidth: "720px",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
            }}
          >
            {children}

            {/* CTA ao final do artigo */}
            <aside
              style={{
                background: "var(--color-blush-light)",
                border: "1px solid var(--color-blush)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Pronta para escolher o traje ideal?
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                Agende uma visita à Puro Charme e experimente os modelos com
                calma e orientação.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar com a equipe pelo WhatsApp
              </a>
            </aside>

            {/* Links de navegação entre guias e serviços */}
            <nav
              aria-label="Artigos e serviços relacionados"
              style={{ marginTop: "2.5rem" }}
            >
              <p
                style={{
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: "0.75rem",
                  fontSize: "0.9rem",
                }}
              >
                Veja também:
              </p>
              <ul
                style={{
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li>
                  <Link
                    href="/guias"
                    style={{ color: "var(--color-rose-taupe)" }}
                  >
                    Todos os guias
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    style={{ color: "var(--color-rose-taupe)" }}
                  >
                    Agendar uma visita
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </article>

      <style>{`
        .guide-content h2 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-text-primary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .guide-content h3 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--color-text-primary);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .guide-content p {
          margin-bottom: 1.25rem;
        }
        .guide-content ul, .guide-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .guide-content a {
          color: var(--color-rose-taupe);
        }
        .guide-content strong {
          color: var(--color-text-primary);
        }
      `}</style>
    </>
  );
}
