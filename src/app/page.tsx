import { AboutSection } from "@/components/home/about-section";
import { BlogSection } from "@/components/home/blog-section";
import { ContactSection } from "@/components/home/contact-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteFloatingHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteFloatingHeader availabilityLabel="Disponível" />
      <HeroSection />
      <AboutSection />
      <ServicesShowcase />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
