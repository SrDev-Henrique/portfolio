import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesShowcase } from "@/components/home/services-showcase";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <HeroSection />
      <AboutSection />
      <ServicesShowcase />
      <ProjectsSection />
    </main>
  );
}
