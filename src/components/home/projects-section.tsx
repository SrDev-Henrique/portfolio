import Image from "next/image";
import { Reveal } from "@/components/reveal";

type Project = {
  description: string;
  image: string;
  name: string;
  tag: string;
};

const projects: Project[] = [
  {
    name: "Coimcamp",
    tag: "Marketing e automação",
    description:
      "Site comercial para empresa de segurança e automação, com conteúdo estruturado, formulários integrados e suporte a arquivos.",
    image: "/images/projects/coimcamp/coimcamp-main.webp",
  },
  {
    name: "Jaber Seguros",
    tag: "Site institucional",
    description:
      "Site para corretora de seguros e consórcios, com páginas comerciais, conteúdo legal e formulário de contato por e-mail.",
    image: "/images/projects/jaber-seguros/jaber-main.webp",
  },
  {
    name: "Achadinho Preferido",
    tag: "Afiliados e painel admin",
    description:
      "Curadoria de achadinhos com links de afiliado, painel administrativo e integração com API REST.",
    image: "/images/projects/achadinho-preferido/achadinho-main.webp",
  },
  {
    name: "Arcane",
    tag: "Frontend interativo",
    description:
      "Experiência visual rica em animações e UX para explorar o universo de Arcane, demonstrando frontend moderno e responsivo.",
    image: "/images/projects/arcane/arcane-main.webp",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative scroll-mt-24 overflow-hidden bg-background px-5 py-20 text-foreground sm:scroll-mt-28 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl border-border border-t pt-14 lg:pt-20">
        <Reveal
          as="header"
          className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Projetos
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Projetos em destaque
            </h2>
          </div>

          <p className="max-w-lg font-inter text-base text-muted-foreground leading-7 lg:text-right">
            Uma seleção de trabalhos que combinam estratégia, interfaces
            responsivas e desenvolvimento preparado para crescer.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.name}
              delay={0.08}
              direction="up"
              staggerIndex={index}
              className="group min-w-0 overflow-hidden rounded-lg transition-colors duration-300 hover:border-accent/45"
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
                <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal">
                  {project.tag}
                </span>
                <h3 className="mt-3 font-semibold text-3xl text-foreground leading-none tracking-normal sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 font-inter text-base text-muted-foreground leading-7">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
