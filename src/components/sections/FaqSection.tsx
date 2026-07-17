"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="section"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Dúvidas frequentes</span>
          <h2 id="faq-heading" className="section-title">
            Perguntas frequentes
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Respondemos as dúvidas mais comuns. Não encontrou o que procura?
            Fale pelo WhatsApp.
          </p>
        </div>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  background: "var(--color-white)",
                  border: "1px solid",
                  borderColor: isOpen ? "var(--color-rose-light)" : "var(--color-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "border-color 200ms ease",
                  boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-button-${item.id}`}
                  onClick={() => toggle(item.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.125rem 1.375rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: isOpen ? "var(--color-rose-taupe)" : "var(--color-text-primary)",
                    transition: "color 200ms ease",
                  }}
                >
                  {item.question}
                  <ChevronDown
                    size={18}
                    style={{
                      flexShrink: 0,
                      color: "var(--color-rose-light)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 300ms ease",
                    }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 350ms ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 1.375rem 1.375rem",
                      borderTop: "1px solid var(--color-border-subtle)",
                      paddingTop: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
