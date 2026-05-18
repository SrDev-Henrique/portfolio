import type { Metadata } from "next";
import { About } from "@/components/about/about";
import { ProcessSection } from "@/components/about/process-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { ContactSection } from "@/components/home/contact-section";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  description:
    "Conheça Henrique Albuquerque, desenvolvedor full stack focado em sites, webapps, e-commerce, APIs, performance e SEO.",
  path: "/sobre-mim",
  title: "Sobre mim | Henrique Albuquerque",
  type: "profile",
});

export default function SobreMimPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <About />
      <ServicesShowcase />
      <ProcessSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
