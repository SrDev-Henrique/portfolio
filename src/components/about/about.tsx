import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ProfileVisual } from "../home/profile-visual";
import { Reveal } from "../reveal";

const socialLinks = [
  {
    href: "https://github.com/SrDev-Henrique",
    Icon: Github,
  },
  {
    href: "https://www.instagram.com/hick.slv/",
    Icon: Instagram,
  },
  {
    href: "https://wa.me/5519994012785",
    Icon: MessageCircle,
  },
  {
    href: "mailto:contato@henriquealbuquerque.dev",
    Icon: Mail,
  },
];

export function About() {
  return (
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
            className="mt-9 flex flex-wrap items-center gap-7"
          >
            {socialLinks.map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center font-inter font-semibold text-foreground-muted text-sm transition-colors hover:text-accent"
              >
                <Icon className="size-6" />
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
  );
}
