import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CursorTarget } from "@/components/cursor-tracker";
import { Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-5 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-44 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal as="header" className="max-w-5xl">
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Projetos
            </p>
            <h1 className="font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-[6.5rem]">
              Cases e trabalhos em destaque
            </h1>
            <p className="mt-6 max-w-3xl font-inter text-base text-muted-foreground leading-7 sm:text-lg">
              Uma seleção de projetos reais, com contexto, decisões técnicas e
              produtos digitais pensados para crescer com clareza, performance e
              resultado.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.06} staggerIndex={index}>
                <article className="group overflow-hidden rounded-lg border border-border bg-background transition-colors duration-300 hover:border-accent/45">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
