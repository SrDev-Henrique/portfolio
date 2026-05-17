import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ProfileVisual } from "@/components/home/profile-visual";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { Reveal } from "@/components/reveal";

const socialLinks = [
  {
    href: "https://github.com/SrDev-Henrique",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.instagram.com/hick.slv/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://wa.me/5519994012785",
    label: "WhatsApp",
    Icon: MessageCircle,
  },
  {
    href: "mailto:halbuquerque2850@gmail.com",
    label: "E-mail",
    Icon: Mail,
  },
];

export default function SobreMimPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-5 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-44 lg:pb-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
                Sobre mim
              </p>
            </Reveal>

            <Reveal
              as="h1"
              delay={0.08}
              className="max-w-4xl font-semibold text-6xl leading-none tracking-normal sm:text-8xl lg:text-9xl"
            >
              SOBRE MIM
            </Reveal>

            <Reveal
              as="h2"
              delay={0.12}
              className="mt-4 max-w-3xl font-semibold text-4xl text-accent leading-none tracking-normal sm:text-5xl lg:text-6xl"
            >
              Henrique Albuquerque
            </Reveal>

            <Reveal
              as="p"
              delay={0.18}
              className="mt-6 max-w-3xl font-inter text-foreground-muted text-lg leading-8 sm:text-xl"
            >
              Sou Henrique Albuquerque, desenvolvedor full stack. Trabalho da
              estratégia ao deploy para transformar ideias em sites, sistemas e
              experiências digitais que comunicam bem, funcionam com solidez e
              estão prontas para crescer.
            </Reveal>

            <Reveal
              delay={0.26}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {socialLinks.map(({ href, Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-2.5 font-inter font-semibold text-foreground-muted text-sm transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.18} direction="left" distance={36}>
            <ProfileVisual
              variant="caption"
              text="DEV"
              className="max-w-100 lg:mr-0"
            />
          </Reveal>
        </div>
      </section>

      <ServicesShowcase />
    </main>
  );
}
