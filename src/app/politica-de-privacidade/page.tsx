import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade – Puro Charme Debutantes & Damas",
  description:
    "Política de privacidade da Puro Charme Debutantes & Damas. Saiba como tratamos seus dados pessoais.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container" style={{ maxWidth: "720px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            color: "var(--color-rose-taupe)",
            fontSize: "0.875rem",
            marginBottom: "2rem",
            textDecoration: "none",
          }}
        >
          ← Voltar ao início
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--color-text-primary)",
            marginBottom: "2rem",
          }}
        >
          Política de Privacidade
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.8,
          }}
        >
          <p>
            <strong>Última atualização:</strong> Julho de 2025
          </p>

          <section aria-labelledby="pp-coleta">
            <h2
              id="pp-coleta"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              1. Dados coletados
            </h2>
            <p>
              Ao preencher o formulário de contato ou interagir com nosso site,
              podemos coletar: nome, número de WhatsApp, tipo de traje e data do
              evento. Esses dados são usados exclusivamente para responder à sua
              solicitação e entrar em contato pelo WhatsApp.
            </p>
          </section>

          <section aria-labelledby="pp-uso">
            <h2
              id="pp-uso"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              2. Uso dos dados
            </h2>
            <p>
              Suas informações são utilizadas para: responder sua mensagem,
              agendar visitas à loja e melhorar nossa comunicação com você. Não
              compartilhamos seus dados com terceiros sem seu consentimento,
              exceto quando exigido por lei.
            </p>
          </section>

          <section aria-labelledby="pp-cookies">
            <h2
              id="pp-cookies"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              3. Cookies e rastreamento
            </h2>
            <p>
              Este site pode utilizar cookies e ferramentas de análise como
              Google Analytics para entender o comportamento dos visitantes e
              melhorar a experiência. Ao navegar no site, você concorda com o
              uso dessas ferramentas.
            </p>
          </section>

          <section aria-labelledby="pp-direitos">
            <h2
              id="pp-direitos"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              4. Seus direitos
            </h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito
              de acessar, corrigir ou solicitar a exclusão dos seus dados. Para
              exercer esses direitos, entre em contato pelo WhatsApp{" "}
              <strong>(31) 99715-1194</strong>.
            </p>
          </section>

          <section aria-labelledby="pp-contato">
            <h2
              id="pp-contato"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                color: "var(--color-text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              5. Contato
            </h2>
            <p>
              Puro Charme Debutantes & Damas<br />
              Av. Afonso Pena, 526 – Sala 916 – Edifício Mariana<br />
              Centro, Belo Horizonte/MG – CEP 30130-901<br />
              WhatsApp: (31) 99715-1194
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
