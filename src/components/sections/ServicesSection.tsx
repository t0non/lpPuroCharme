"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const services = [
  {
    id: "debutantes",
    title: "Vestidos de Debutante",
    description: "Modelos exclusivos, do clássico ao contemporâneo, para os 15 anos dos seus sonhos.",
    image: "/images/debutantes.jpg",
    alt: "Vestidos de debutante",
    whatsappMsg: siteConfig.whatsappMessages.debutantes,
  },
  {
    id: "damas",
    title: "Damas de Honra",
    description: "Opções elegantes e coordenadas para damas de honra, completando a harmonia visual da corte.",
    image: "/images/Daminhas.jpg",
    alt: "Vestidos para damas",
    whatsappMsg: siteConfig.whatsappMessages.damas,
  },
  {
    id: "ternos",
    title: "Ternos",
    description: "Ternos sociais com modelagem impecável para acompanhar o evento com máxima elegância.",
    image: "/images/ternos_pagen.jpg",
    alt: "Ternos elegantes",
    whatsappMsg: siteConfig.whatsappMessages.ternos,
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="section"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">O que oferecemos</span>
          <h2 id="services-heading" className="section-title">
            Encontre o traje ideal para cada momento
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Tudo o que você precisa para tornar seu evento inesquecível.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid-categories" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {services.map((service) => {
            const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              service.whatsappMsg
            )}`;

            return (
              <div
                key={service.id}
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
                    height: "240px",
                    flexShrink: 0,
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  
                </div>

                {/* Conteúdo */}
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      color: "var(--color-text-primary)",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}
                    onClick={() => trackEvent("whatsapp_click", { label: service.id, category: "services" })}
                  >
                    <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={18} height={18} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                    Ver modelos
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
