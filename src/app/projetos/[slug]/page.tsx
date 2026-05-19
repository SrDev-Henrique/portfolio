import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  FileCheck2,
  FileCode2,
  GitBranch,
  Globe2,
  ImageIcon,
  Layers3,
  Mail,
  SearchCode,
  Server,
  UploadCloud,
  UserRound,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";
import { getProjectBySlug, getProjectSlugs } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Henrique Albuquerque",
    };
  }

  return createPageMetadata({
    description: project.description,
    image: project.image,
    imageAlt: `Mockup do projeto ${project.name}`,
    path: `/projetos/${project.slug}`,
    title: `${project.name} | Henrique Albuquerque`,
    type: "article",
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 border-border border-t pt-10 lg:pt-16">
          <Reveal>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="size-4" />
              Voltar para projetos
            </Link>
          </Reveal>

          <Reveal
            className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end"
            delay={0.08}
          >
            <div>
              <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
                {project.tag}
              </p>
              <h1 className="max-w-4xl font-semibold text-5xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl font-inter text-lg text-muted-foreground leading-8">
                {project.description}
              </p>
              <ProjectLiveLink href={project.liveUrl} />
            </div>

            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
                Projeto em evolução
              </p>
              <p className="mt-3 font-inter text-muted-foreground text-sm leading-6">
                Esta página já está pronta para receber um estudo de caso
                completo com narrativa, stack, decisões técnicas e placeholders
                visuais.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <ProjectHeroImage image={project.image} name={project.name} />
          </Reveal>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="size-4" />
              Voltar para projetos
            </Link>
          </Reveal>

          <Reveal
            as="header"
            className="mt-10 grid gap-10 border-border border-t pt-10 lg:grid-cols-[1fr_20rem] lg:items-end lg:pt-14"
            delay={0.08}
          >
            <div>
              <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
                {project.tag}
              </p>
              <h1 className="max-w-4xl font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-8xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl font-inter text-lg text-muted-foreground leading-8">
                {caseStudy.heroSummary}
              </p>
              <ProjectLiveLink href={project.liveUrl} />
            </div>

            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
                Stack principal
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 font-inter text-foreground-muted text-xs leading-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={0.16}>
            <ProjectHeroImage image={project.image} name={project.name} />
          </Reveal>

          <div className="mt-16 flex w-full flex-col gap-16 lg:mt-20">
            <Reveal delay={0.04}>
              <CaseTextBlock
                eyebrow={caseStudy.overview.label}
                text={caseStudy.overview.body}
                title={caseStudy.overview.title}
              />
            </Reveal>

            <Reveal
              className="grid gap-6 md:grid-cols-2"
              delay={0.04}
              staggerIndex={1}
            >
              <CasePanel
                body={caseStudy.challenge.body}
                title={caseStudy.challenge.title}
              />
              <CasePanel
                body={caseStudy.solution.body}
                title={caseStudy.solution.title}
              />
            </Reveal>

            <Reveal className="space-y-5" delay={0.04} staggerIndex={2}>
              <SectionHeading
                eyebrow={caseStudy.visualSection?.eyebrow ?? "Espaços visuais"}
                title={
                  caseStudy.visualSection?.title ??
                  "Imagens futuras planejadas para contar melhor o case"
                }
              />
              {caseStudy.visualSection ? (
                <p className="max-w-3xl font-inter text-base text-foreground-muted leading-8 sm:text-lg">
                  {caseStudy.visualSection.body}
                </p>
              ) : null}
              {caseStudy.showcaseImages ? (
                <div className="grid gap-12">
                  {caseStudy.showcaseImages.map((showcaseImage) => (
                    <CaseShowcaseImage
                      key={showcaseImage.src}
                      alt={showcaseImage.alt}
                      caption={showcaseImage.caption}
                      src={showcaseImage.src}
                    />
                  ))}
                </div>
              ) : null}
              {caseStudy.placeholders.length > 0 ? (
                <div className="grid gap-5">
                  {caseStudy.placeholders.map((placeholder) => (
                    <VisualPlaceholder
                      key={placeholder.title}
                      eyebrow={placeholder.eyebrow}
                      hint={placeholder.hint}
                      title={placeholder.title}
                    />
                  ))}
                </div>
              ) : null}
              {caseStudy.technicalDiagram ? (
                <Reveal>
                  <TechnicalDiagram
                    description={caseStudy.technicalDiagram.description}
                    eyebrow={caseStudy.technicalDiagram.eyebrow}
                    title={caseStudy.technicalDiagram.title}
                    variant={caseStudy.technicalDiagram.variant}
                  />
                </Reveal>
              ) : null}
            </Reveal>

            <Reveal
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
              delay={0.04}
              staggerIndex={3}
            >
              <div>
                <SectionHeading
                  eyebrow="Implementação"
                  title="Decisões técnicas que sustentam o fluxo comercial"
                />
              </div>
              <ul className="space-y-4">
                {caseStudy.decisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex gap-3 font-inter text-base text-foreground-muted leading-7"
                  >
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              className="rounded-lg border border-border bg-surface p-6 sm:p-8"
              delay={0.04}
              staggerIndex={4}
            >
              <SectionHeading
                eyebrow="Impacto"
                title="O que a entrega deixou pronto para evoluir"
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {caseStudy.impact.map((item) => (
                  <div
                    key={item}
                    className="border-border border-t pt-4 font-inter text-foreground-muted text-sm leading-6"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="grid gap-6 border-border border-t pt-10 md:grid-cols-[1fr_auto] md:items-center"
              delay={0.04}
              staggerIndex={5}
            >
              <div>
                <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
                  Seu próximo projeto
                </p>
                <h2 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
                  {caseStudy.cta.body}
                </h2>
              </div>
              <PortfolioButton href="/#contato" variant="outline-green">
                {caseStudy.cta.label}
              </PortfolioButton>
            </Reveal>

            <Reveal delay={0.04} staggerIndex={6}>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 font-inter font-semibold text-foreground-soft text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Ver todos os projetos
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}

function ProjectLiveLink({ href }: { href: string }) {
  return (
    <div className="mt-8 w-fit">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Visitar site
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
}

function ProjectHeroImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="relative aspect-16/10">
        <Image
          src={image}
          alt={`Mockup do projeto ${name}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function CaseShowcaseImage({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption: string;
  src: string;
}) {
  return (
    <Reveal delay={0.04}>
      <figure>
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 max-w-3xl font-inter text-foreground-subtle text-sm leading-6">
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function CaseTextBlock({
  eyebrow,
  text,
  title,
}: {
  eyebrow: string;
  text: string;
  title: string;
}) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <p className="mt-5 font-inter text-base text-foreground-muted leading-8 sm:text-lg">
        {text}
      </p>
    </section>
  );
}

function CasePanel({ body, title }: { body: string; title: string }) {
  return (
    <section className="rounded-lg border border-border bg-surface p-6">
      <h2 className="font-semibold text-3xl leading-none tracking-normal sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 font-inter text-base text-foreground-muted leading-7">
        {body}
      </p>
    </section>
  );
}

function TechnicalDiagram({
  description,
  eyebrow,
  title,
  variant = "lead-pipeline",
}: {
  description: string;
  eyebrow: string;
  title: string;
  variant?:
    | "admin-composition"
    | "arcane-art-direction"
    | "lead-pipeline"
    | "service-routing";
}) {
  if (variant === "arcane-art-direction") {
    return (
      <ArcaneArtDirectionDiagram
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    );
  }

  if (variant === "admin-composition") {
    return (
      <AdminCompositionDiagram
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    );
  }

  if (variant === "service-routing") {
    return (
      <ServiceRoutingDiagram
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    );
  }

  const pipelineNodes = [
    {
      detail: "Preenche e envia",
      icon: <UserRound className="size-5" />,
      title: "Usuário",
    },
    {
      detail: "RHF + Zod valida",
      icon: <FileCheck2 className="size-5" />,
      title: "Formulário",
    },
    {
      detail: "POST multipart/form-data",
      icon: <Server className="size-5" />,
      title: "Route Handler",
    },
    {
      detail: "Bucket agendamentos",
      icon: <UploadCloud className="size-5" />,
      title: "Supabase Storage",
    },
    {
      detail: "HTML + texto",
      icon: <Mail className="size-5" />,
      title: "Resend",
    },
  ];

  const mobileSteps = [
    "Usuário preenche e envia o formulário.",
    "React Hook Form e Zod validam os dados antes do envio.",
    "A rota do Next.js recebe o POST em multipart/form-data.",
    "A API checa os campos obrigatórios e decide como lidar com imagens.",
    "Com Supabase configurado, as imagens vão para o bucket agendamentos.",
    "Sem imagens, o fluxo segue com imageUrls vazio; se imagens exigirem Supabase ausente, retorna 503.",
    "Resend envia e-mail em HTML e texto.",
    "O formulário recebe JSON de sucesso ou erro e mostra o toast para o usuário.",
  ];

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-8">
      <div className="max-w-3xl">
        <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 font-inter text-base text-foreground-muted leading-7">
          {description}
        </p>
      </div>

      <div className="mt-8 hidden overflow-x-auto pb-2 md:block">
        <div className="min-w-232">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3">
            {pipelineNodes.map((node, index) => (
              <FragmentWithArrow
                key={node.title}
                isLast={index === pipelineNodes.length - 1}
              >
                <PipelineNode
                  detail={node.detail}
                  icon={node.icon}
                  title={node.title}
                />
              </FragmentWithArrow>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-[1.1fr_1fr_1.1fr] gap-3">
            <PipelineBranch
              detail="Upload no bucket agendamentos e retorno das URLs públicas para compor a mensagem."
              title="Tem imagens e Supabase OK"
            />
            <PipelineBranch
              detail="A API segue com imageUrls vazio ou retorna 503 quando as imagens dependem do Supabase."
              title="Sem imagens ou sem Supabase"
            />
            <PipelineBranch
              detail="O Resend responde sucesso ou erro, e a rota devolve JSON para a interface."
              title="Resposta final"
            />
          </div>
        </div>
      </div>

      <ol className="mt-8 grid gap-3 md:hidden">
        {mobileSteps.map((step, index) => (
          <li
            key={step}
            className="grid grid-cols-[2rem_1fr] gap-3 rounded-lg border border-border bg-background p-4"
          >
            <span className="grid size-8 place-items-center rounded-full bg-accent font-inter font-semibold text-background text-xs">
              {index + 1}
            </span>
            <span className="font-inter text-foreground-muted text-sm leading-6">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ArcaneArtDirectionDiagram({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) {
  const identityRows = [
    {
      dimension: "Fundo",
      piltover: "Bege e creme: #FFEBB7, #ead8c0, #f5f5dc",
      zaun: "Preto profundo: #0a0a0a, #141414",
    },
    {
      dimension: "Acentos",
      piltover: "Dourado, laranja queimado e títulos bege",
      zaun: "Verde químico, roxo e rosa Arcane",
    },
    {
      dimension: "Tipografia",
      piltover: "Cinzel com sensação clássica e institucional",
      zaun: "Cinzel com neon no intro e clima underground",
    },
    {
      dimension: "UI",
      piltover: "Cards translúcidos, blur e bordas creme",
      zaun: "Colunas verdes, máscaras em vídeo e fundo contínuo",
    },
  ];

  const designPillars = [
    {
      detail:
        "Arcane pink, purple e blue para marca; família bege para Piltover; pretos em camadas para Zaun.",
      title: "Tokens SCSS semânticos",
    },
    {
      detail:
        "Zentry para impacto, Cinzel para épico, Lora para leitura e Playfair para tensão dramática.",
      title: "Tipografia editorial",
    },
    {
      detail:
        "100svh, sticky sections, clip-path, perspectiva e grids assimétricos para scroll como câmera.",
      title: "Composição imersiva",
    },
    {
      detail:
        "Easing cubic-bezier(0.76, 0, 0.24, 1), wipes, Lenis, textos revelados e tilt 3D.",
      title: "Motion com timing editorial",
    },
  ];

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-8">
      <div className="max-w-3xl">
        <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 font-inter text-base text-foreground-muted leading-7">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-lg border border-border bg-background">
          <div className="grid grid-cols-[0.7fr_1fr_1fr] border-border border-b bg-muted/30 font-inter font-semibold text-foreground text-sm">
            <div className="p-4">Dimensão</div>
            <div className="p-4">Piltover</div>
            <div className="p-4">Zaun</div>
          </div>
          {identityRows.map((row) => (
            <div
              key={row.dimension}
              className="grid grid-cols-[0.7fr_1fr_1fr] border-border border-b last:border-b-0"
            >
              <div className="p-4 font-inter font-semibold text-accent text-sm">
                {row.dimension}
              </div>
              <div className="p-4 font-inter text-foreground-muted text-sm leading-6">
                {row.piltover}
              </div>
              <div className="p-4 font-inter text-foreground-muted text-sm leading-6">
                {row.zaun}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          {designPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-border bg-background p-4"
            >
              <p className="font-inter font-semibold text-foreground text-sm">
                {pillar.title}
              </p>
              <p className="mt-2 font-inter text-foreground-muted text-sm leading-6">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-border border-dashed bg-background p-4">
        <p className="font-inter font-semibold text-foreground text-sm">
          Direção de arte inspirada em Arcane: dualidade Piltover/Zaun em paleta
          e tipografia, layout imersivo com scroll cinematográfico e motion
          design com transições customizadas.
        </p>
        <p className="mt-3 font-inter text-foreground-muted text-sm leading-6">
          O resultado é um fan tribute de alto craft, respeitoso à IP da Riot e
          voltado a portfólio: conteúdo denso tratado como exposição digital,
          não como landing genérica ou wiki.
        </p>
      </div>
    </section>
  );
}

function AdminCompositionDiagram({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) {
  const visualTokens = [
    { dark: "#1c1614", label: "Background", light: "#f7f5f2" },
    { dark: "#2a211d", label: "Card", light: "#ffffff" },
    { dark: "#f5ede0", label: "Texto", light: "#2c1f1a" },
    { dark: "#e07a5f", label: "Primary / CTA", light: "#c2410c" },
    { dark: "#f59e0b", label: "Accent", light: "#d97706" },
    { dark: "rgb(245 237 224 / 12%)", label: "Border", light: "#e8dfd3" },
  ];

  const adminPanels = [
    {
      detail:
        "Identificação, preços, links, variantes, especificações e aviso legal.",
      title: "Formulário de produto",
    },
    {
      detail:
        "Zoom do card com miniatura, plataforma, categoria e estado de publicação.",
      title: "Variantes e preview",
    },
    {
      detail:
        "Tabela de produtos com seleção múltipla e barra bulk em formato pill.",
      title: "Lista de produtos",
    },
    {
      detail:
        "Filtros, gráfico de cliques, leitura por produto e exportação CSV.",
      title: "/admin/clicks",
    },
  ];

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-8">
      <div className="max-w-3xl">
        <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 font-inter text-base text-foreground-muted leading-7">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center gap-2 font-inter font-semibold text-accent text-xs uppercase leading-none">
            <Layers3 className="size-5" />
            Identidade visual
          </div>
          <div className="mt-5 grid gap-3">
            {visualTokens.map((token) => (
              <div
                key={token.label}
                className="grid grid-cols-[7rem_1fr_1fr] items-center gap-3 font-inter text-sm"
              >
                <span className="text-foreground-muted">{token.label}</span>
                <TokenSwatch label="Loja" value={token.light} />
                <TokenSwatch label="Admin" value={token.dark} />
              </div>
            ))}
          </div>
          <p className="mt-5 border-border border-t pt-4 font-inter text-foreground-muted text-sm leading-6">
            Inter na interface, títulos com Fraunces, Hugeicons outline e cards
            shadcn com tabelas em header bg-muted/40.
          </p>
        </div>

        <div className="grid gap-3">
          <div className="rounded-lg border border-border bg-background p-4">
            <div className="flex items-center gap-2 font-inter font-semibold text-accent text-xs uppercase leading-none">
              <FileCode2 className="size-5" />
              Layout 2x2
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-[1.5fr_1fr]">
              {adminPanels.slice(0, 2).map((panel) => (
                <AdminPanel key={panel.title} {...panel} />
              ))}
            </div>
            <div className="mt-3 grid gap-3">
              {adminPanels.slice(2).map((panel) => (
                <AdminPanel key={panel.title} {...panel} />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border border-dashed bg-background p-4">
            <p className="font-inter font-semibold text-foreground text-sm">
              Curadoria de catálogo com variantes multimídia, operações em lote
              e analytics exportável.
            </p>
            <p className="mt-3 font-inter text-foreground-muted text-sm leading-6">
              Mock principal: Fone Bluetooth ANC com Case — Edição 2025, slug
              fone-bluetooth-anc-2025, Shopee, categoria Eletrônicos, preço de
              R$ 189,90 com desconto aproximado de 46%.
            </p>
            <p className="mt-3 font-inter text-foreground-muted text-sm leading-6">
              Destaques técnicos: validação originalPrice maior ou igual a
              currentPrice, PATCH enviando apenas diff no modo edição e alerta
              beforeunload quando existem alterações não salvas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenSwatch({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex items-center gap-2 text-foreground-muted">
      <span
        aria-hidden="true"
        className="size-5 rounded-full border border-border"
        style={{ backgroundColor: value }}
      />
      <span>{label}</span>
    </span>
  );
}

function AdminPanel({ detail, title }: { detail: string; title: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="font-inter font-semibold text-foreground text-sm">
        {title}
      </p>
      <p className="mt-2 font-inter text-foreground-muted text-sm leading-6">
        {detail}
      </p>
    </div>
  );
}

function ServiceRoutingDiagram({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) {
  const flowGroups = [
    {
      icon: <Braces className="size-5" />,
      items: [
        "services.ts: array services com 9 itens",
        "ServiceSlug como union type",
        "getServiceBySlug(slug)",
      ],
      title: "Fonte de dados",
    },
    {
      icon: <Globe2 className="size-5" />,
      items: [
        "URL /servicos/[service]",
        "Exemplo: /servicos/seguro-saude",
        "params.service alimenta a busca",
      ],
      title: "Next.js App Router",
    },
    {
      icon: <FileCode2 className="size-5" />,
      items: [
        "generateMetadata() monta SEO",
        "ServicePage() renderiza o template",
        "notFound() protege slug inválido",
      ],
      title: "page.tsx — template único",
    },
    {
      icon: <SearchCode className="size-5" />,
      items: [
        "Metadata API: title, description e canonical",
        "JSON-LD Service",
        "JSON-LD FAQPage quando houver FAQ",
        "HTML com hero, diferenciais, FAQ e CTA",
      ],
      title: "Saídas por slug",
    },
  ];

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-8">
      <div className="max-w-3xl">
        <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
          {title}
        </h3>
        <p className="mt-4 font-inter text-base text-foreground-muted leading-7">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {flowGroups.map((group, index) => (
          <FragmentWithArrow
            arrowClassName="rotate-90 lg:rotate-0"
            key={group.title}
            isLast={index === flowGroups.length - 1}
          >
            <RoutingGroup
              icon={group.icon}
              items={group.items}
              title={group.title}
            />
          </FragmentWithArrow>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <PipelineBranch
          detail="Quando o serviço existe, os mesmos campos alimentam metadata, template e dados estruturados."
          title="service encontrado"
        />
        <PipelineBranch
          detail="Quando a busca retorna null, a página chama notFound() e evita conteúdo inválido."
          title="slug inválido"
        />
        <PipelineBranch
          detail="JsonLd recebe Service e FAQPage e renderiza script application/ld+json."
          title="componente JsonLd"
        />
      </div>
    </section>
  );
}

function RoutingGroup({
  icon,
  items,
  title,
}: {
  icon: ReactNode;
  items: string[];
  title: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-center gap-2 font-inter font-semibold text-accent text-xs uppercase leading-none">
        {icon}
        {title}
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 font-inter text-foreground-muted text-sm leading-6"
          >
            <GitBranch className="mt-1 size-3.5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FragmentWithArrow({
  arrowClassName,
  children,
  isLast,
}: {
  arrowClassName?: string;
  children: ReactNode;
  isLast: boolean;
}) {
  return (
    <>
      {children}
      {isLast ? null : (
        <div className="flex items-center justify-center text-accent">
          <ArrowRight className={cn("size-5", arrowClassName)} />
        </div>
      )}
    </>
  );
}

function PipelineNode({
  detail,
  icon,
  title,
}: {
  detail: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-center gap-2 font-inter font-semibold text-accent text-xs uppercase leading-none">
        {icon}
        {title}
      </div>
      <p className="mt-4 font-inter text-foreground-muted text-sm leading-6">
        {detail}
      </p>
    </div>
  );
}

function PipelineBranch({ detail, title }: { detail: string; title: string }) {
  return (
    <div className="rounded-lg border border-border border-dashed bg-background p-4">
      <p className="font-inter font-semibold text-foreground text-sm">
        {title}
      </p>
      <p className="mt-2 font-inter text-foreground-muted text-sm leading-6">
        {detail}
      </p>
    </div>
  );
}

function VisualPlaceholder({
  eyebrow,
  hint,
  title,
}: {
  eyebrow: string;
  hint: string;
  title: string;
}) {
  return (
    <div className="grid min-h-72 overflow-hidden rounded-lg border border-border border-dashed bg-surface md:grid-cols-[18rem_1fr]">
      <div className="flex items-center justify-center border-border border-b bg-muted/35 p-8 md:border-r md:border-b-0">
        <div className="grid size-24 place-items-center rounded-full border border-border bg-background text-accent">
          <ImageIcon className="size-9" />
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 font-inter font-semibold text-accent text-xs uppercase leading-none">
          <Layers3 className="size-3.5" />
          {eyebrow}
        </div>
        <h3 className="mt-5 font-semibold text-3xl leading-none tracking-normal sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl font-inter text-base text-foreground-muted leading-7">
          {hint}
        </p>
      </div>
    </div>
  );
}
