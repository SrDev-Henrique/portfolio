import { Github, Linkedin, Mail } from "lucide-react";
import { ProfileVisual } from "@/components/home/profile-visual";
import { PortfolioButton } from "@/components/portfolio-button";

const stats = [
  { value: "2+", label: "anos criando produtos digitais" },
  { value: "Web", label: "sites, apps e e-commerce" },
  { value: "Fullstack", label: "da ideia ao deploy" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-8 text-zinc-50 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center gap-12 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-4xl pt-10 lg:pt-0">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-lime-300 text-sm backdrop-blur">
            <span className="size-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(201,255,63,0.9)]" />
            DESENVOLVEDOR FULL STACK
          </p>

          <h1 className="max-w-4xl font-semibold text-5xl leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            <span className="block text-balance text-zinc-50">
              Websites, webapps e e-commerce
            </span>
            <span className="mt-2 block text-balance text-lime-300">
              que geram resultados.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300 leading-8 sm:text-xl">
            Desenvolvo solucoes completas, modernas e escalaveis do zero ao
            deploy. Foco em performance, experiencia do usuario e codigo limpo
            para impulsionar seu negocio online.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
          </div>

          <div className="mt-10 grid gap-4 border-white/10 border-y py-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <strong className="block font-semibold text-2xl text-lime-300">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-sm text-zinc-400 leading-5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 sm:justify-start">
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
          </div>
        </div>

        <ProfileVisual variant="message" text="DEV" />
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
    <a
      href={href}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-lime-300/60 hover:text-lime-200"
    >
      {children}
    </a>
  );
}
