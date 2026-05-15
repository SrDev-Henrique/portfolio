import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PortfolioButton } from "@/components/portfolio-button";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/content/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
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

  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 border-border border-t pt-10 lg:pt-16">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="size-4" />
          Voltar para projetos
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
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
          </div>

          <div className="rounded-[1.75rem] border border-border bg-overlay p-6">
            <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
              Projeto em evolucao
            </p>
            <p className="mt-3 font-inter text-sm text-muted-foreground leading-6">
              Esta pagina existe como base da rota interna do portfolio e pode
              crescer com estudos de caso, bastidores, stack e resultados.
            </p>
            <div className="mt-6">
              <PortfolioButton href="/#contato" size="sm" variant="outline-green">
                Falar sobre um projeto assim
              </PortfolioButton>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
          <div className="relative aspect-16/10">
            <Image
              src={project.image}
              alt={`Mockup do projeto ${project.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-overlay p-6">
            <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
              Direcao do case
            </p>
            <p className="mt-4 font-inter text-base text-muted-foreground leading-7">
              A estrutura desta rota foi criada para suportar futuras paginas de
              estudo de caso com foco em contexto, desafio, processo,
              implementacao e resultado.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-overlay p-6">
            <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
              Proximo passo
            </p>
            <p className="mt-4 font-inter text-base text-muted-foreground leading-7">
              Quando voce quiser, podemos transformar cada projeto em um case
              completo com galeria, metricas, stack tecnica e CTA dedicado.
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-flex items-center gap-2 font-inter font-semibold text-sm text-foreground-soft transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver tambem os artigos do blog
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
