// src/data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date?: string;
  source: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Clarice Pereira",
    avatar: "/images/clarice_pereira.png",
    rating: 5,
    text: "Atendimento de excelência, super indico de olhos fechados...",
    source: "Google",
    verified: true,
  },
  {
    id: "t2",
    name: "Luara & Eluma Carvalho",
    avatar: "/images/Luara & Elumaarva Carvalho.png",
    rating: 5,
    text: "Eu amei o vestido da minha filha ficou maravilhoso obrigado por proporcionar esse momento para a minha menina Deus abençoe suas mãos de fada",
    source: "Google",
    verified: true,
  },
  {
    id: "t3",
    name: "Flávia Pinal",
    avatar: "/images/Flávia Pinal.png",
    rating: 5,
    text: "Vestidos confortáveis, bonitos e práticos.Adorei.... Se for procurar qualidade ,preço e conforto, podem contar com a loja...",
    source: "Google",
    verified: true,
  },
  {
    id: "t4",
    name: "Junia Cristina",
    avatar: "/images/Junia Cristina.png",
    rating: 5,
    text: "Vestidos maravilhosos, a proprietária é muito solícita e amigável.",
    source: "Google",
    verified: true,
  },
  {
    id: "t5",
    name: "Alayde Campolino",
    avatar: "/images/Alayde Campolino.png",
    rating: 5,
    text: "Fui super bem atendida pela Adeni da PURO CHARME DEBUTANTES & DAMAS,muito educada e prestativa",
    source: "Google",
    verified: true,
  },
  {
    id: "t6",
    name: "Denise Porto",
    avatar: "/images/Denise_Porto.png",
    rating: 5,
    text: "Excelente atendimento, os vestidos mais lindos estão aqui, qualidade e beleza 😍😘",
    source: "Google",
    verified: true,
  },
];

export const ratingData = {
  score: 5.0,
  count: 40,
  source: "Google",
  profileUrl: "https://share.google/6bQNr86UocznAPBKM",
};
