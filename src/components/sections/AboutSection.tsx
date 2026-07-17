import Image from "next/image";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Coluna de imagem */}
          <div
            style={{
              position: "relative",
              height: "420px",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--color-border-subtle)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/store/interior.png"
              alt="Foto do interior da loja Puro Charme no Edifício Mariana"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Coluna de texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <span className="section-label">Quem somos</span>
              <h2
                id="about-heading"
                className="section-title"
                style={{ marginTop: "0.5rem" }}
              >
                Especializadas em fazer você se sentir pronta
              </h2>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              A Puro Charme nasceu no coração de Belo Horizonte com um propósito
              claro: ser a loja onde cada cliente encontra não apenas um vestido,
              mas orientação, cuidado e atenção para um dos momentos mais
              especiais da sua vida.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              Estamos localizadas no{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                Edifício Mariana
              </strong>
              , na Avenida Afonso Pena — o polo de moda festa e nupcial mais
              tradicional da cidade — e atendemos debutantes, damas, daminhas,
              formandas, madrinhas, pajens e todos que precisam de um traje
              especial para eventos importantes.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              Nosso atendimento é presencial e personalizado. Porque acreditamos
              que escolher o traje certo exige tempo, atenção e uma equipe que
              realmente entende o que você está vivendo.
            </p>

            {/* Aviso de placeholder */}
            <div
              style={{
                background: "var(--color-blush-light)",
                border: "1px solid var(--color-blush)",
                borderRadius: "var(--radius-md)",
                padding: "1rem",
                fontSize: "0.8rem",
                color: "var(--color-rose-taupe)",
              }}
            >
              ⚠️ <strong>Pendência:</strong> Solicite à proprietária um texto
              institucional com a história da empresa para substituir os
              parágrafos acima.
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                paddingTop: "0.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--color-rose-taupe)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {siteConfig.rating.score}⭐
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    margin: "0.25rem 0 0",
                  }}
                >
                  no Google
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--color-rose-taupe)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {siteConfig.rating.count}+
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    margin: "0.25rem 0 0",
                  }}
                >
                  avaliações
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--color-rose-taupe)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  4
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    margin: "0.25rem 0 0",
                  }}
                >
                  categorias de trajes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
