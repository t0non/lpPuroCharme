import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLdService } from "@/components/JsonLdService";
import { SITE_URL, WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/config/siteConfig";

// Títulos SEO otimizados por categoria — conforme especificação
const CATEGORY_META: Record<string, { title: string; description: string }> = {
  "vestidos-debutantes": {
    title: "Aluguel de Vestido de Debutante em BH | Puro Charme",
    description:
      "Alugue o vestido de debutante ideal em Belo Horizonte. A Puro Charme oferece modelos clássicos e contemporâneos para a festa de 15 anos, com atendimento personalizado no Edifício Mariana, Centro de BH. Agende sua visita.",
  },
  "damas-e-daminhas": {
    title: "Vestidos para Damas e Daminhas em BH | Puro Charme",
    description:
      "Vestidos elegantes para damas de honra adultas e daminhas infantis em Belo Horizonte. A Puro Charme cuida da corte completa com harmonia visual. Edifício Mariana, Centro de BH. Agende sua visita.",
  },
  "vestidos-de-festa": {
    title: "Aluguel de Vestidos de Festa em BH | Puro Charme",
    description:
      "Aluguel de vestidos de festa em Belo Horizonte para formaturas, casamentos, madrinhas e eventos sociais. Atendimento personalizado no Edifício Mariana, Centro de BH. Agende sua visita.",
  },
  "ternos-e-pajens": {
    title: "Aluguel de Ternos e Trajes para Pajens em BH | Puro Charme",
    description:
      "Aluguel de ternos sociais e trajes para pajens em Belo Horizonte. A Puro Charme veste os homens da corte com elegância e qualidade. Edifício Mariana, Centro de BH. Agende sua visita.",
  },
};

// Gera as rotas estáticas para todas as categorias
export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

// Gera metadata dinâmica por categoria
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const meta = CATEGORY_META[slug];

  return {
    title: meta?.title || category.metaTitle,
    description: meta?.description || category.metaDescription,
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      title: meta?.title || category.metaTitle,
      description: meta?.description || category.metaDescription,
      url: `${SITE_URL}/${category.slug}`,
      images: [
        {
          url: category.heroImage,
          alt: category.heroImageAlt,
        },
      ],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const whatsappMessage =
    WHATSAPP_MESSAGES[category.whatsappKey as keyof typeof WHATSAPP_MESSAGES] ||
    WHATSAPP_MESSAGES.default;
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <>
      {/* Breadcrumb com JSON-LD embutido */}
      <Breadcrumb
        items={[{ label: category.name, href: `/${category.slug}` }]}
      />

      {/* JSON-LD Service */}
      <JsonLdService
        name={category.name}
        description={category.description}
        url={`${SITE_URL}/${category.slug}`}
        image={category.heroImage}
      />

      {/* Hero da categoria */}
      <section
        aria-labelledby="category-heading"
        style={{
          background:
            "linear-gradient(135deg, #2C2118 0%, #4A2D35 60%, #6B3D48 100%)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "640px" }}>
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
              {category.shortName}
            </span>
            <h1
              id="category-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#FAF7F4",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {category.headline}
            </h1>
            <p
              style={{
                color: "rgba(250,247,244,0.72)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "500px",
              }}
            >
              {category.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              data-cta="whatsapp"
              data-page={category.slug}
              data-position="hero"
              data-service={category.id}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar uma visita
            </a>
          </div>
        </div>
      </section>

      {/* Descrição detalhada */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="cat-detail-grid"
          >
            {/* Texto */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--color-text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                {category.name}
              </h2>
              {category.longDescription.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Features */}
              <div style={{ marginTop: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    color: "var(--color-text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  O que você encontra aqui
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {category.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.95rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--color-rose-taupe)",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  data-cta="whatsapp"
                  data-page={category.slug}
                  data-position="content"
                  data-service={category.id}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div
              style={{
                height: "400px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border-subtle)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={category.heroImage}
                alt={category.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeria da categoria */}
      <GallerySection limit={4} showFilter={false} />

      {/* Links para outras categorias */}
      <section className="section section-alt" aria-label="Outras categorias">
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.625rem",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Veja também
          </h2>
          <div className="grid-categories">
            {categories
              .filter((cat) => cat.id !== category.id)
              .slice(0, 3)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/${cat.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card"
                    style={{ padding: "1.5rem", height: "100%" }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.1rem",
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
                        margin: "0 0 1rem",
                      }}
                    >
                      {cat.description}
                    </p>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-rose-taupe)",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      Ver modelos <ChevronRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCTASection
        whatsappKey={category.whatsappKey}
      />

      <style>{`
        @media (min-width: 768px) {
          .cat-detail-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
