import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE_URL, SEO } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Puro Charme Debutantes & Damas | Aluguel de Vestidos em BH",
  description:
    "Aluguel de vestidos para debutantes e damas em Belo Horizonte. Confecção sob medida e primeiro aluguel. Atendimento personalizado no Edifício Mariana, Centro de BH. Agende sua visita.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Puro Charme Debutantes & Damas | Aluguel de Vestidos em BH",
    description:
      "Aluguel de vestidos para debutantes e damas em Belo Horizonte. Confecção sob medida e primeiro aluguel. Atendimento personalizado no Edifício Mariana, Centro de BH.",
    url: SITE_URL,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "Puro Charme Debutantes & Damas – Vestidos para Festas em Belo Horizonte",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <FinalCTASection />
    </>
  );
}
