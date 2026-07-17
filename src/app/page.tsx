import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AboutSection />
      <LocationSection />
      <FaqSection />
      <FinalCTASection />
    </>
  );
}
