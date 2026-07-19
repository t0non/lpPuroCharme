"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Image from "next/image";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export function LocationSection() {
  const handleMapClick = () => {
    trackEvent("map_click", { label: "location_section", category: "location" });
  };

  const handleDirectionsClick = () => {
    trackEvent("directions_click", { label: "location_section", category: "location" });
  };

  const handlePhoneClick = () => {
    trackEvent("phone_click", { label: "location_section", category: "location" });
  };

  return (
    <section
      id="contato"
      aria-labelledby="location-heading"
      className="section section-alt"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Localização</span>
          <h2 id="location-heading" className="section-title">
            Venha nos visitar no coração de BH
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Estamos no Edifício Mariana, o polo de moda festa mais tradicional
            de Belo Horizonte.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "stretch",
          }}
          className="location-grid"
        >
          {/* Mapa embed placeholder */}
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              minHeight: "320px",
              background: "var(--color-blush-light)",
              border: "1px solid var(--color-border)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding: "2rem",
            }}
            aria-label="Mapa da localização da Puro Charme"
          >
            <MapPin size={40} color="var(--color-rose-taupe)" />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  color: "var(--color-text-primary)",
                  margin: "0 0 0.375rem",
                }}
              >
                Edifício Mariana
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {siteConfig.address.street}, {siteConfig.address.complement}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  margin: "0.2rem 0 0",
                }}
              >
                {siteConfig.address.neighborhood}, {siteConfig.address.city}/{siteConfig.address.state}
              </p>
            </div>
            <a
              href={siteConfig.contact.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={handleMapClick}
              style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
            >
              <GoogleIcon size={16} />
              Ver no Google Maps
            </a>
          </div>

          {/* Info de contato */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--color-border-subtle)",
              boxShadow: "var(--shadow-sm)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            {/* Endereço */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--color-blush-light)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <MapPin size={18} color="var(--color-rose-taupe)" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Endereço
                </h3>
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.complement}
                  <br />
                  {siteConfig.address.building}
                  <br />
                  {siteConfig.address.neighborhood},{" "}
                  {siteConfig.address.city}/{siteConfig.address.state}
                  <br />
                  CEP: {siteConfig.address.zip}
                </address>
                <a
                  href={siteConfig.contact.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  onClick={handleDirectionsClick}
                  style={{
                    marginTop: "0.875rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  <Navigation size={13} />
                  Como chegar
                </a>
              </div>
            </div>

            {/* Telefone */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--color-blush-light)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <Phone size={18} color="var(--color-rose-taupe)" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Telefone / WhatsApp
                </h3>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  onClick={handlePhoneClick}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--color-rose-taupe)",
                    textDecoration: "none",
                  }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Horários */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--color-blush-light)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <Clock size={18} color="var(--color-rose-taupe)" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Horários de atendimento
                </h3>
                {siteConfig.hours.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1rem",
                      fontSize: "0.875rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {h.day}
                    </span>
                    <span
                      style={{
                        color:
                          h.time === "Fechado"
                            ? "var(--color-text-muted)"
                            : "var(--color-text-primary)",
                        fontWeight: h.time === "Fechado" ? 400 : 500,
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-grid {
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .location-grid {
            gap: 2rem;
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
