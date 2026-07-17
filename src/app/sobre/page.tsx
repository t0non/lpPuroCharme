import { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Sobre a Puro Charme – Loja de Vestidos no Edifício Mariana BH",
  description:
    "Conheça a Puro Charme – loja de aluguel de vestidos e trajes para eventos em BH, localizada no Edifício Mariana, Centro de Belo Horizonte. Atendimento personalizado.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
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
            Conheça a nossa história e entenda por que tantas famílias de Belo
            Horizonte nos escolhem para um dos momentos mais especiais das suas
            vidas.
          </p>
        </div>
      </section>

      <AboutSection />
      <BenefitsSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
