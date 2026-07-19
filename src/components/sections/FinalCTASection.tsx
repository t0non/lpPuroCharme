"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppMessage } from "@/lib/utm";

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappKey?: keyof typeof siteConfig.whatsappMessages | string;
}

export function FinalCTASection({
  title = "Pronta para encontrar o traje perfeito?",
  subtitle = "Entre em contato pelo WhatsApp, agende sua visita e venha experimentar com a nossa orientação. Sem pressa, sem pressão — só você e o traje que vai fazer você se sentir pronta para o seu momento.",
  whatsappKey = "default",
}: FinalCTASectionProps) {
  const handleCTA = () => {
    trackEvent("whatsapp_click", {
      label: "final_cta",
      category: "conversion",
    });
    trackEvent("appointment_intent", {
      label: "final_cta",
      category: "conversion",
    });
  };

  const msgs = siteConfig.whatsappMessages as Record<string, string>;
  const message = buildWhatsAppMessage(msgs[whatsappKey] ?? msgs.default);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section
      aria-labelledby="final-cta-heading"
      style={{
        background: "linear-gradient(135deg, var(--color-rose-taupe) 0%, #6B3D48 100%)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Decorativo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(184,149,106,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Ornamento */}
        <div className="divider-ornament" style={{ marginBottom: "1.5rem" }}>
          <span style={{ color: "var(--color-gold-light)", fontSize: "1rem" }}>✦</span>
        </div>

        <h2
          id="final-cta-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#FAF7F4",
            marginBottom: "1.25rem",
            maxWidth: "600px",
            margin: "0 auto 1.25rem",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "rgba(250,247,244,0.75)",
            fontSize: "clamp(0.95rem, 2vw, 1.075rem)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          {subtitle}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCTA}
          id="final-cta-button"
          className="w-full-mobile"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.625rem",
            background: "#25D366",
            color: "#fff",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            fontSize: "1.05rem",
            fontWeight: 600,
            fontFamily: "var(--font-sans)",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)";
          }}
        >
          <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={20} height={20} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          Agendar uma visita pelo WhatsApp
        </a>

        <p
          style={{
            color: "rgba(250,247,244,0.5)",
            fontSize: "0.8rem",
            marginTop: "1.25rem",
            textAlign: "center",
          }}
        >
          {siteConfig.contact.phone} · Seg–Sex: 9h–18h · Sáb: 9h–13h
        </p>
      </div>
    </section>
  );
}
