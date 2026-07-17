"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppMessage } from "@/lib/utm";

export function WhatsAppFloatingButton() {
  const handleClick = () => {
    trackEvent("whatsapp_floating_click", {
      label: "floating_button",
      category: "whatsapp",
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  const message = buildWhatsAppMessage(siteConfig.whatsappMessages.default);
  const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Abrir conversa no WhatsApp — Puro Charme"
      title="Falar pelo WhatsApp"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", transition: "transform 0.2s ease" }} className="wa-icon-wrapper">
        <Image
          src="/images/icon_whatsapp.png"
          alt="WhatsApp"
          fill
          style={{ objectFit: "contain" }}
          sizes="60px"
        />
      </div>
    </a>
  );
}
