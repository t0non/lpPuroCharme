"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export function FirstRentalSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.ternos
  )}`;

  const handleCTA = () => {
    trackEvent("whatsapp_click", {
      label: "ternos",
      category: "conversion",
    });
  };

  return (
    <section
      aria-labelledby="first-rental-heading"
      className="section"
      style={{ background: "var(--color-cream-dark)", position: "relative" }}
    >
      {/* Decoração superior */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(184, 149, 106, 0.3), transparent)",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="grid-about"
        >
          {/* Texto */}
          <div style={{ order: 2 }}>
            <span className="section-label">Ternos</span>
            <h2 id="first-rental-heading" className="section-title">
              Elegância também para os homens da corte
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                color: "var(--color-text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              <p>
                Oferecemos opções elegantes de ternos e trajes a rigor para que a corte esteja em perfeita harmonia com a protagonista do evento.
              </p>
              <p>
                Nosso atendimento garante o melhor caimento e estilo, para que o momento seja verdadeiramente impecável.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={handleCTA}
            >
              <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={18} height={18} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              Quero conhecer os ternos
            </a>
          </div>

          {/* Imagem */}
          <div style={{ position: "relative", order: 1 }}>
            <div
              style={{
                position: "absolute",
                inset: "-1rem",
                border: "1px solid var(--color-gold-light)",
                borderRadius: "var(--radius-lg)",
                transform: "translate(-1rem, 1rem)",
                zIndex: 0,
              }}
              className="hidden md:block"
            />
            <div
              style={{
                position: "relative",
                height: "600px",
                width: "100%",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/ternos_pagen.jpg"
                alt="Ternos e trajes elegantes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .grid-about {
            grid-template-columns: 1fr 1fr !important;
            gap: 5rem !important;
          }
          .grid-about > div:first-child {
            order: 1 !important;
          }
          .grid-about > div:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
