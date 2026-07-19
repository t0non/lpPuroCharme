import { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE_URL, SITE_FULL_NAME, ADDRESS, CONTACT, HOURS } from "@/config/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Puro Charme no Edifício Mariana em BH | Sobre",
  description:
    "Conheça a Puro Charme Debutantes & Damas — loja especializada em aluguel de vestidos e trajes para festas, localizada no Edifício Mariana, 9º andar, Sala 916, Centro de Belo Horizonte.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Puro Charme no Edifício Mariana em BH | Sobre",
    description:
      "Loja especializada em aluguel de vestidos para debutantes, damas, daminhas, madrinhas e ternos para pajens. Atendimento personalizado no Centro de BH.",
    url: `${SITE_URL}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Sobre", href: "/sobre" }]} />

      {/* Hero */}
      <section
        aria-labelledby="sobre-heading"
        style={{
          background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <h1
            id="sobre-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FAF7F4",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Sobre a Puro Charme
          </h1>
          <p
            style={{
              color: "rgba(250,247,244,0.72)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Uma loja especializada em vestidos e trajes para festas,
            localizada no coração de Belo Horizonte, dentro do Edifício Mariana.
          </p>
        </div>
      </section>

      {/* Conteúdo principal sobre a empresa */}
      <section
        aria-labelledby="sobre-empresa-heading"
        className="section"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            id="sobre-empresa-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            O que é a Puro Charme
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            <p>
              A <strong>Puro Charme Debutantes &amp; Damas</strong> é uma loja
              especializada em aluguel de vestidos e trajes para festas em Belo
              Horizonte. Trabalhamos com peças para os principais momentos da
              vida social — da festa de 15 anos ao casamento, da formatura ao
              evento de gala.
            </p>

            <p>
              Nosso atendimento é personalizado e sem pressa. Entendemos que
              escolher um vestido é uma decisão importante, e por isso dedicamos
              tempo e atenção para ajudar cada cliente a encontrar o traje certo
              para o seu momento.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Para quais ocasiões atendemos
            </h3>

            <p>
              Oferecemos trajes para uma ampla variedade de eventos formais e
              semiformais:
            </p>

            <ul
              style={{
                paddingLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>Festas de 15 anos — vestidos para a debutante e toda a corte</li>
              <li>Damas de honra adultas e daminhas infantis</li>
              <li>Vestidos de festa para formaturas e colações de grau</li>
              <li>Madrinhas de casamento</li>
              <li>Vestidos para convidadas e anfitriãs de eventos</li>
              <li>Ternos sociais para adultos</li>
              <li>Trajes completos para pajens</li>
            </ul>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Como funciona o atendimento
            </h3>

            <p>
              Recomendamos que o primeiro contato seja feito pelo WhatsApp para
              que possamos entender o tipo de traje, a data do evento e o
              melhor horário para recebê-la. Na visita, você experimenta os
              modelos com calma, recebe orientação sobre estilo e verificamos
              juntos o que combina melhor com a proposta do seu evento.
            </p>

            <p>
              Para a corte da debutante — damas, daminhas, pajens e familiares
              — recomendamos que o planejamento comece com antecedência, pois a
              coordenação de peças leva mais tempo e garante uma harmonia visual
              que faz toda a diferença no dia do evento.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Nossa localização
            </h3>

            <p>
              Estamos no <strong>Edifício Mariana</strong>, um dos endereços de
              referência de moda festa no Centro de Belo Horizonte. Nos
              encontre na{" "}
              <address style={{ display: "inline", fontStyle: "normal" }}>
                <strong>{ADDRESS.streetAddress}</strong>, Sala 916, 9º andar,
                Centro, Belo Horizonte/MG.
              </address>
            </p>

            <p>
              O Edifício Mariana é de fácil acesso pelo transporte público,
              estando próximo às principais linhas de ônibus do Centro. Para
              quem vem de carro, há estacionamentos nas redondezas da Avenida
              Afonso Pena.
            </p>
          </div>

          {/* Horários e contato em destaque */}
          <div
            style={{
              background: "var(--color-white)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem 2rem",
              marginTop: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.125rem",
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              Horários e contato
            </h3>
            <div>
              {HOURS.map((h, i) => (
                <p
                  key={i}
                  style={{
                    margin: "0 0 0.375rem",
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <strong>{h.day}:</strong>{" "}
                  <span
                    style={{
                      color:
                        h.time === "Fechado"
                          ? "var(--color-text-muted)"
                          : "inherit",
                    }}
                  >
                    {h.time}
                  </span>
                </p>
              ))}
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", margin: 0 }}>
              <strong>WhatsApp e telefone:</strong>{" "}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                style={{ color: "var(--color-rose-taupe)", textDecoration: "none" }}
              >
                {CONTACT.phone}
              </a>
            </p>
            <Link
              href="/contato"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              Agendar uma visita
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
      <BenefitsSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
