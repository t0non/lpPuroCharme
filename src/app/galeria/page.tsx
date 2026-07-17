import { Metadata } from "next";
import { GallerySection } from "@/components/sections/GallerySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Galeria de Modelos – Puro Charme Debutantes & Damas",
  description:
    "Conheça os modelos de vestidos e trajes da Puro Charme em Belo Horizonte. Debutantes, damas, formandas, madrinhas e mais. Visite-nos no Edifício Mariana.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="gallery-page-heading"
        style={{
          background: "linear-gradient(135deg, #2C2118 0%, #4A2D35 100%)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.875rem",
            }}
          >
            Galeria
          </span>
          <h1
            id="gallery-page-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FAF7F4",
              marginBottom: "1rem",
            }}
          >
            Nossos modelos
          </h1>
          <p
            style={{
              color: "rgba(250,247,244,0.72)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Conheça nossa seleção de vestidos e trajes para debutantes, damas,
            formandas, madrinhas, pajens e eventos especiais.
          </p>
        </div>
      </section>

      <GallerySection showFilter={true} />
      <FinalCTASection title="Gostou do que viu? Agende sua visita." />
    </>
  );
}
