import Image from "next/image";
import { siteConfig } from "@/data/site";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

export function AboutSection() {
  return (
    <section
      id="sobre"
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
              A Puro Charme Debutantes & Damas é uma loja especializada no aluguel
              de vestidos para celebrações especiais. Atendemos debutantes,
              damas e clientes que procuram o modelo ideal para o seu evento
              no coração de Belo Horizonte.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              Também confeccionamos vestidos sob medida para debutantes e damas na
              modalidade primeiro aluguel, criando modelos pensados para as
              medidas, preferências e características de cada cliente.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              Nosso atendimento é próximo e especializado, ajudando cada pessoa
              a se sentir segura, elegante e pronta para viver um momento
              inesquecível.
            </p>


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
                <div style={{ display: 'flex', alignItems: 'center', height: '2rem' }}>
                  <GoogleIcon size={28} />
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--color-rose-taupe)",
                    margin: "0.25rem 0 0",
                  }}
                >
                  Mais bem avaliado
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    margin: "0",
                  }}
                >
                  na região Centro
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
