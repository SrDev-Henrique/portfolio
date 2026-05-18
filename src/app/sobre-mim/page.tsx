import { About } from "@/components/about/about";
import { ProcessSection } from "@/components/about/process-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { ContactSection } from "@/components/home/contact-section";
import { ServicesShowcase } from "@/components/home/services-showcase";

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
