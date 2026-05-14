import { Star } from "lucide-react";

type Testimonial = {
  author: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Henrique entendeu a necessidade do projeto e entregou um site claro, rapido e preparado para gerar contatos qualificados.",
    author: "Equipe Jaber Seguros",
    company: "Seguros e consorcios",
  },
  {
    quote:
      "O trabalho trouxe uma presenca digital mais profissional, com conteudo organizado e formularios integrados ao processo comercial.",
    author: "Equipe Coimcamp",
    company: "Seguranca e automacao",
  },
  {
    quote:
      "A plataforma ficou simples de administrar, com uma experiencia fluida para publicar achadinhos e acompanhar os links de afiliado.",
    author: "Achadinho Preferido",
    company: "Curadoria e afiliados",
  },
  {
    quote:
      "A experiencia visual ficou imersiva, responsiva e muito bem cuidada nos detalhes de interacao, animacao e organizacao do front-end.",
    author: "Projeto Arcane",
    company: "Frontend interativo",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-5 py-20 text-zinc-50 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-7xl border-white/10 border-t pt-14 lg:pt-20">
        <header className="mb-12 max-w-4xl lg:mb-14">
          <p className="mb-5 font-inter font-semibold text-lime-300 text-sm uppercase tracking-normal">
            Depoimentos
          </p>
          <h2 className="font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-8xl">
            O que meus clientes dizem
          </h2>
          <p className="mt-6 max-w-2xl font-inter text-lg text-zinc-300 leading-8">
            Feedbacks de projetos que uniram estrategia, desenvolvimento bem
            executado e uma experiencia digital pensada para gerar resultado.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <TestimonialCard testimonial={testimonials[0]} />
          <TestimonialCard testimonial={testimonials[1]} />

          <MetricCard
            className="bg-zinc-50 text-zinc-950"
            description="Projetos pensados para performance, clareza e conversao"
            label="Foco em resultado"
            value="100%"
          />

          <MetricCard
            className="bg-lime-300 text-zinc-950"
            description="Processo proximo do briefing ao deploy"
            label="Entrega completa"
            value="Do zero"
          />

          <TestimonialCard testimonial={testimonials[2]} />
          <TestimonialCard testimonial={testimonials[3]} />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-72 flex-col justify-between rounded-md bg-zinc-900/95 p-6 shadow-2xl shadow-black/10 ring-1 ring-white/5 sm:p-8">
      <div>
        <div
          className="mb-5 flex gap-2 text-lime-300"
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

        <p className="font-inter text-lg text-zinc-50 leading-8">
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-lime-300 font-inter font-semibold text-zinc-950">
          {getInitials(testimonial.author)}
        </div>
        <div>
          <p className="font-inter font-semibold text-zinc-50">
            {testimonial.author}
          </p>
          <p className="font-inter text-sm text-zinc-300">
            {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

function MetricCard({
  className,
  description,
  label,
  value,
}: {
  className: string;
  description: string;
  label: string;
  value: string;
}) {
  return (
    <article
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
    </article>
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
