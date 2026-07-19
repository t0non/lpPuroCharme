import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/config/siteConfig";
import { GuideLayout } from "../_components/GuideLayout";

const GUIDE = {
  title: "Quanto tempo antes procurar o vestido de debutante?",
  description:
    "O planejamento antecipado garante mais opções, mais calma e a certeza de encontrar o vestido ideal para a festa de 15 anos.",
  url: "/guias/quanto-tempo-antes-alugar-vestido-debutante",
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

export default function GuideQuantoTempoAntes() {
  return (
    <GuideLayout
      {...GUIDE}
      breadcrumbLabel="Quando procurar o vestido"
      whatsappMessage="Olá! Li o guia sobre quando procurar o vestido de debutante no site da Puro Charme e gostaria de agendar uma visita."
    >
      <p>
        Uma das dúvidas mais comuns de quem está planejando a festa de 15 anos
        é: <strong>quando começar a procurar o vestido?</strong> A resposta
        curta é: quanto antes, melhor. E este guia explica o porquê.
      </p>

      <h2>Por que a antecedência importa tanto?</h2>

      <p>
        O vestido de debutante não é uma peça que se escolhe em uma visita
        rápida. Ele envolve prova, decisão, coordenação com os trajes da
        corte e, muitas vezes, múltiplas visitas à loja. Tudo isso exige tempo
        — e a falta de tempo transforma o processo em estresse.
      </p>

      <p>
        Além disso, as lojas de referência em Belo Horizonte costumam ter alta
        demanda em determinados períodos do ano. Quem chega com antecedência
        tem mais opções disponíveis e mais liberdade para escolher sem pressa.
      </p>

      <h2>Qual é o tempo ideal?</h2>

      <p>
        Não existe uma regra universal, mas em geral recomendamos iniciar a
        busca com pelo menos alguns meses de antecedência em relação à data
        do evento. Isso permite:
      </p>

      <ul>
        <li>Fazer mais de uma visita à loja sem pressão de tempo</li>
        <li>Experimentar diferentes estilos e modelos</li>
        <li>Coordenar o vestido da debutante com os das{" "}
          <Link href="/damas-e-daminhas">damas e daminhas</Link>
        </li>
        <li>Definir os{" "}
          <Link href="/ternos-e-pajens">trajes dos pajens</Link> em harmonia com
          o conjunto
        </li>
        <li>
          Verificar disponibilidade para a data do evento com tranquilidade
        </li>
      </ul>

      <p>
        Para períodos de alta demanda — como o segundo semestre do ano, quando
        se concentram muitas formaturas e festas de 15 anos — começar mais
        cedo é ainda mais importante.
      </p>

      <h2>O que acontece quando se deixa para a última hora?</h2>

      <p>
        Deixar para procurar o vestido perto da data do evento pode resultar
        em opções limitadas, atendimento mais corrido e menos tempo para
        fazer a escolha com calma. A experiência de escolher o vestido deve
        ser especial — e uma das formas de garantir isso é não deixar para
        depois.
      </p>

      <h2>Como funciona a visita à Puro Charme?</h2>

      <p>
        Recomendamos que o primeiro contato seja feito pelo WhatsApp para que
        possamos agendar um horário exclusivo para a debutante e a família. Na
        visita, a debutante experimenta os modelos com calma e recebe
        orientação para entender o que combina melhor com o estilo da festa e
        com a sua personalidade.
      </p>

      <p>
        A <Link href="/vestidos-debutantes">Puro Charme</Link> está localizada
        no Edifício Mariana, na Av. Afonso Pena, 526, Sala 916, 9º andar,
        Centro de Belo Horizonte. Para{" "}
        <Link href="/contato">agendar sua visita</Link>, basta entrar em
        contato pelo WhatsApp ou preencher o formulário de contato.
      </p>

      {/* FAQ específica */}
      <section aria-labelledby="faq-tempo-heading">
        <h2 id="faq-tempo-heading">Perguntas frequentes</h2>

        <h3>
          É possível alugar o vestido mesmo se o evento for em poucas semanas?
        </h3>
        <p>
          Depende da disponibilidade. Entre em contato pelo WhatsApp e
          verificamos o que temos disponível para a sua data. Quanto mais
          antecedência, mais opções.
        </p>

        <h3>
          A debutante precisa ir à loja para escolher o vestido?
        </h3>
        <p>
          Sim. A prova é fundamental. Fotos e referências ajudam a entender o
          estilo, mas a decisão final deve ser feita ao experimentar o vestido,
          pois o caimento, o conforto e a sensação que ele transmite fazem toda
          a diferença.
        </p>

        <h3>
          Quantas visitas normalmente são necessárias para escolher?
        </h3>
        <p>
          Algumas debutantes escolhem na primeira visita; outras preferem
          voltar para confirmar. Não há certo ou errado — o importante é que a
          escolha seja feita com segurança e satisfação.
        </p>
      </section>
    </GuideLayout>
  );
}
