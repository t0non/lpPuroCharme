import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE_URL, SEO } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Aluguel de Vestidos para Debutantes e Festas em BH | Puro Charme",
  description:
    "Aluguel de vestidos de debutante, damas, daminhas, formandas e madrinhas em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH. Agende sua visita.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aluguel de Vestidos para Debutantes e Festas em BH | Puro Charme",
    description:
      "Aluguel de vestidos de debutante, damas, daminhas, formandas e madrinhas em Belo Horizonte. Atendimento personalizado no Edifício Mariana, Centro de BH.",
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
      <CategoriesSection />
      <HowItWorksSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <FinalCTASection />
    </>
  );
}
