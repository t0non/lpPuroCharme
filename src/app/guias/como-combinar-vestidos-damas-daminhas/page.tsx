import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/config/siteConfig";
import { GuideLayout } from "../_components/GuideLayout";

const GUIDE = {
  title: "Como combinar vestidos de damas e daminhas com a festa",
  description:
    "Harmonia visual para toda a corte — damas adultas, daminhas infantis e a coordenação com o vestido da debutante ou da noiva.",
  url: "/guias/como-combinar-vestidos-damas-daminhas",
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

export default function GuideCombinarDamasDaminhas() {
  return (
    <GuideLayout
      {...GUIDE}
      breadcrumbLabel="Combinar damas e daminhas"
      whatsappMessage="Olá! Li o guia sobre como combinar vestidos de damas e daminhas no site da Puro Charme e gostaria de agendar uma visita."
    >
      <p>
        A festa de 15 anos — ou o casamento — é um evento coletivo. Enquanto
        a debutante ou a noiva é a protagonista, a corte contribui muito para
        o visual geral da celebração. Vestidos mal combinados podem quebrar a
        harmonia das fotos e do ambiente. Por isso, a escolha das peças para
        damas e daminhas merece atenção especial.
      </p>

      <h2>Comece pelo vestido principal</h2>

      <p>
        A regra mais importante: sempre comece pelo vestido da debutante (ou
        da noiva) antes de escolher os das damas e daminhas. Cor, estilo e
        estética do vestido principal guiam toda a coordenação visual.
      </p>

      <p>
        Tente ter pelo menos uma foto clara do vestido principal — ou, melhor
        ainda, uma amostra do tecido ou da cor — quando for escolher os
        vestidos da corte.
      </p>

      <h2>Harmonia de cores</h2>

      <p>
        Não é necessário que todos usem exatamente a mesma cor. Existem
        diferentes abordagens que funcionam bem:
      </p>

      <ul>
        <li>
          <strong>Monocromático:</strong> todas as damas na mesma cor, com
          pequenas variações de tom ou tecido.
        </li>
        <li>
          <strong>Cores análogas:</strong> tons próximos na paleta de cores,
          criando uma gradação suave e harmoniosa.
        </li>
        <li>
          <strong>Cor de destaque:</strong> uma dama principal (geralmente a
          dama de honra mais próxima) em uma cor diferente das demais, criando
          hierarquia visual.
        </li>
        <li>
          <strong>Tons neutros:</strong> champanhe, nude, off-white e variações
          de branco costumam combinar com quase qualquer cor do vestido
          principal.
        </li>
      </ul>

      <p>
        O que deve ser evitado é uma mistura de cores sem critério que
        fragmenta o visual e tira a coesão das fotos.
      </p>

      <h2>Damas adultas e daminhas infantis: diferenças importantes</h2>

      <p>
        Damas adultas e daminhas infantis têm necessidades bem diferentes na
        escolha do vestido:
      </p>

      <h3>Damas adultas</h3>
      <p>
        Para as damas adultas, o vestido deve ser elegante, mas também
        confortável para horas de evento. Modelagens que funcionam bem para
        diferentes biótipos ajudam a garantir que todas se sintam bem — não
        só a mais parecida com o manequim de referência. Decotes moderados e
        tecidos que não amassam facilmente são pontos práticos importantes.
      </p>

      <h3>Daminhas infantis</h3>
      <p>
        O conforto é ainda mais importante para as crianças. Um vestido muito
        pesado, com saia muito volumosa ou tecidos que coçam pode tornar a
        experiência da daminha desagradável durante o evento. Além disso,
        tecidos de fácil conservação facilitam a vida dos pais.
      </p>

      <h2>Como garantir que tudo combine no dia do evento?</h2>

      <p>
        O caminho mais seguro é escolher todos os vestidos da corte no mesmo
        lugar. Isso facilita a comparação visual, garante acesso ao mesmo
        padrão de qualidade e permite que a equipe da loja ajude na
        coordenação. Na <Link href="/damas-e-daminhas">Puro Charme</Link>,
        atendemos tanto damas adultas quanto daminhas infantis, e nosso
        atendimento inclui orientação para coordenar os trajes com o vestido
        da debutante.
      </p>

      <p>
        Não se esqueça dos{" "}
        <Link href="/ternos-e-pajens">ternos e trajes para pajens</Link>, que
        também devem ser pensados em harmonia com o conjunto.
      </p>

      {/* FAQ específica */}
      <section aria-labelledby="faq-damas-heading">
        <h2 id="faq-damas-heading">Perguntas frequentes sobre damas e daminhas</h2>

        <h3>
          As damas precisam usar exatamente a mesma cor?
        </h3>
        <p>
          Não necessariamente. Variações de tom, diferentes modelagens na
          mesma cor ou uma paleta harmoniosa podem funcionar muito bem.
          O mais importante é que haja um critério visual coerente.
        </p>

        <h3>
          As daminhas podem usar o mesmo estilo que as damas adultas?
        </h3>
        <p>
          Podem manter a mesma paleta de cores, mas o estilo e a modelagem
          devem ser adequados para crianças, priorizando conforto e liberdade
          de movimento.
        </p>

        <h3>
          Com quanto tempo de antecedência devo procurar os vestidos da corte?
        </h3>
        <p>
          Recomendamos iniciar a busca depois de definir o vestido da
          debutante, com bastante antecedência em relação ao evento. Isso
          garante tempo para prova, ajustes de expectativas e coordenação
          visual com tranquilidade.{" "}
          <Link href="/guias/quanto-tempo-antes-alugar-vestido-debutante">
            Saiba mais sobre planejamento de tempo
          </Link>
          .
        </p>

        <h3>
          Onde encontrar vestidos para damas e daminhas no Centro de BH?
        </h3>
        <p>
          A Puro Charme está no Edifício Mariana, Sala 916, 9º andar, Av.
          Afonso Pena, 526, Centro de Belo Horizonte.{" "}
          <Link href="/contato">Agende sua visita</Link> pelo WhatsApp.
        </p>
      </section>
    </GuideLayout>
  );
}
