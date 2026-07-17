// src/data/categories.ts
// CATEGORIAS DE PRODUTOS
// Adicione, remova ou edite categorias aqui

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage: string;
  cardImageAlt: string;
  whatsappKey: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    id: "debutantes",
    slug: "vestidos-debutantes",
    name: "Vestidos de Debutante",
    shortName: "Debutantes",
    headline: "Para o dia que ela sempre sonhou",
    description:
      "Vestidos para os 15 anos — do clássico ao contemporâneo, com atendimento dedicado para a debutante e a família.",
    longDescription:
      "O vestido de debutante é muito mais do que uma roupa — é parte da memória de um dos dias mais marcantes da vida de uma jovem. Na Puro Charme, você encontra modelos que combinam elegância, personalidade e conforto, com atendimento personalizado para ajudar a debutante e a família a fazerem a escolha certa.\n\nNosso catálogo inclui opções clássicas e contemporâneas, em diferentes cores e estilos, para que cada debutante encontre o traje que representa quem ela é.",
    heroImage: "/images/debutantes.jpg",
    heroImageAlt:
      "Debutante usando vestido elegante em ambiente sofisticado",
    cardImage: "/images/debutantes.jpg",
    cardImageAlt:
      "Vestido de debutante em destaque",
    whatsappKey: "debutantes",
    features: [
      "Modelos clássicos e contemporâneos",
      "Diferentes cores e estilos",
      "Atendimento personalizado para a debutante e a família",
      "Opções para diferentes biotipologias",
    ],
    metaTitle: "Vestidos de Debutante em BH – Aluguel na Puro Charme",
    metaDescription:
      "Encontre o vestido de debutante ideal em Belo Horizonte. A Puro Charme oferece modelos para os 15 anos com atendimento dedicado. Edifício Mariana, Centro BH.",
    keywords: [
      "vestido de debutante BH",
      "aluguel vestido 15 anos Belo Horizonte",
      "vestido debutante centro BH",
      "loja vestido debutante BH",
    ],
  },
  {
    id: "damas",
    slug: "damas-e-daminhas",
    name: "Damas e Daminhas",
    shortName: "Damas",
    headline: "A corte completa merece atenção especial",
    description:
      "Opções elegantes para damas de honra e daminhas, coordenadas com o vestido da debutante ou da noiva.",
    longDescription:
      "A festa de 15 anos ou o casamento é um evento coletivo — e a corte merece tanta atenção quanto a protagonista. Na Puro Charme, você encontra vestidos para damas de honra e daminhas que completam o visual do evento com harmonia e elegância.\n\nNosso atendimento ajuda a coordenar as opções para que toda a corte esteja alinhada, do vestido da debutante ao da menor daminha.",
    heroImage: "/images/Daminhas.jpg",
    heroImageAlt:
      "Damas de honra usando vestidos elegantes",
    cardImage: "/images/Daminhas.jpg",
    cardImageAlt: "Vestido para dama de honra",
    whatsappKey: "damas",
    features: [
      "Vestidos para damas de honra adultas",
      "Vestidos para daminhas infantis",
      "Coordenação visual com o vestido principal",
      "Diferentes tamanhos e cores",
    ],
    metaTitle: "Vestidos para Damas e Daminhas em BH – Puro Charme",
    metaDescription:
      "Opções elegantes para damas de honra e daminhas em Belo Horizonte. A Puro Charme cuida da corte completa. Visite-nos no Edifício Mariana.",
    keywords: [
      "vestido dama honra BH",
      "vestido daminha BH",
      "dama debutante Belo Horizonte",
      "daminha vestido aluguel BH",
    ],
  },
  {
    id: "festa",
    slug: "vestidos-de-festa",
    name: "Vestidos de Festa",
    shortName: "Festas",
    headline: "Para cada evento, o vestido certo",
    description:
      "Formaturas, casamentos, confraternizações — vestidos de festa para você brilhar em qualquer ocasião.",
    longDescription:
      "Seja uma formatura, um casamento, uma confraternização importante ou qualquer evento que peça elegância — a Puro Charme tem o vestido de festa certo para você. Com variedade de modelos, cores e estilos, você encontra a opção que combina com o seu momento sem precisar comprar.\n\nO aluguel é a escolha inteligente: você usa um modelo impecável por uma fração do preço e não precisa preocupar com onde guardar depois.",
    heroImage: "/images/vestidos_festas.jpg",
    heroImageAlt:
      "Mulher usando vestido de festa elegante",
    cardImage: "/images/vestidos_festas.jpg",
    cardImageAlt: "Vestido de festa longo",
    whatsappKey: "festa",
    features: [
      "Vestidos para formaturas",
      "Vestidos para madrinhas",
      "Vestidos para convidadas VIP",
      "Opções para diferentes estilos de eventos",
    ],
    metaTitle: "Aluguel de Vestidos de Festa em Belo Horizonte – Puro Charme",
    metaDescription:
      "Aluguel de vestidos de festa em BH para formaturas, casamentos e eventos. Variedade de modelos com atendimento personalizado no Centro de Belo Horizonte.",
    keywords: [
      "aluguel vestido festa BH",
      "vestido formatura BH",
      "vestido madrinha Belo Horizonte",
      "loja vestido festa centro BH",
    ],
  },
  {
    id: "ternos",
    slug: "ternos-e-pajens",
    name: "Ternos e Pajens",
    shortName: "Ternos",
    headline: "Os homens da corte também merecem atenção",
    description:
      "Ternos sociais e trajes para pajens com modelagem impecável para eventos formais.",
    longDescription:
      "O visual do evento é um conjunto — e os homens da corte merecem tanta atenção quanto as mulheres. Na Puro Charme, você encontra ternos sociais e trajes para pajens que combinam elegância e conforto para eventos formais.\n\nNosso atendimento especializado garante que o traje masculino esteja na medida certa e em harmonia com o visual geral do evento.",
    heroImage: "/images/ternos_pagen.jpg",
    heroImageAlt:
      "Terno social masculino em evento formal",
    cardImage: "/images/ternos_pagen.jpg",
    cardImageAlt:
      "Terno masculino elegante",
    whatsappKey: "ternos",
    features: [
      "Ternos sociais para adultos",
      "Trajes completos para pajens",
      "Coordenação com o visual feminino do evento",
      "Diferentes tamanhos e cores",
    ],
    metaTitle: "Aluguel de Terno e Trajes para Pajens em BH – Puro Charme",
    metaDescription:
      "Aluguel de ternos e trajes para pajens em Belo Horizonte. A Puro Charme veste os homens da corte com elegância e qualidade. Edifício Mariana, BH.",
    keywords: [
      "aluguel terno BH",
      "terno pajem Belo Horizonte",
      "roupa pajem BH",
      "aluguel terno evento social BH",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
