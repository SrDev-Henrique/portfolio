import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página não encontrada | Henrique Albuquerque",
  description:
    "Esta página não existe ou foi movida. Volte ao início ou explore projetos, blog e contato.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  {
    href: "/",
    label: "Início",
    description: "Visão geral, serviços e depoimentos",
  },
  {
    href: "/sobre-mim",
    label: "Sobre mim",
    description: "Processo, stack e forma de trabalho",
  },
  {
    href: "/projetos",
    label: "Projetos",
    description: "Cases e trabalhos em destaque",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Insights, tutoriais e recursos",
  },
  {
    href: "/#contato",
    label: "Contato",
    description: "Orçamento e novos projetos",
  },
] as const;

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <NotFoundDecor />

      <section className="relative px-5 pt-24 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal as="header" className="max-w-4xl">
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Erro 404
            </p>
            <h1 className="font-semibold text-[clamp(5.5rem,18vw,11rem)] leading-[0.88] tracking-normal">
              <span className="text-foreground">Página </span>
              <span className="text-accent">não encontrada</span>
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-base text-muted-foreground leading-8 sm:text-lg">
              O endereço que você acessou não existe, foi removido ou o link
              está desatualizado. Escolha um dos caminhos abaixo para continuar
              navegando.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            <PortfolioButton href="/" variant="primary" size="sm">
              Voltar ao início
            </PortfolioButton>
            <PortfolioButton href="/#contato" variant="outline-green" size="sm">
              Falar comigo
            </PortfolioButton>
          </Reveal>

          <Reveal delay={0.16} className="mt-16 lg:mt-20">
            <p className="mb-6 font-inter font-semibold text-accent text-xs uppercase tracking-normal">
              Onde ir agora
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((item, index) => (
                <li key={item.href}>
                  <Reveal delay={0.06} staggerIndex={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex h-full flex-col justify-between rounded-lg border border-border bg-surface/75 p-5 transition-colors",
                        "hover:border-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="font-semibold text-2xl leading-none tracking-normal sm:text-3xl">
                            {item.label}
                          </h2>
                          <ArrowUpRight
                            className="size-5 shrink-0 text-accent opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            aria-hidden
                          />
                        </div>
                        <p className="mt-3 font-inter text-muted-foreground text-sm leading-6">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function NotFoundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgb(var(--accent-rgb)/0.14),transparent_42%),radial-gradient(circle_at_82%_78%,rgb(var(--accent-rgb)/0.1),transparent_38%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[42%] left-[8%] h-24 w-28 bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.55)_1px,transparent_1.8px)] bg-size-[12px_12px] opacity-40"
      />
    </>
  );
}
