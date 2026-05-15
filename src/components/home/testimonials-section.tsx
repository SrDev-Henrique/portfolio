import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Testimonial = {
  author: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Henrique entendeu a necessidade do projeto e entregou um site claro, rápido e preparado para gerar contatos qualificados.",
    author: "Equipe Jaber Seguros",
    company: "Seguros e consórcios",
  },
  {
    quote:
      "O trabalho trouxe uma presença digital mais profissional, com conteúdo organizado e formulários integrados ao processo comercial.",
    author: "Equipe Coimcamp",
    company: "segurança e automação",
  },
  {
    quote:
      "A plataforma ficou simples de administrar, com uma experiência fluida para publicar achadinhos e acompanhar os links de afiliado.",
    author: "Achadinho Preferido",
    company: "Curadoria e afiliados",
  },
  {
    quote:
      "A experiência visual ficou imersiva, responsiva e muito bem cuidada nos detalhes de interacao, animacao e organizacao do front-end.",
    author: "Projeto Arcane",
    company: "Frontend interativo",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-7xl border-border border-t pt-14 lg:pt-20">
        <Reveal as="header" className="mb-12 max-w-4xl lg:mb-14">
          <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
            Depoimentos
          </p>
          <h2 className="font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-8xl">
            O que meus clientes dizem
          </h2>
          <p className="mt-6 max-w-2xl font-inter text-foreground-muted text-lg leading-8">
            Feedbacks de projetos que uniram estratégia, desenvolvimento bem
            executado e uma experiência digital pensada para gerar resultado.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <TestimonialCard staggerIndex={0} testimonial={testimonials[0]} />
          <TestimonialCard staggerIndex={1} testimonial={testimonials[1]} />

          <MetricCard
            staggerIndex={2}
            className="bg-foreground text-accent-foreground"
            description="Projetos pensados para performance, clareza e conversão"
            label="Foco em resultado"
            value="100%"
          />

          <MetricCard
            staggerIndex={3}
            className="bg-accent text-accent-foreground"
            description="Processo próximo do briefing ao deploy"
            label="Entrega completa"
            value="Do zero"
          />

          <TestimonialCard staggerIndex={4} testimonial={testimonials[2]} />
          <TestimonialCard staggerIndex={5} testimonial={testimonials[3]} />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  staggerIndex,
  testimonial,
}: {
  staggerIndex: number;
  testimonial: Testimonial;
}) {
  return (
    <Reveal
      as="article"
      delay={0.08}
      staggerIndex={staggerIndex}
      className="flex min-h-72 flex-col justify-between rounded-md bg-surface/95 p-6 shadow-2xl shadow-overlay ring-1 ring-border/50 sm:p-8"
    >
      <div>
        <div
          className="mb-5 flex gap-2 text-accent"
          role="img"
          aria-label="5 estrelas"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index.toString()}
              aria-hidden
              className="size-4 fill-current stroke-current sm:size-5"
            />
          ))}
        </div>

        <p className="font-inter text-foreground text-lg leading-8">
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-inter font-semibold text-accent-foreground">
          {getInitials(testimonial.author)}
        </div>
        <div>
          <p className="font-inter font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="font-inter text-foreground-muted text-sm">
            {testimonial.company}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function MetricCard({
  className,
  description,
  label,
  staggerIndex,
  value,
}: {
  className: string;
  description: string;
  label: string;
  staggerIndex: number;
  value: string;
}) {
  return (
    <Reveal
      as="article"
      delay={0.08}
      staggerIndex={staggerIndex}
      className={`${className} flex min-h-72 flex-col justify-between rounded-md p-6 sm:p-8`}
    >
      <p className="max-w-sm font-inter text-base leading-7 opacity-80">
        {description}
      </p>
      <div>
        <strong className="block font-bebas-neue text-7xl leading-none tracking-normal sm:text-8xl">
          {value}
        </strong>
        <p className="font-inter text-base opacity-80">{label}</p>
      </div>
    </Reveal>
  );
}

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
