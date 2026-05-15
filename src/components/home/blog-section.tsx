import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";

type BlogPost = {
  date: string;
  description: string;
  tag: string;
  title: string;
};

const posts: BlogPost[] = [
  {
    tag: "Insight",
    date: "14 Mai 2026",
    title: "Como um site profissional transforma a percepcao do seu negócio",
    description:
      "estratégias para usar design, performance e clareza para gerar mais confianca online.",
  },
  {
    tag: "Tutorial",
    date: "14 Mai 2026",
    title: "Primeiros passos para planejar um site que converte",
    description:
      "Um guia simples para organizar objetivo, público, páginas e chamadas antes do desenvolvimento.",
  },
  {
    tag: "Recurso",
    date: "14 Mai 2026",
    title: "Checklist essencial antes de publicar um site",
    description:
      "Itens importantes de performance, SEO, responsividade, acessibilidade e formulários.",
  },
  {
    tag: "Insight",
    date: "14 Mai 2026",
    title: "Por que performance também e uma estratégia de vendas",
    description:
      "Como velocidade, estabilidade e experiência afetam conversão e retencao.",
  },
  {
    tag: "Tutorial",
    date: "14 Mai 2026",
    title: "Como estruturar uma API para crescer com segurança",
    description:
      "Conceitos praticos para pensar rotas, validacao, autenticacao e manutencao.",
  },
  {
    tag: "Recurso",
    date: "14 Mai 2026",
    title: "O que preparar antes de contratar um desenvolvedor",
    description:
      "Materiais, referências e decisoes que aceleram briefing, orcamento e execução.",
  },
  {
    tag: "Insight",
    date: "14 Mai 2026",
    title: "SEO tecnico: o basico que todo site moderno precisa",
    description:
      "Fundamentos de metadados, semantica, velocidade e organizacao de conteúdo.",
  },
];

const featuredPosts = posts.slice(0, 2);

export function BlogSection() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-24 overflow-hidden bg-background px-5 py-20 text-foreground sm:scroll-mt-28 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl border-border border-t pt-14 lg:pt-20">
        <Reveal
          as="header"
          className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Blog
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Insights, tutoriais e recursos
            </h2>
          </div>

          <p className="max-w-lg font-inter text-base text-muted-foreground leading-7 lg:text-right">
            conteúdos para ajudar você a planejar, construir e evoluir sua
            presença digital com mais clareza.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <Reveal
              as="article"
              key={post.title}
              delay={0.08}
              staggerIndex={index}
              className="group min-w-0 overflow-hidden rounded-lg border border-transparent transition-colors duration-300 hover:border-accent/45"
            >
              <div className="relative aspect-16/7 overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgb(var(--accent-rgb)/0.18),transparent_30%),linear-gradient(135deg,rgb(var(--light-rgb)/0.08),rgb(var(--light-rgb)/0))]" />
                <div className="absolute inset-4 rounded-md border border-border" />
                <span className="absolute right-5 bottom-5 font-inter font-semibold text-accent text-xs uppercase tracking-normal">
                  Imagem em breve
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal">
                    {post.tag}
                  </span>
                  <span className="size-1 rounded-full bg-foreground-placeholder" />
                  <time className="font-inter text-foreground-subtle text-xs uppercase leading-5 tracking-normal">
                    {post.date}
                  </time>
                </div>

                <h3 className="mt-4 font-semibold text-3xl text-foreground leading-none tracking-normal sm:text-4xl">
                  {post.title}
                </h3>
                <p className="mt-4 font-inter text-base text-muted-foreground leading-7">
                  {post.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <PortfolioButton href="/blog" size="sm" variant="outline-green">
            Ver todos os posts
          </PortfolioButton>
        </Reveal>
      </div>
    </section>
  );
}
