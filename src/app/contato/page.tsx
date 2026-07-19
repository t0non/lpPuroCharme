import { Metadata } from "next";
import { SITE_URL } from "@/config/siteConfig";
import { ContatoClientSection } from "./ContatoClientSection";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Agende sua Visita à Puro Charme em BH | Contato",
  description:
    "Entre em contato com a Puro Charme Debutantes & Damas. Agende sua visita pelo WhatsApp, ligue ou preencha o formulário. Edifício Mariana, Sala 916, Centro de Belo Horizonte.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Agende sua Visita à Puro Charme em BH | Contato",
    description:
      "Entre em contato para agendar sua visita à Puro Charme no Edifício Mariana, Centro de Belo Horizonte. Vestidos de debutante, damas, festas e ternos.",
    url: `${SITE_URL}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contato", href: "/contato" }]} />
      <ContatoClientSection />
    </>
  );
}
