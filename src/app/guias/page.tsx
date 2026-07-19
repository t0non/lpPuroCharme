import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/config/siteConfig";
import { Breadcrumb } from "@/components/Breadcrumb";
import { categories } from "@/data/categories";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guias e Dicas sobre Trajes para Festas em BH | Puro Charme",
  description:
    "Guias práticos sobre como escolher vestido de debutante, combinar damas e daminhas, alugar vestido de festa e visitar o Edifício Mariana em Belo Horizonte.",
  alternates: { canonical: "/guias" },
  openGraph: {
    title: "Guias e Dicas sobre Trajes para Festas em BH | Puro Charme",
    description:
      "Artigos com orientações reais para quem está planejando um evento e precisa escolher vestidos e trajes em Belo Horizonte.",
    url: `${SITE_URL}/guias`,
  },
};

const guides = [
  {
    href: "/guias/como-escolher-vestido-debutante",
    title: "Como escolher o vestido de debutante: guia para a festa de 15 anos",
    description:
      "Do estilo ao conforto — como ajudar a debutante a encontrar o vestido certo para o seu dia especial.",
    category: "Debutantes",
    readTime: "5 min",
  },
  {
    href: "/guias/quanto-tempo-antes-alugar-vestido-debutante",
    title: "Quanto tempo antes procurar o vestido de debutante?",
    description:
      "O planejamento antecipado garante mais opções, mais calma e a certeza de encontrar o vestido ideal.",
    category: "Debutantes",
    readTime: "4 min",
  },
  {
    href: "/guias/como-combinar-vestidos-damas-daminhas",
    title: "Como combinar vestidos de damas e daminhas com a festa",
    description:
      "Harmonia visual para toda a corte — damas adultas, daminhas infantis e a coordenação com o vestido da debutante.",
    category: "Damas & Daminhas",
    readTime: "5 min",
  },
  {
    href: "/guias/aluguel-ou-compra-vestido-festa",
    title: "Alugar ou comprar vestido de festa: o que considerar",
    description:
      "Uma análise honesta entre as duas opções para ajudar você a tomar a melhor decisão para o seu evento.",
    category: "Vestidos de Festa",
    readTime: "4 min",
  },
  {
    href: "/guias/vestidos-edificio-mariana-bh",
    title: "Como visitar lojas de vestidos no Edifício Mariana em Belo Horizonte",
    description:
      "Informações sobre o Edifício Mariana, como chegar e como organizar uma visita à Puro Charme na Sala 916.",
    category: "Guia Local",
    readTime: "3 min",
  },
];

export default function GuiasPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Guias", href: "/guias" }]} />

      {/* Hero */}
      <section
        aria-labelledby="guias-heading"
        style={{
          background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.875rem",
            }}
          >
            Guias e dicas
          </span>
          <h1
            id="guias-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FAF7F4",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Tudo o que você precisa saber antes de escolher um traje
          </h1>
          <p
            style={{
              color: "rgba(250,247,244,0.72)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Artigos com orientações reais e práticas para ajudar você a planejar
            com mais calma, escolher com mais confiança e chegar ao seu evento
            da forma que sempre imaginou.
          </p>
        </div>
      </section>

      {/* Lista de guias */}
      <section
        aria-labelledby="guias-list-heading"
        className="section"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container">
          <h2
            id="guias-list-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              color: "var(--color-text-primary)",
              marginBottom: "2rem",
            }}
          >
            Artigos disponíveis
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="guide-card"
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "var(--color-blush-light)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <BookOpen size={20} color="var(--color-rose-taupe)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--color-rose-taupe)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {guide.category}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        · {guide.readTime} de leitura
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.1rem",
                        color: "var(--color-text-primary)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {guide.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {guide.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    color="var(--color-rose-taupe)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  />
                </article>
              </Link>
            ))}
          </div>

          {/* Seção de serviços relacionados */}
          <div style={{ marginTop: "4rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                color: "var(--color-text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Explore nossos serviços
            </h2>
            <div className="grid-categories">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        color: "var(--color-text-primary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {cat.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .guide-card {
          transition: box-shadow 200ms ease, border-color 200ms ease !important;
        }
        .guide-card:hover {
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-rose-light) !important;
        }
      `}</style>
    </>
  );
}
