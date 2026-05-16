import { Github, Linkedin, Mail } from "lucide-react";
import { ProfileVisual } from "@/components/home/profile-visual";
import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

const stats = [
  { value: "2+", label: "anos criando produtos digitais" },
  { value: "Web", label: "sites, apps e e-commerce" },
  { value: "Fullstack", label: "da ideia ao deploy" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden px-5 py-8 pt-14 text-foreground sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center gap-12 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-4xl pt-10 lg:pt-0">
          <Reveal
            as="div"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-accent text-sm backdrop-blur"
          >
            <span className="size-2 rounded-full bg-accent shadow-[0_0_18px_rgb(var(--accent-rgb)/0.9)]" />
            DESENVOLVEDOR FULL STACK
          </Reveal>

          <Reveal
            as="h1"
            delay={0.08}
            distance={32}
            className="max-w-4xl font-semibold text-5xl leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl"
          >
            <span className="block text-balance text-foreground">
              Websites, webapps e e-commerce
            </span>
            <span className="mt-2 block text-balance text-accent">
              que geram resultados.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={0.16}
            className="mt-6 max-w-2xl text-foreground-muted text-lg leading-8 sm:text-xl"
          >
            Desenvolvo soluções completas, modernas e escaláveis do zero ao
            deploy. Foco em performance, experiência do usuário e código limpo
            para impulsionar seu negócio online.
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PortfolioButton
              href="mailto:contato@henriquealbuquerque.dev"
              size="sm"
              variant="primary"
            >
              Começar projeto
            </PortfolioButton>
            <PortfolioButton href="#projetos" size="sm" variant="outline">
              Ver trabalhos
            </PortfolioButton>
          </Reveal>

          <Reveal
            delay={0.32}
            className="mt-10 grid gap-4 border-border border-y py-6 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={0.38}
                distance={14}
                staggerIndex={index}
                className="text-center"
              >
                <strong className="block font-semibold text-2xl text-accent">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-muted-foreground text-sm leading-5">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </Reveal>

          <Reveal
            delay={0.48}
            className="mt-6 flex justify-center gap-2 sm:justify-start"
          >
            <SocialLink href="https://github.com/" label="GitHub">
              <Github className="size-4" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/" label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink
              href="mailto:contato@henriquealbuquerque.dev"
              label="E-mail"
            >
              <Mail className="size-4" />
            </SocialLink>
          </Reveal>
        </div>

        <Reveal delay={0.18} direction="left" distance={36}>
          <ProfileVisual variant="message" text="DEV" />
        </Reveal>
      </div>
    </section>
  );
}

function SocialLink({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-border bg-foreground/5 text-foreground-muted transition hover:border-accent/60 hover:text-accent-hover"
    >
      {children}
    </Link>
  );
}
