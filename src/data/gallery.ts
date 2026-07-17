// src/data/gallery.ts
// GALERIA DE MODELOS
// ⚠️ Substituir os placeholders por imagens reais

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
  placeholder?: boolean;
  photoGuide?: string; // Orientação para o fotógrafo
}

// ⚠️ TODOS os itens são placeholders — substitua por imagens reais dos modelos
// Veja o arquivo GUIA-DE-FOTOS.md para orientações de fotografia
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/debutantes.jpg",
    alt: "Vestido de debutante clássico",
    category: "debutantes",
    categoryLabel: "Debutante",
    placeholder: false,
  },
  {
    id: "g2",
    src: "/images/debutantes.jpg",
    alt: "Detalhe do bordado do vestido de debutante",
    category: "debutantes",
    categoryLabel: "Debutante",
    placeholder: false,
  },
  {
    id: "g3",
    src: "/images/Daminhas.jpg",
    alt: "Vestido para dama de honra",
    category: "damas",
    categoryLabel: "Damas",
    placeholder: false,
  },
  {
    id: "g4",
    src: "/images/Daminhas.jpg",
    alt: "Vestido para daminha",
    category: "damas",
    categoryLabel: "Daminhas",
    placeholder: false,
  },
  {
    id: "g5",
    src: "/images/vestidos_festas.jpg",
    alt: "Vestido de festa longo",
    category: "festa",
    categoryLabel: "Festa",
    placeholder: false,
  },
  {
    id: "g6",
    src: "/images/ternos_pagen.jpg",
    alt: "Terno social masculino",
    category: "ternos",
    categoryLabel: "Ternos",
    placeholder: false,
  },
  {
    id: "g7",
    src: "/images/debutantes.jpg",
    alt: "Vestido de debutante com saia volumosa",
    category: "debutantes",
    categoryLabel: "Debutante",
    placeholder: false,
  },
  {
    id: "g8",
    src: "/images/Daminhas.jpg",
    alt: "Conjunto de damas coordenado",
    category: "damas",
    categoryLabel: "Damas",
    placeholder: false,
  },
];

export const galleryCategories = [
  { id: "all", label: "Todos" },
  { id: "debutantes", label: "Debutantes" },
  { id: "damas", label: "Damas & Daminhas" },
  { id: "festa", label: "Festas" },
  { id: "ternos", label: "Ternos" },
];
