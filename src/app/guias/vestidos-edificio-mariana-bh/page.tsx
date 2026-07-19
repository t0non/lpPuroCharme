import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, ADDRESS, CONTACT, HOURS } from "@/config/siteConfig";
import { GuideLayout } from "../_components/GuideLayout";

const GUIDE = {
  title: "Como visitar lojas de vestidos no Edifício Mariana em Belo Horizonte",
  description:
    "Informações sobre o Edifício Mariana, como chegar e como organizar uma visita à Puro Charme na Sala 916, 9º andar, Centro de BH.",
  url: "/guias/vestidos-edificio-mariana-bh",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
};

export const metadata: Metadata = {
  title: `${GUIDE.title} | Puro Charme`,
  description: GUIDE.description,
  alternates: { canonical: GUIDE.url },
  openGraph: {
    title: GUIDE.title,
    description: GUIDE.description,
    url: `${SITE_URL}${GUIDE.url}`,
    type: "article",
  },
};

export default function GuideEdificioMariana() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Olá! Li o guia sobre o Edifício Mariana no site da Puro Charme e gostaria de agendar uma visita.")}`;

  return (
    <GuideLayout
      {...GUIDE}
      breadcrumbLabel="Edifício Mariana em BH"
      whatsappMessage="Olá! Li o guia sobre o Edifício Mariana no site da Puro Charme e gostaria de agendar uma visita."
    >
      <p>
        O Edifício Mariana, localizado na Avenida Afonso Pena, no Centro de
        Belo Horizonte, é um dos pontos de referência em moda festa da cidade.
        Este guia é específico sobre a{" "}
        <strong>Puro Charme Debutantes &amp; Damas</strong>, que ocupa a{" "}
        <strong>Sala 916, no 9º andar</strong>.
      </p>

      <p>
        A Puro Charme não representa o Edifício Mariana como um todo — é uma
        loja específica dentro do edifício. Se você estiver procurando por
        outras lojas no local, consulte as informações do próprio edifício.
      </p>

      <h2>Onde fica a Puro Charme dentro do Edifício Mariana?</h2>

      <p>
        Ao entrar no Edifício Mariana pela Av. Afonso Pena, 526, suba pelo
        elevador até o <strong>9º andar</strong> e procure a{" "}
        <strong>Sala 916</strong>. É a localização da Puro Charme Debutantes
        &amp; Damas.
      </p>

      <address
        style={{
          fontStyle: "normal",
          background: "var(--color-blush-light)",
          border: "1px solid var(--color-blush)",
          borderRadius: "var(--radius-md)",
          padding: "1.25rem 1.5rem",
          margin: "1.5rem 0",
          lineHeight: 1.8,
        }}
      >
        <strong>Puro Charme Debutantes &amp; Damas</strong>
        <br />
        {ADDRESS.streetAddress}, {ADDRESS.complement}
        <br />
        {ADDRESS.building}
        <br />
        {ADDRESS.neighborhood}, {ADDRESS.city}/{ADDRESS.state}
        <br />
        CEP {ADDRESS.postalCode}
        <br />
        WhatsApp e telefone:{" "}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          style={{ color: "var(--color-rose-taupe)" }}
        >
          {CONTACT.phone}
        </a>
      </address>

      <h2>Como chegar ao Edifício Mariana</h2>

      <h3>De ônibus ou metrô</h3>
      <p>
        O Edifício Mariana está no Centro de Belo Horizonte, muito bem servido
        pelo transporte público. A Avenida Afonso Pena é uma das principais
        vias da cidade, com linhas de ônibus que passam pelas proximidades.
        Consulte o aplicativo de transporte da BHTRANS para verificar as linhas
        que chegam mais próximo ao endereço.
      </p>

      <h3>De carro</h3>
      <p>
        Há estacionamentos rotativo e privados nas proximidades da Av. Afonso
        Pena. Verifique a sinalização local para as opções disponíveis.
      </p>

      <h3>Por aplicativo</h3>
      <p>
        Aplicativos de transporte são uma opção prática. Use o endereço
        completo: Av. Afonso Pena, 526, Centro, Belo Horizonte. Você pode
        também{" "}
        <a
          href={CONTACT.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          abrir a rota diretamente no Google Maps
        </a>
        .
      </p>

      <h2>Como organizar a visita à Puro Charme</h2>

      <p>
        Para aproveitar melhor o atendimento, recomendamos{" "}
        <strong>agendar a visita com antecedência</strong> pelo WhatsApp. O
        agendamento garante que a equipe estará disponível para dedicar atenção
        exclusiva a você, sem interrupções.
      </p>

      <p>
        Na visita, você pode experimentar os vestidos e trajes com calma,
        receber orientação sobre estilos, cores e modelos adequados para o
        tipo de evento que está planejando.
      </p>

      <h3>Horários de funcionamento</h3>
      <div style={{ margin: "0.75rem 0 1.25rem" }}>
        {HOURS.map((h, i) => (
          <p
            key={i}
            style={{
              margin: "0 0 0.375rem",
              fontSize: "0.95rem",
            }}
          >
            <strong>{h.day}:</strong> {h.time}
          </p>
        ))}
      </div>

      <h2>O que a Puro Charme oferece</h2>

      <p>
        A Puro Charme é especializada em aluguel de vestidos e trajes para
        festas. Os principais serviços incluem:
      </p>

      <ul>
        <li>
          <Link href="/vestidos-debutantes">Vestidos de debutante</Link> —
          para a festa de 15 anos
        </li>
        <li>
          <Link href="/damas-e-daminhas">Vestidos para damas de honra e daminhas</Link>{" "}
          — adultas e infantis
        </li>
        <li>
          <Link href="/vestidos-de-festa">Vestidos de festa</Link> — formaturas,
          casamentos, madrinhas e eventos sociais
        </li>
        <li>
          <Link href="/ternos-e-pajens">Ternos e trajes para pajens</Link> —
          masculinos, para adultos e crianças
        </li>
      </ul>

      <p>
        Para mais informações ou para agendar sua visita,{" "}
        <Link href="/contato">entre em contato</Link> pelo WhatsApp ou acesse
        a{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          conversa direta no WhatsApp
        </a>
        .
      </p>

      {/* FAQ específica */}
      <section aria-labelledby="faq-mariana-heading">
        <h2 id="faq-mariana-heading">Perguntas frequentes sobre a visita</h2>

        <h3>Preciso agendar para visitar a Puro Charme?</h3>
        <p>
          Recomendamos o agendamento para garantir atendimento exclusivo e
          dedicado. Entre em contato pelo WhatsApp antes de vir.
        </p>

        <h3>A Puro Charme está no térreo do Edifício Mariana?</h3>
        <p>
          Não. A Puro Charme fica no <strong>9º andar, Sala 916</strong>. Use
          o elevador do edifício.
        </p>

        <h3>Posso ir sem hora marcada?</h3>
        <p>
          O atendimento sem agendamento pode ser possível dependendo do
          movimento do dia, mas não é garantido. Para ter certeza de
          atendimento dedicado, recomendamos agendar antes.
        </p>

        <h3>
          A Puro Charme representa todas as lojas do Edifício Mariana?
        </h3>
        <p>
          Não. A Puro Charme é uma loja específica, localizada na Sala 916, 9º
          andar. O Edifício Mariana tem outras lojas que operam de forma
          independente.
        </p>
      </section>
    </GuideLayout>
  );
}
