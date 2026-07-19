import Image from "next/image";
import { siteConfig } from "@/data/site";

const steps = [
  {
    number: "01",
    title: "WhatsApp e Agendamento",
    description:
      "Fale com nossa equipe pelo WhatsApp, tire suas dúvidas e marque o melhor horário para nos visitar.",
  },
  {
    number: "02",
    title: "Atendimento na Loja",
    description:
      "Venha ao Edifício Mariana. Você terá um atendimento exclusivo para experimentar com calma e escolher o vestido perfeito.",
  },
  {
    number: "03",
    title: "O Seu Evento",
    description:
      "Retire o seu traje na data combinada e aproveite o seu momento especial com elegância e segurança.",
  },
];

export function HowItWorksSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`;

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      style={{
        background:
          "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Padrão decorativo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 10% 80%, rgba(139,94,107,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.75rem",
            }}
          >
            Como funciona
          </span>
          <h2
            id="how-it-works-heading"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#FAF7F4",
              fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
              marginBottom: "0.75rem",
            }}
          >
            Simples assim — do primeiro contato ao evento
          </h2>
          <p
            style={{
              color: "rgba(250,247,244,0.65)",
              fontSize: "1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Em três passos rápidos, você encontra o traje certo e chega ao seu evento
            com segurança e elegância.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                background: "rgba(250,247,244,0.05)",
                border: "1px solid rgba(250,247,244,0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: "48px",
                  height: "48px",
                  background:
                    "linear-gradient(135deg, var(--color-rose-taupe), var(--color-rose-mid))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FAF7F4",
                  boxShadow: "0 4px 12px rgba(139,94,107,0.3)",
                }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    color: "#FAF7F4",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "rgba(250,247,244,0.65)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full-mobile"
          >
            <Image src="/images/whatsapp-icone.png" alt="WhatsApp" width={20} height={20} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
            Começar pelo WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
