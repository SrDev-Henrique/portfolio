"use client";

import Image from "next/image";
import { CursorTarget, useCursorTracker } from "@/components/cursor-tracker";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const tools = [
  {
    category: "IDE",
    description:
      "Meu ambiente principal para escrever, revisar e acelerar decisões sem perder cuidado com arquitetura.",
    logo: "/images/logos/Cursor.jpeg",
    name: "Cursor",
  },
  {
    category: "Framework",
    description:
      "Base para sites e produtos com rotas, SEO, renderização moderna e deploy previsível.",
    logo: "/images/logos/next.jpeg",
    name: "Next.js",
  },
  {
    category: "Interface",
    description:
      "Onde a experiência ganha vida com componentes, estados e interações bem organizadas.",
    logo: "/images/logos/React.webp",
    name: "React",
  },
  {
    category: "Estilo",
    description:
      "Velocidade para criar interfaces responsivas, consistentes e fáceis de ajustar.",
    logo: "/images/logos/Tailwind.png",
    name: "Tailwind CSS",
  },
  {
    category: "Componentes",
    description:
      "Ponto de partida para interfaces acessíveis, polidas e alinhadas a um design system.",
    logo: "/images/logos/Shadcn.png",
    name: "shadcn/ui",
  },
  {
    category: "Pagamentos",
    description:
      "Solução robusta para checkout, assinaturas e fluxos financeiros mais completos.",
    logo: "/images/logos/Stripe_Logo_2.webp",
    name: "Stripe",
  },
  {
    category: "Pagamentos",
    description:
      "Alternativa brasileira para cobranças simples, direta e adequada a produtos locais.",
    logo: "/images/logos/AbacatePay.jpeg",
    name: "AbacatePay",
  },
  {
    category: "Backend",
    description:
      "Framework leve para criar APIs rápidas, tipadas e simples de evoluir com Bun.",
    logo: "/images/logos/Elysia.png",
    name: "Elysia",
  },
  {
    category: "Runtime",
    description:
      "Ferramenta para desenvolvimento ágil, scripts rápidos e uma experiência moderna no backend.",
    logo: "/images/logos/Bun.png",
    name: "Bun",
  },
  {
    category: "Auth",
    description:
      "Autenticação moderna para produtos com login, sessões, área privada e painel admin.",
    logo: "/images/logos/Better-auth.jpeg",
    name: "Better Auth",
  },
  {
    category: "Banco de dados",
    description:
      "Postgres serverless para produtos que precisam de dados relacionais com escala e simplicidade.",
    logo: "/images/logos/Neon.png",
    name: "Neon",
  },
  {
    category: "Banco e storage",
    description:
      "Banco, storage e serviços de dados quando o projeto precisa crescer com recursos integrados.",
    logo: "/images/logos/Supabase.jpeg",
    name: "Supabase",
  },
  {
    category: "Hospedagem",
    description:
      "Minha escolha principal para hospedar frontends Next.js com performance e fluxo de deploy limpo.",
    logo: "/images/logos/Vercel.png",
    name: "Vercel",
  },
  {
    category: "Deploy backend",
    description:
      "Deploy prático para APIs e serviços separados quando o backend precisa viver fora do frontend.",
    logo: "/images/logos/Render.jpeg",
    name: "Render",
  },
  {
    category: "Referência visual",
    description:
      "Repertório para observar composição, detalhe, hierarquia visual e linguagem de produto.",
    logo: "/images/logos/Dribbble.jpeg",
    name: "Dribbble",
  },
  {
    category: "Referência visual",
    description:
      "Inspiração para experiências digitais com alto nível de direção visual, interação e acabamento.",
    logo: "/images/logos/Awwwards.png",
    name: "Awwwards",
  },
  {
    category: "Pesquisa e comunidade",
    description:
      "Onde acompanho conversas, tendências, referências e ideias sobre design, produto e tecnologia.",
    logo: "/images/logos/X.jpeg",
    name: "X",
  },
];

export function TechStackSection() {
  const { isEnabled: isCursorEnabled } = useCursorTracker();

  return (
    <section className="px-5 pb-20 text-foreground sm:px-8 lg:px-12 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal
          as="header"
          className="flex flex-col gap-6 border-border border-t pt-14 lg:flex-row lg:items-end lg:justify-between lg:pt-20"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Minha stack
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Ferramentas que uso para pensar, criar e entregar produtos
              digitais
            </h2>
          </div>

          <p className="max-w-md font-inter text-base text-foreground-muted leading-7 lg:text-right">
            Uma stack que conecta IDE, frontend, backend, autenticação,
            pagamentos, banco, deploy e repertório visual para transformar
            ideias em produtos prontos para crescer.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Reveal key={tool.name} delay={0.04} staggerIndex={index}>
              <CursorTarget
                className="h-full"
                cursorState={{
                  imageSrc: tool.logo,
                  label: tool.name,
                  mode: "logo",
                }}
              >
                <article
                  className={cn(
                    "h-full border-border border-b p-5 transition-colors duration-300 hover:bg-foreground/3",
                    getStackCardBorderClass(index),
                    isCursorEnabled
                      ? "flex min-h-56 flex-col justify-end"
                      : "flex items-start gap-5",
                  )}
                >
                  <div
                    className={cn(
                      "relative grid size-15 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-background",
                      isCursorEnabled && "hidden",
                    )}
                  >
                    <Image
                      src={tool.logo}
                      alt={`Logo ${tool.name}`}
                      fill
                      sizes="60px"
                      className="object-contain p-2.5"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-3xl leading-none tracking-normal md:text-4xl lg:text-5xl">
                      {tool.name}
                    </h3>
                    <p className="mt-4 font-inter text-foreground-muted text-sm leading-6 lg:text-base">
                      {tool.description}
                    </p>
                  </div>
                </article>
              </CursorTarget>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function getStackCardBorderClass(index: number) {
  const visualIndex = index + 1;
  const hasMdRightBorder = visualIndex % 2 !== 0;
  const hasLgRightBorder = visualIndex % 3 !== 0;
  const hasNoBottomBorder = visualIndex === 17;

  return cn(
    hasMdRightBorder ? "md:border-r" : "md:border-r-0",
    hasLgRightBorder ? "lg:border-r" : "lg:border-r-0",
    hasNoBottomBorder ? "border-b-0 md:border-b" : "border-b",
  );
}
