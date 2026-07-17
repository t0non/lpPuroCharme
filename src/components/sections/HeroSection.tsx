"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  const handleHeroCTA = () => {
    trackEvent("hero_cta_click", {
      label: "agendar_visita",
      category: "hero",
    });
    trackEvent("appointment_intent", {
      label: "hero_whatsapp",
      category: "conversion",
    });
  };

  const handleSecondaryCTA = () => {
    trackEvent("hero_cta_click", {
      label: "conhecer_modelos",
      category: "hero",
    });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`;

  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        minHeight: "min(90vh, 780px)",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-text-primary)",
        overflow: "hidden",
      }}
    >
      {/* Video de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/images/imagem_sessao1.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro para garantir leitura do texto */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 1,
        }}
      />
      {/* Padrão decorativo de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, rgba(139,94,107,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(184,149,106,0.2) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />

      {/* Linha decorativa top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, var(--color-gold), var(--color-rose-light), var(--color-gold), transparent)",
          zIndex: 2,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          padding: "4rem 1.25rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            animation: "fadeInUp 0.8s ease both",
          }}
        >
          {/* Badge de avaliação */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(250,247,244,0.1)",
              border: "1px solid rgba(250,247,244,0.2)",
              borderRadius: "999px",
              padding: "0.4rem 1rem",
              marginBottom: "1.75rem",
              backdropFilter: "blur(8px)",
            }}
            aria-label={`${siteConfig.rating.count} avaliações com nota ${siteConfig.rating.score} estrelas no Google`}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="#F59E0B"
                  color="#F59E0B"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "rgba(250,247,244,0.9)",
              }}
            >
              {siteConfig.rating.score} · {siteConfig.rating.count} avaliações no Google
            </span>
          </div>

          {/* Headline principal */}
          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
              fontWeight: 500,
              color: "#FAF7F4",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Você merece chegar ao seu evento{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-rose-light)",
              }}
            >
              exatamente como imaginou.
            </em>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              color: "rgba(250,247,244,0.78)",
              fontSize: "clamp(1rem, 2vw, 1.175rem)",
              lineHeight: 1.7,
              marginBottom: "2.25rem",
              maxWidth: "560px",
            }}
          >
            Do vestido de 15 anos ao traje do pajem — atendimento especializado
            para você e toda a corte, no Edifício Mariana, Centro de Belo
            Horizonte.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              alignItems: "center",
            }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg w-full-mobile"
              onClick={handleHeroCTA}
              id="hero-cta-primary"
            >
              <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={20} height={20} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              Agendar uma visita
            </a>
            <Link
              href="/galeria"
              className="btn btn-ghost w-full-mobile"
              onClick={handleSecondaryCTA}
              id="hero-cta-secondary"
              style={{ padding: "0.875rem 1.75rem", justifyContent: "center" }}
            >
              Conhecer os modelos
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Info rápida */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            {[
              "Debutantes",
              "Damas & Daminhas",
              "Festas",
              "Ternos & Pajens",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "rgba(250,247,244,0.65)",
                  fontSize: "0.825rem",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--color-gold-light)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna direita — Card de localização */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="hero-info-card"
        >
          <div
            style={{
              background: "rgba(250,247,244,0.07)",
              border: "1px solid rgba(250,247,244,0.15)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              backdropFilter: "blur(12px)",
              animation: "fadeInUp 0.8s ease 0.2s both",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold-light)",
                marginBottom: "1.25rem",
                maxWidth: "none",
              }}
            >
              Onde nos encontrar
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ color: "rgba(250,247,244,0.9)", fontWeight: 500, fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
                  Edifício Mariana
                </p>
                <p style={{ color: "rgba(250,247,244,0.6)", fontSize: "0.85rem", margin: "0.2rem 0 0", maxWidth: "none" }}>
                  {siteConfig.address.street}, Sala 916
                </p>
                <p style={{ color: "rgba(250,247,244,0.6)", fontSize: "0.85rem", margin: "0.1rem 0 0", maxWidth: "none" }}>
                  Centro, Belo Horizonte/MG
                </p>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "rgba(250,247,244,0.1)",
                }}
              />
              <div>
                <p style={{ color: "rgba(250,247,244,0.9)", fontWeight: 500, fontSize: "0.95rem", margin: 0, maxWidth: "none" }}>
                  Horários
                </p>
                {siteConfig.hours.map((h, i) => (
                  <p key={i} style={{ color: "rgba(250,247,244,0.6)", fontSize: "0.82rem", margin: "0.25rem 0 0", maxWidth: "none" }}>
                    {h.day}: <strong style={{ color: "rgba(250,247,244,0.85)", fontWeight: 500 }}>{h.time}</strong>
                  </p>
                ))}
              </div>
              <a
                href={siteConfig.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
                onClick={() =>
                  trackEvent("map_click", { label: "hero_card", category: "hero" })
                }
                style={{ textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.375rem" }}
              >
                <GoogleIcon size={16} />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-info-card {
            display: flex !important;
          }
          [aria-labelledby="hero-heading"] .container {
            grid-template-columns: 1fr 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
