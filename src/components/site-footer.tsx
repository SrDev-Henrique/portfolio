import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const footerLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-mim", label: "Sobre mim" },
];

const contactLinks = [
  {
    href: "mailto:contato@henriquealbuquerque.dev",
    label: "contato@henriquealbuquerque.dev",
    Icon: Mail,
  },
  {
    href: "https://wa.me/5519994012785",
    label: "(19) 99401-2785",
    Icon: MessageCircle,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-accent px-5 py-12 text-accent-foreground sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal
          className="grid gap-10 border-accent-foreground/15 border-b pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          direction="up"
        >
          <div>
            <p className="mb-4 font-inter font-semibold text-sm uppercase tracking-normal opacity-70">
              Henrique Albuquerque
            </p>
            <h2 className="max-w-4xl font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-8xl">
              Vamos construir algo que gere resultado.
            </h2>
          </div>

          <div className="space-y-4 lg:justify-self-end lg:text-right">
            <p className="font-inter text-base leading-7 opacity-80">
              Desenvolvimento full stack para websites, webapps, e-commerce e
              APIs sob medida.
            </p>
            <nav
              aria-label="Links do rodape"
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-inter font-semibold text-sm transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          viewportMargin="0px 0px 0px 0px"
          className="flex flex-col gap-8 pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactLinks.map(({ href, Icon, label }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 font-inter font-semibold text-sm transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                <Icon className="size-4" />
                <span>{label}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>

          <p className="font-inter text-sm opacity-70">
            © 2026 Henrique Albuquerque. Todos os direitos reservados.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
