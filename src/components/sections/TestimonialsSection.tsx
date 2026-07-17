"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppMessage } from "@/lib/utm";
import { testimonials, Testimonial } from "@/data/testimonials";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="testimonial-card"
      style={{
        background: "var(--color-white)",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        boxShadow: "var(--shadow-sm)",
        flexShrink: 0,
        whiteSpace: "normal",
      }}
    >
      {/* Header do card: Avatar + Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid var(--color-blush)",
          }}
        >
          <Image
            src={testimonial.avatar}
            alt={`Avatar de ${testimonial.name}`}
            fill
            sizes="52px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h3
            style={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              margin: "0 0 0.15rem 0",
            }}
          >
            {testimonial.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            {testimonial.source === "Google" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
                title="Avaliação no Google"
              >
                <GoogleIcon size={14} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Texto */}
      <p
        style={{
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "0.95rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        "{testimonial.text}"
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    buildWhatsAppMessage(siteConfig.whatsappMessages.default)
  )}`;

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  // Duplicamos o conteúdo o suficiente para preencher a tela em monitores ultra wide.
  const renderRow = (row: Testimonial[]) => (
    <>
      {row.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
      {row.map((t) => (
        <TestimonialCard key={`${t.id}-dup1`} testimonial={t} />
      ))}
      {row.map((t) => (
        <TestimonialCard key={`${t.id}-dup2`} testimonial={t} />
      ))}
    </>
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section section-alt"
      style={{ overflow: "hidden" }}
    >
      <div className="container" style={{ maxWidth: "100%", padding: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", padding: "0 1.25rem" }}>
          <span className="section-label">Avaliações</span>
          <h2 id="testimonials-heading" className="section-title">
            O que dizem nossas clientes
          </h2>
        </div>

        {/* Marquee Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Row 1: Left */}
          <div className="marquee">
            <div className="marquee-content scroll-left">{renderRow(row1)}</div>
            <div className="marquee-content scroll-left" aria-hidden="true">
              {renderRow(row1)}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="marquee">
            <div className="marquee-content scroll-right">{renderRow(row2)}</div>
            <div className="marquee-content scroll-right" aria-hidden="true">
              {renderRow(row2)}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full-mobile"
          >
            <Image 
              src="/images/whatsapp-icone.png" 
              alt="WhatsApp" 
              width={20} 
              height={20} 
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} 
            />
            Falar com uma consultora
          </a>
        </div>
      </div>

      <style>{`
        .marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 1.5rem;
          padding: 0 1rem; /* Margem pra evitar que encoste completamente na borda na renderização inicial */
        }
        
        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
          gap: 1.5rem;
          min-width: 100%;
        }

        .scroll-left {
          animation: scrollLeft 45s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 45s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(calc(-100% - 1.5rem));
          }
          to {
            transform: translateX(0);
          }
        }

        .testimonial-card {
          width: 320px;
        }
        @media (min-width: 768px) {
          .testimonial-card {
            width: 400px;
          }
        }
      `}</style>
    </section>
  );
}
