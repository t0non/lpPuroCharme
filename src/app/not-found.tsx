import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-cream)",
        textAlign: "center",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "5rem",
            fontWeight: 600,
            color: "var(--color-rose-light)",
            lineHeight: 1,
            margin: 0,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "var(--color-text-primary)",
          }}
        >
          Página não encontrada
        </h1>
        <p style={{ color: "var(--color-text-secondary)", maxWidth: "380px" }}>
          A página que você está procurando não existe ou foi movida.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <Link href="/contato" className="btn btn-secondary">
            Entrar em contato
          </Link>
        </div>
      </div>
    </section>
  );
}
