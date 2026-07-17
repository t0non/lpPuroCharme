"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { buildWhatsAppMessage } from "@/lib/utm";
import { categories } from "@/data/categories";
import { trackEvent } from "@/lib/analytics";

const categoryIcons: Record<string, string> = {
  debutantes: "👗",
  damas: "✨",
  festa: "🌸",
  ternos: "🎩",
};

export function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="section"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">O que oferecemos</span>
          <h2 id="categories-heading" className="section-title">
            Vestidos e trajes para toda a corte
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            De debutantes a pajens — temos o traje certo para cada pessoa
            especial do seu evento.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid-categories">
          {categories.map((cat) => {
            const message = `Olá! Gostaria de agendar uma visita para experimentar os trajes da categoria: ${cat.name}.`;
            const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              buildWhatsAppMessage(message)
            )}`;

            return (
              <div
                key={cat.id}
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Área da imagem */}
                <div
                  style={{
                    height: "220px",
                    flexShrink: 0,
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Image
                    src={cat.cardImage}
                    alt={cat.cardImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>

                {/* Conteúdo */}
                <div
                  style={{
                    padding: "1.375rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.175rem",
                      color: "var(--color-text-primary)",
                      margin: 0,
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
                      flex: 1,
                    }}
                  >
                    {cat.description}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("whatsapp_category_click", {
                        label: cat.id,
                        category: "whatsapp",
                      })
                    }
                    className="btn btn-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                      width: "100%",
                    }}
                  >
                    <Image 
                      src="/images/whatsapp-icone.png" 
                      alt="WhatsApp" 
                      width={18} 
                      height={18} 
                      style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} 
                    />
                    Agendar visita
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
