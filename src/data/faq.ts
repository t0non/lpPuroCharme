// src/data/faq.ts
// PERGUNTAS FREQUENTES
// Adicione, remova ou edite perguntas aqui

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Preciso agendar para visitar a loja?",
    answer:
      "Recomendamos o agendamento para garantir que você seja atendida com atenção e tempo dedicado. Entre em contato pelo WhatsApp ou telefone e combinamos o melhor horário para você.",
    category: "visita",
  },
  {
    id: "faq-2",
    question: "Posso experimentar os trajes antes de decidir?",
    answer:
      "Sim. Venha à loja e experimente os modelos sem compromisso. Nosso objetivo é ajudar você a encontrar o traje certo — com calma e orientação.",
    category: "visita",
  },
  {
    id: "faq-3",
    question: "Quais tipos de trajes a Puro Charme oferece?",
    answer:
      "Trabalhamos com vestidos para debutantes, damas de honra, daminhas, formandas, madrinhas e vestidos de festa em geral. Também temos ternos e trajes para pajens e eventos sociais masculinos.",
    category: "produtos",
  },
  {
    id: "faq-4",
    question: "Vocês atendem toda a corte da debutante?",
    answer:
      "Sim. Além do vestido da debutante, temos opções para damas de honra, daminhas, pajens e familiares — para que toda a corte esteja harmonizada.",
    category: "produtos",
  },
  {
    id: "faq-5",
    question: "Onde fica a loja?",
    answer:
      "Estamos no Edifício Mariana, Av. Afonso Pena, 526 – Sala 916 (9º andar), Centro de Belo Horizonte/MG. É o endereço de referência de moda festa da cidade.",
    category: "localizacao",
  },
  {
    id: "faq-6",
    question: "Quais são os horários de atendimento?",
    answer:
      "Segunda a sexta-feira, das 9h às 18h. Sábados, das 9h às 13h. Não abrimos aos domingos.",
    category: "horarios",
  },
  {
    id: "faq-7",
    question: "Como funciona a locação?",
    answer:
      "Entre em contato pelo WhatsApp para que possamos explicar todas as condições de locação, prazos e como funciona o processo de retirada e devolução.",
    category: "locacao",
  },
  {
    id: "faq-8",
    question: "Com quanto tempo de antecedência devo agendar?",
    answer:
      "Recomendamos agendar com antecedência para garantir a disponibilidade do modelo desejado, especialmente em períodos de alta demanda como formaturas e festas de 15 anos. Entre em contato e verificamos a disponibilidade para a sua data.",
    category: "locacao",
  },
];
