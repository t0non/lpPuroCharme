"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppMessage } from "@/lib/utm";
import { testimonials, Testimonial } from "@/data/testimonials";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

/**
 * TestimonialsSection — CORRIGIDO
 *
 * Cada avaliação aparece UMA ÚNICA VEZ no DOM.
 * Não há duplicação de conteúdo para efeito de carrossel infinito.
 *
 * Implementação: grid visível acessível + carrossel simples com navegação
 * por botões e suporte a teclado. Respeita prefers-reduced-motion.
 */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="testimonial-card"
      aria-label={`Avaliação de ${testimonial.name}`}
    >
      {/* Header: Avatar + Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.25rem",
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
            alt={`Foto de perfil de ${testimonial.name}`}
            fill
            sizes="52px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p
            style={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              margin: "0 0 0.15rem 0",
            }}
          >
            {testimonial.name}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{ display: "flex", gap: "2px" }}
              aria-label={`${testimonial.rating} de 5 estrelas`}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" aria-hidden="true" />
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
                title="Avaliação verificada no Google"
              >
                <GoogleIcon size={14} />
                <span style={{ fontSize: "0.7rem" }}>Google</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Texto da avaliação */}
      <blockquote
        style={{
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "0.95rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.6,
          margin: 0,
          fontStyle: "normal",
        }}
      >
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
    </article>
  );
}

export function TestimonialsSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    buildWhatsAppMessage(siteConfig.whatsappMessages.default)
  )}`;

  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const total = testimonials.length;

  // Detecta prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Scroll suave para o card atual
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[current] as HTMLElement;
    if (!card) return;
    card.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [current, prefersReduced]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section section-alt"
    >
      <div className="container">
        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Avaliações</span>
          <h2 id="testimonials-heading" className="section-title">
            O que dizem nossas clientes
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Avaliações verificadas no Google por clientes reais.
          </p>
        </div>

        {/* Carrossel — scroll horizontal com cards visíveis no DOM */}
        <div
          style={{ position: "relative" }}
          role="region"
          aria-label="Avaliações de clientes"
        >
          {/* Faixa deslizante */}
          <div
            ref={trackRef}
            className="testimonials-track"
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              paddingBottom: "0.5rem",
            }}
          >
            {/* Cada avaliação aparece exatamente UMA VEZ */}
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                style={{
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                }}
                aria-hidden={i !== current ? "true" : undefined}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          {/* Controles de navegação */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              aria-label="Avaliação anterior"
              className="testimonial-nav-btn"
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: current === 0 ? "not-allowed" : "pointer",
                opacity: current === 0 ? 0.4 : 1,
                transition: "all 200ms ease",
              }}
            >
              <ChevronLeft size={18} color="var(--color-rose-taupe)" />
            </button>

            {/* Indicadores de posição */}
            <div
              style={{ display: "flex", gap: "0.5rem" }}
              aria-label={`Avaliação ${current + 1} de ${total}`}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para avaliação ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background:
                      i === current
                        ? "var(--color-rose-taupe)"
                        : "var(--color-border)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 300ms ease",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              disabled={current === total - 1}
              aria-label="Próxima avaliação"
              className="testimonial-nav-btn"
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: current === total - 1 ? "not-allowed" : "pointer",
                opacity: current === total - 1 ? 0.4 : 1,
                transition: "all 200ms ease",
              }}
            >
              <ChevronRight size={18} color="var(--color-rose-taupe)" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full-mobile"
            data-cta="whatsapp"
            data-page="testimonials"
            data-position="bottom"
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
        .testimonials-track::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          background: var(--color-white);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          width: 300px;
        }
        @media (min-width: 640px) {
          .testimonial-card {
            width: 360px;
          }
        }
        @media (min-width: 1024px) {
          .testimonial-card {
            width: 400px;
          }
        }
        .testimonial-nav-btn:hover:not(:disabled) {
          box-shadow: var(--shadow-md);
          background: var(--color-blush-light) !important;
        }
        .testimonial-nav-btn:focus-visible {
          outline: 2px solid var(--color-rose-taupe);
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
