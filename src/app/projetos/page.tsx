import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CursorTarget } from "@/components/cursor-tracker";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl border-border border-t pt-10 lg:pt-16">
        <header className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Projetos
            </p>
            <h1 className="max-w-4xl font-semibold text-5xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Cases e trabalhos em destaque
            </h1>
          </div>

          <p className="max-w-lg font-inter text-base text-muted-foreground leading-7 lg:text-right">
            Uma base para navegar pelos projetos do portfolio e evoluir cada um
            deles para um estudo de caso mais detalhado.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-colors duration-300 hover:border-accent/45"
            >
              <CursorTarget
                className="h-full"
                cursorState={{ label: project.name, mode: "arrow" }}
              >
                <Link
                  href={`/projetos/${project.slug}`}
                  className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={`Mockup do projeto ${project.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/55 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal">
                        {project.tag}
                      </span>
                      <ArrowUpRight className="size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h2 className="mt-3 font-semibold text-3xl text-foreground leading-none tracking-normal sm:text-4xl">
                      {project.name}
                    </h2>
                    <p className="mt-4 font-inter text-base text-muted-foreground leading-7">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </CursorTarget>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
