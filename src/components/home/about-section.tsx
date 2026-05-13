import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const metrics = [
  { value: "2+", label: "anos de experiencia" },
  { value: "20+", label: "clientes atendidos" },
];

const contactLinks = [
  {
    href: "https://wa.me/5519994012785",
    label: "Falar no WhatsApp",
    Icon: MessageCircle,
    external: true,
  },
  {
    href: "mailto:halbuquerque2850@gmail.com",
    label: "Enviar e-mail",
    Icon: Mail,
    external: false,
  },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 text-zinc-50 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 border-white/10 border-t pt-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:pt-20">
        <div>
          <p className="mb-5 font-inter font-semibold text-lime-300 text-sm uppercase tracking-normal">
            Sobre mim
          </p>

          <h2 className="max-w-xl font-semibold text-4xl leading-none tracking-normal sm:text-5xl lg:text-6xl">
            Desenvolvimento com visao de produto e foco em resultado.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-zinc-300 leading-8 sm:text-xl">
            Sou Henrique Albuquerque, desenvolvedor full stack. Crio sites,
            webapps e e-commerces com uma abordagem completa: entendo a ideia,
            desenho a experiencia, desenvolvo a solucao e preparo tudo para
            crescer com performance, clareza e codigo bem cuidado.
          </p>

          <div className="mt-10 grid gap-6 border-white/10 border-y py-7 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <strong className="block font-bebas-neue text-6xl text-lime-300 leading-none tracking-normal sm:text-7xl">
                  {metric.value}
                </strong>
                <span className="mt-2 block font-inter text-sm text-zinc-400 uppercase leading-5 tracking-normal">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-x-7">
            {contactLinks.map(({ external, href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 font-semibold text-sm text-zinc-200 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </a>
            ))}

            <Link
              href="/sobre-mim"
              className="group inline-flex items-center gap-2 font-semibold text-sm text-zinc-200 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <span>Conhecer minha historia</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
