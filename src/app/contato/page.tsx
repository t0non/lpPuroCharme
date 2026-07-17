"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    type: "",
    date: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Por favor, informe seu nome.";
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10)
      e.whatsapp = "Informe um WhatsApp válido com DDD.";
    if (!formData.consent)
      e.consent = "Você precisa aceitar a política de privacidade.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    trackEvent("contact_form_submit", {
      label: "contact_page",
      category: "conversion",
    });
    trackEvent("appointment_intent", {
      label: "contact_form",
      category: "conversion",
    });

    // Converte o formulário em mensagem de WhatsApp
    const msg = [
      `Olá! Preenchi o formulário do site da Puro Charme.`,
      `Nome: ${formData.name}`,
      formData.type ? `Tipo de traje: ${formData.type}` : "",
      formData.date ? `Data do evento: ${formData.date}` : "",
      formData.message ? `Mensagem: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  const handleFormStart = () => {
    if (status === "idle") {
      trackEvent("contact_form_start", {
        label: "contact_page",
        category: "engagement",
      });
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.contato)}`;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-heading"
        style={{
          background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <h1
            id="contact-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FAF7F4",
              marginBottom: "1rem",
            }}
          >
            Entre em contato
          </h1>
          <p
            style={{
              color: "rgba(250,247,244,0.72)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            Agende sua visita, tire dúvidas ou preencha o formulário abaixo. Respondemos sempre pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section" style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="contact-grid"
          >
            {/* Formulário */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.625rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "1.75rem",
                }}
              >
                Enviar uma mensagem
              </h2>

              {status === "success" ? (
                <div
                  role="alert"
                  style={{
                    background: "#d1fae5",
                    border: "1px solid #6ee7b7",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem",
                    color: "#065f46",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    ✅ Obrigada! Abrimos o WhatsApp com sua mensagem. Se não
                    abriu automaticamente, entre em contato pelo número{" "}
                    {siteConfig.contact.phone}.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato"
                  style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                >
                  {/* Nome */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Seu nome <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      aria-invalid={!!errors.name}
                      className="form-input"
                      placeholder="Como podemos te chamar?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={handleFormStart}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="form-error" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="form-group">
                    <label htmlFor="contact-whatsapp" className="form-label">
                      Seu WhatsApp com DDD <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      name="whatsapp"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      aria-describedby={errors.whatsapp ? "contact-whatsapp-error" : undefined}
                      aria-invalid={!!errors.whatsapp}
                      className="form-input"
                      placeholder="(31) 9 9999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                    {errors.whatsapp && (
                      <p id="contact-whatsapp-error" className="form-error" role="alert">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  {/* Tipo de traje */}
                  <div className="form-group">
                    <label htmlFor="contact-type" className="form-label">
                      Tipo de traje
                    </label>
                    <select
                      id="contact-type"
                      name="type"
                      className="form-select"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="">Selecione (opcional)</option>
                      <option value="Vestido de debutante">Vestido de debutante</option>
                      <option value="Dama de honra">Dama de honra</option>
                      <option value="Daminha">Daminha</option>
                      <option value="Vestido de festa">Vestido de festa</option>
                      <option value="Terno ou pajem">Terno ou pajem</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  {/* Data do evento */}
                  <div className="form-group">
                    <label htmlFor="contact-date" className="form-label">
                      Data aproximada do evento
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      placeholder="Conte um pouco mais sobre o que você precisa..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  {/* Consentimento */}
                  <div className="form-group">
                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      <input
                        type="checkbox"
                        aria-required="true"
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                        aria-invalid={!!errors.consent}
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        style={{ marginTop: "3px", accentColor: "var(--color-rose-taupe)", flexShrink: 0 }}
                      />
                      Concordo com a{" "}
                      <Link href="/politica-de-privacidade" style={{ color: "var(--color-rose-taupe)" }}>
                        Política de Privacidade
                      </Link>{" "}
                      e autorizo o contato pelo WhatsApp.
                    </label>
                    {errors.consent && (
                      <p id="consent-error" className="form-error" role="alert">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={status === "loading"}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    aria-disabled={status === "loading"}
                  >
                    {status === "loading" ? "Enviando..." : (
                      <>
                        <MessageCircle size={18} />
                        Enviar pelo WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info de contato */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.625rem",
                    color: "var(--color-text-primary)",
                    marginBottom: "1.75rem",
                  }}
                >
                  Ou fale diretamente
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { label: "contact_page", category: "contact" })}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "var(--color-white)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.25rem",
                      textDecoration: "none",
                      transition: "box-shadow 200ms ease",
                      boxShadow: "var(--shadow-sm)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <div style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MessageCircle size={22} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: 0, fontSize: "0.95rem" }}>WhatsApp</p>
                      <p style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "0.875rem" }}>{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  {/* Telefone */}
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    onClick={() => trackEvent("phone_click", { label: "contact_page", category: "contact" })}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "var(--color-white)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.25rem",
                      textDecoration: "none",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ width: 44, height: 44, background: "var(--color-blush-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={20} color="var(--color-rose-taupe)" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: 0, fontSize: "0.95rem" }}>Ligar</p>
                      <p style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "0.875rem" }}>{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("instagram_click", { label: "contact_page", category: "contact" })}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "var(--color-white)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.25rem",
                      textDecoration: "none",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ExternalLink size={20} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: 0, fontSize: "0.95rem" }}>Instagram</p>
                      <p style={{ color: "var(--color-text-secondary)", margin: 0, fontSize: "0.875rem" }}>{siteConfig.contact.instagramHandle}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div
                style={{
                  background: "var(--color-cream-dark)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <MapPin size={18} color="var(--color-rose-taupe)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 0.375rem", fontSize: "0.95rem" }}>
                      {siteConfig.address.building}
                    </p>
                    <address style={{ fontStyle: "normal", fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {siteConfig.address.street}, {siteConfig.address.complement}<br />
                      {siteConfig.address.neighborhood}, {siteConfig.address.city}/{siteConfig.address.state}
                    </address>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <Clock size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    {siteConfig.hours.map((h, i) => (
                      <p key={i} style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "0 0 0.2rem" }}>
                        <strong style={{ color: "var(--color-text-secondary)" }}>{h.day}:</strong> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
