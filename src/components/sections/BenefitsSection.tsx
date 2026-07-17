"use client";

import Image from "next/image";
import { Star, Tag, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { buildWhatsAppMessage } from "@/lib/utm";

const benefits = [
  {
    icon: Tag,
    title: "O Melhor Custo-Benefício",
    description:
      "Sabemos que na hora de alugar, o preço é fundamental. Na Puro Charme, você não precisa escolher entre preço e qualidade: nós entregamos os dois.",
  },
  {
    icon: MapPin,
    title: "Destaque no Edifício Mariana",
    description:
      "No meio de milhares de lojas, nos destacamos por oferecer vestidos de alto padrão com valores justos e acessíveis. Venha comparar e comprove a diferença.",
  },
  {
    icon: Star,
    title: `${siteConfig.rating.score} no Google`,
    description: "Avaliações que comprovam nossa dedicação em unir qualidade impecável, preço acessível e um atendimento maravilhoso.",
  },
];

export function BenefitsSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    buildWhatsAppMessage(siteConfig.whatsappMessages.default)
  )}`;

  return (
    <section
      aria-labelledby="benefits-heading"
      className="section"
      style={{
        position: "relative",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/centeo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label" style={{ color: "var(--color-gold-light)", background: "rgba(245, 158, 11, 0.15)", border: "none" }}>Por que nos escolher</span>
          <h2 id="benefits-heading" className="section-title" style={{ color: "#ffffff" }}>
            Por que escolher a Puro Charme?
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center", color: "rgba(255, 255, 255, 0.85)" }}
          >
            No Edifício Mariana, oferecemos o que você mais procura: a união perfeita entre vestidos deslumbrantes e preços acessíveis.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid-benefits">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--color-blush-light)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={22} color="var(--color-rose-taupe)" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.125rem",
                      color: "var(--color-text-primary)",
                      marginBottom: benefit.title.includes("Google") ? "0.25rem" : "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem"
                    }}
                  >
                    {benefit.title.includes("Google") && (
                      <GoogleIcon size={18} />
                    )}
                    {benefit.title}
                  </h3>
                  {benefit.title.includes("Google") && (
                    <div style={{ display: "flex", gap: "2px", marginBottom: "0.5rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                  )}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "3rem", position: "relative", zIndex: 1 }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
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
    </section>
  );
}
