"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/vestidos-debutantes", label: "Debutantes" },
  { href: "/damas-e-daminhas", label: "Damas" },
  { href: "/vestidos-de-festa", label: "Festa" },
  { href: "/ternos-e-pajens", label: "Ternos" },
  { href: "/galeria", label: "Galeria" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao pressionar Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePhoneClick = () => {
    trackEvent("phone_click", { label: siteConfig.contact.phone });
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: isScrolled
            ? "rgba(250,247,244,0.95)"
            : "rgba(250,247,244,1)",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid",
          borderColor: isScrolled
            ? "var(--color-border)"
            : "transparent",
          transition: "all 300ms ease",
        }}
      >
        <div className="container">
          <div
            className="header-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Puro Charme – Página inicial"
              style={{ textDecoration: "none", flexShrink: 0 }}
            >
              <Image
                src="/images/logo.png"
                alt="Puro Charme Debutantes & Damas"
                width={200}
                height={50}
                style={{ objectFit: "contain", maxHeight: "50px", width: "auto" }}
                priority
              />
            </Link>

            {/* Navegação desktop */}
            <nav
              aria-label="Navegação principal"
              style={{ display: "flex", gap: "0.125rem" }}
              className="hidden lg:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    padding: "0.5rem 0.6rem",
                    borderRadius: "var(--radius-sm)",
                    transition: "all 150ms ease",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--color-rose-taupe)";
                    (e.target as HTMLElement).style.background =
                      "var(--color-blush-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--color-text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div
              className="hidden lg:flex"
              style={{ alignItems: "center", gap: "0.75rem" }}
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    label: "header_cta",
                    category: "header",
                  })
                }
              >
                <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={16} height={16} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                Agendar visita
              </a>
            </div>

            {/* Botão menu mobile */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="lg:hidden mobile-menu-btn"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: "var(--color-text-primary)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menu de navegação"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 39,
            background: "rgba(44,33,24,0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <nav
            aria-label="Menu mobile"
            style={{
              position: "absolute",
              top: "70px",
              left: 0,
              right: 0,
              background: "var(--color-cream)",
              borderBottom: "1px solid var(--color-border)",
              padding: "1rem 0 1.5rem",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "0.875rem 1.25rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-border-subtle)",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-blush-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              style={{
                padding: "1rem 1.25rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", {
                    label: "mobile_menu_cta",
                    category: "mobile_menu",
                  });
                  setIsOpen(false);
                }}
                className="btn btn-primary"
                style={{ justifyContent: "center" }}
              >
                <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={18} height={18} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                Agendar visita pelo WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .header-inner {
            justify-content: center !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
