"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
const navLinks = [
  { href: "#", label: "Início" },
  { href: "#modelos", label: "Modelos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#contato", label: "Contato & Localização" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="footer-container"
      style={{
        background: "var(--color-text-primary)",
        color: "var(--color-text-on-dark)",
      }}
    >
      <div className="container">
        {/* Grid principal */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Coluna 1 — Marca */}
          <div>
            <div style={{ marginBottom: "1.25rem", filter: "brightness(0) invert(1)" }}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Puro Charme Debutantes & Damas"
                  width={220}
                  height={60}
                  style={{ objectFit: "contain", maxHeight: "60px", width: "auto" }}
                />
              </Link>
            </div>
            <p
              style={{
                color: "rgba(250,247,244,0.65)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              {siteConfig.tagline}
            </p>
            <div
              style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}
            >
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Puro Charme"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  background: "rgba(250,247,244,0.1)",
                  borderRadius: "50%",
                  color: "var(--color-text-on-dark)",
                  transition: "background 200ms ease",
                  border: "1px solid rgba(250,247,244,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-rose-taupe)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(250,247,244,0.1)";
                }}
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Menu */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-gold-light)",
                marginBottom: "1rem",
              }}
            >
              Navegação
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(250,247,244,0.75)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--color-rose-light)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(250,247,244,0.75)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-gold-light)",
                marginBottom: "1rem",
              }}
            >
              Contato & Localização
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <MapPin
                  size={16}
                  style={{ color: "var(--color-gold-light)", flexShrink: 0, marginTop: "2px" }}
                />
                <div>
                  <a
                    href={siteConfig.contact.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(250,247,244,0.75)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--color-rose-light)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(250,247,244,0.75)";
                    }}
                  >
                    {siteConfig.address.street}<br />
                    {siteConfig.address.complement}<br />
                    {siteConfig.address.building}<br />
                    {siteConfig.address.neighborhood}, {siteConfig.address.city}/{siteConfig.address.state}
                  </a>
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <Phone size={16} style={{ color: "var(--color-gold-light)", flexShrink: 0 }} />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  style={{
                    color: "rgba(250,247,244,0.75)",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-rose-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(250,247,244,0.75)";
                  }}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <Clock size={16} style={{ color: "var(--color-gold-light)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  {siteConfig.hours.map((h, i) => (
                    <p
                      key={i}
                      style={{
                        color: "rgba(250,247,244,0.65)",
                        fontSize: "0.8rem",
                        margin: "0 0 0.2rem",
                        maxWidth: "none",
                      }}
                    >
                      <span style={{ color: "rgba(250,247,244,0.85)" }}>
                        {h.day}:
                      </span>{" "}
                      {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div
          style={{
            borderTop: "1px solid rgba(250,247,244,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(250,247,244,0.4)", fontSize: "0.8rem", margin: 0, maxWidth: "none" }}>
            © {currentYear} {siteConfig.fullName}. Todos os direitos reservados.
          </p>
          <p style={{ color: "rgba(250,247,244,0.3)", fontSize: "0.75rem", margin: 0, maxWidth: "none" }}>
            {siteConfig.address.full} — CEP {siteConfig.address.zip}
          </p>
        </div>
      </div>

      <style>{`
        .footer-container {
          padding-top: 2.5rem;
          padding-bottom: 2rem;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-container {
            padding-top: 3.5rem;
          }
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
