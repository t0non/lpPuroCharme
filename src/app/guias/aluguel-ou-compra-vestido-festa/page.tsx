import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/config/siteConfig";
import { GuideLayout } from "../_components/GuideLayout";

const GUIDE = {
  title: "Alugar ou comprar vestido de festa: o que considerar",
  description:
    "Uma análise honesta entre as duas opções para ajudar você a tomar a melhor decisão para o seu evento.",
  url: "/guias/aluguel-ou-compra-vestido-festa",
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

export default function GuideAluguelOuCompra() {
  return (
    <GuideLayout
      {...GUIDE}
      breadcrumbLabel="Alugar ou comprar vestido de festa"
      whatsappMessage="Olá! Li o guia sobre alugar ou comprar vestido de festa no site da Puro Charme e gostaria de conhecer as opções disponíveis."
    >
      <p>
        Alugar ou comprar o vestido de festa? Essa é uma das perguntas mais
        frequentes de quem está se preparando para um evento especial. Não
        existe uma resposta única — a melhor escolha depende de cada situação.
        Este guia apresenta os principais pontos a considerar.
      </p>

      <h2>Quando o aluguel faz mais sentido?</h2>

      <p>
        O aluguel de vestido é uma opção inteligente em vários cenários:
      </p>

      <ul>
        <li>
          <strong>Quando o evento é único:</strong> formaturas, casamentos e
          festas de 15 anos acontecem uma vez. Um vestido específico para
          aquele momento pode ser usado por poucas horas e depois guardado
          indefinidamente — ou alugado por uma fração do preço de compra.
        </li>
        <li>
          <strong>Quando o orçamento é um fator:</strong> vestidos de festa de
          qualidade podem ter um custo elevado. O aluguel permite usar uma
          peça impecável sem o investimento total de uma compra.
        </li>
        <li>
          <strong>Quando você não sabe onde guardar:</strong> vestidos longos
          e estruturados exigem espaço e cuidados especiais de armazenamento.
          Com o aluguel, você devolve a peça após o uso.
        </li>
        <li>
          <strong>Quando você quer mais variedade:</strong> em eventos
          diferentes ao longo do tempo, o aluguel permite usar peças
          diferentes — sem acumular vestidos que serão usados apenas uma vez.
        </li>
        <li>
          <strong>Quando o estilo do evento define muito o vestido:</strong>
          um vestido ideal para um casamento ao ar livre pode ser completamente
          diferente do ideal para uma formatura noturna. O aluguel permite
          essa flexibilidade.
        </li>
      </ul>

      <h2>Quando a compra pode fazer mais sentido?</h2>

      <p>
        A compra pode ser mais interessante quando:
      </p>

      <ul>
        <li>
          Você tem um apego emocional especial ao vestido e quer guardá-lo como
          memória — especialmente no caso do vestido de debutante.
        </li>
        <li>
          O vestido pode ser reusado com facilidade em outros eventos
          futuros.
        </li>
        <li>
          Há necessidade de customizações muito específicas que não seriam
          viáveis em uma peça de aluguel.
        </li>
      </ul>

      <h2>O aluguel compromete a qualidade?</h2>

      <p>
        Não necessariamente. Uma boa loja de aluguel mantém suas peças em
        excelente estado de conservação. Na{" "}
        <Link href="/vestidos-de-festa">Puro Charme</Link>, os vestidos são
        mantidos com cuidado e apresentados em condições impecáveis para cada
        locação.
      </p>

      <h2>Experiência de escolha: aluguel vs. compra</h2>

      <p>
        Uma vantagem do aluguel é poder experimentar diferentes modelos,
        marcas e estilos sem compromisso de compra imediata. Isso ajuda a
        entender o que realmente funciona para o seu corpo e para o contexto
        do evento antes de tomar uma decisão.
      </p>

      <p>
        Além dos vestidos de festa, a{" "}
        <Link href="/vestidos-debutantes">Puro Charme</Link> trabalha com
        vestidos para debutantes,{" "}
        <Link href="/damas-e-daminhas">damas e daminhas</Link> e{" "}
        <Link href="/ternos-e-pajens">ternos e trajes para pajens</Link>.
      </p>

      {/* FAQ específica */}
      <section aria-labelledby="faq-aluguel-heading">
        <h2 id="faq-aluguel-heading">Perguntas frequentes sobre aluguel de vestido</h2>

        <h3>Como funciona a locação de vestido de festa?</h3>
        <p>
          Entre em <Link href="/contato">contato com a Puro Charme</Link> pelo
          WhatsApp para entender as condições de locação, prazos e processo de
          retirada e devolução. Não inventamos regras — cada condição é
          explicada com transparência no atendimento.
        </p>

        <h3>Posso experimentar o vestido antes de fechar a locação?</h3>
        <p>
          Sim. Agende uma visita à loja e experimente os modelos disponíveis.
          O atendimento é personalizado e sem pressa.
        </p>

        <h3>O vestido de aluguel pode ser usado em mais de um evento?</h3>
        <p>
          A locação é feita para uma data específica. Para mais eventos,
          consulte as condições diretamente com a loja.
        </p>

        <h3>
          Vale alugar o vestido de debutante ou é melhor comprar?
        </h3>
        <p>
          Depende da importância sentimental que o vestido tem para a
          debutante e a família. Ambas as opções têm vantagens. O que importa
          é que a decisão seja feita com clareza sobre os prós e contras de
          cada caminho.
        </p>
      </section>
    </GuideLayout>
  );
}
