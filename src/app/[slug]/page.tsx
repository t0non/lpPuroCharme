import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { siteConfig, getWhatsAppUrl } from "@/data/site";

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

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    keywords: category.keywords,
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${siteConfig.url}/${category.slug}`,
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

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappMessages[category.whatsappKey as keyof typeof siteConfig.whatsappMessages] ||
      siteConfig.whatsappMessages.default
  );

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Navegação por categorias"
        style={{
          background: "var(--color-cream-dark)",
          borderBottom: "1px solid var(--color-border-subtle)",
          padding: "0.875rem 0",
        }}
      >
        <div className="container">
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.85rem",
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: "var(--color-text-muted)", textDecoration: "none" }}
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} color="var(--color-text-muted)" />
            </li>
            <li aria-current="page">
              <span style={{ color: "var(--color-rose-taupe)", fontWeight: 500 }}>
                {category.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero da categoria */}
      <section
        aria-labelledby="category-heading"
        style={{
          background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 60%, #6B3D48 100%)",
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
            >
              <MessageCircle size={18} />
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
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
                      Ver modelos <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCTASection
        whatsappKey={category.whatsappKey as keyof typeof siteConfig.whatsappMessages}
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
