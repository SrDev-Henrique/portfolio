import { AboutSection } from "@/components/home/about-section";
import { BlogSection } from "@/components/home/blog-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <HeroSection />
      <AboutSection />
      <ServicesShowcase />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
    </main>
  );
}
