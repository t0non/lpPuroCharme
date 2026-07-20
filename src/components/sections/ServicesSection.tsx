"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";

const services = [
  {
    id: "aluguel",
    title: "Aluguel de vestidos",
    description: "Modelos selecionados para debutantes, damas e ocasiões especiais.",
    image: "/images/debutantes.jpg",
    alt: "Vestidos de debutante",
    whatsappMsg: siteConfig.whatsappMessages.modelos,
  },
  {
    id: "confeccao",
    title: "Confecção sob medida",
    description: "Vestidos exclusivos para debutantes e damas, desenvolvidos de acordo com as medidas, preferências e características de cada cliente.",
    image: "/images/Daminhas.jpg",
    alt: "Vestidos sob medida",
    highlight: "Disponível para primeiro aluguel",
    whatsappMsg: siteConfig.whatsappMessages.primeiroAluguel,
  },
  {
    id: "atendimento",
    title: "Atendimento especializado",
    description: "Um atendimento próximo para ajudar cada cliente a encontrar o modelo, o caimento e os detalhes ideais para o seu momento.",
    image: "/images/vestidos_festas.jpg", // can reuse this nice image or whatsapp image
    alt: "Atendimento especializado",
    whatsappMsg: siteConfig.whatsappMessages.contato,
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
                  {service.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        background: "var(--color-gold)",
                        color: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      {service.highlight}
                    </div>
                  )}
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
                    className="btn btn-outline"
                    style={{ marginTop: "1rem", width: "100%", justifyContent: "center" }}
                  >
                    Saber mais
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
