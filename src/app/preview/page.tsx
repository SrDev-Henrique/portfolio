import {
  CalendarCheck2,
  Globe,
  Headphones,
  ShoppingBag,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { ProfileVisual } from "@/components/home/profile-visual";
import { PortfolioButton } from "@/components/portfolio-button";
import { PortfolioStat } from "@/components/portfolio-stat";
import { ComponentPreviewSection } from "@/components/preview/component-preview-section";

const profileVariants = [
  {
    name: "Code",
    variant: "code",
  },
  {
    name: "Message",
    variant: "message",
  },
  {
    name: "Caption",
    variant: "caption",
  },
] as const;

const buttonVariants = [
  {
    name: "Primary",
    variant: "primary",
    label: "Vamos conversar",
  },
  {
    name: "Outline",
    variant: "outline",
    label: "Ver projetos",
  },
  {
    name: "Outline Green",
    variant: "outline-green",
    label: "Ver projetos",
  },
] as const;

const featureStats = [
  {
    icon: Target,
    label: "Briefing estrategico",
  },
  {
    icon: Wrench,
    label: "código limpo",
  },
  {
    icon: CalendarCheck2,
    label: "Entrega no prazo",
  },
  {
    icon: Headphones,
    label: "Suporte proximo",
  },
] as const;

const metricStats = [
  {
    description: "Websites de alta performance",
    icon: Globe,
    value: "20+",
  },
  {
    description: "Webapps sob medida",
    icon: Zap,
    value: "15+",
  },
  {
    description: "E-commerces prontos para vender",
    icon: ShoppingBag,
    value: "10+",
  },
] as const;

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <header className="pb-12">
          <p className="mb-4 font-medium text-accent text-sm uppercase tracking-normal">
            Componentes
          </p>
          <h1 className="max-w-4xl font-semibold text-5xl leading-none tracking-normal sm:text-7xl">
            Preview do sistema visual
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-8">
            Uma página de referência para visualizar os componentes criados no
            projeto e suas variações principais.
          </p>
        </header>

        <ComponentPreviewSection
          title="PortfolioStat"
          description="Bloco de stats do portfolio com dois estilos: beneficio com icone e texto, e metrica com numero grande, descricao e icone destacado."
        >
          <div className="space-y-8">
            <article className="min-w-0">
              <div className="mb-4 flex items-center justify-between border-border border-b pb-3">
                <h3 className="font-semibold text-2xl text-foreground tracking-normal">
                  Left / Right
                </h3>
                <code className="rounded-full border border-border px-3 py-1 text-muted-foreground text-xs">
                  variant=&quot;metric&quot;
                </code>
              </div>

              <div className="rounded-[1.75rem] border border-border bg-overlay p-6">
                <div className="grid gap-6 md:grid-cols-3 md:gap-0">
                  {metricStats.map((item, index) => (
                    <div
                      key={item.value}
                      className={
                        index > 0
                          ? "md:border-border md:border-l md:px-8"
                          : "md:px-8"
                      }
                    >
                      <PortfolioStat
                        icon={item.icon}
                        iconPosition={index % 2 === 0 ? "left" : "right"}
                        label={item.description}
                        value={item.value}
                        variant="metric"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="min-w-0">
              <div className="mb-4 flex items-center justify-between border-border border-b pb-3">
                <h3 className="font-semibold text-2xl text-foreground tracking-normal">
                  Top / Bottom
                </h3>
                <code className="rounded-full border border-border px-3 py-1 text-muted-foreground text-xs">
                  variant=&quot;feature&quot;
                </code>
              </div>

              <div className="rounded-[1.75rem] border border-border bg-overlay p-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                  {featureStats.map((item, index) => (
                    <div
                      key={item.label}
                      className={
                        index > 0
                          ? "lg:border-border lg:border-l lg:px-6"
                          : "lg:px-6"
                      }
                    >
                      <PortfolioStat
                        icon={item.icon}
                        iconPosition={index % 2 === 0 ? "top" : "bottom"}
                        label={item.label}
                        variant="feature"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </ComponentPreviewSection>

        <ComponentPreviewSection
          title="PortfolioButton"
          description="Botão principal do portfolio, com ícone de seta e variações para CTA sólido, contorno claro e contorno verde."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {buttonVariants.map((item) => (
              <article key={item.variant} className="min-w-0">
                <div className="mb-4 flex items-center justify-between border-border border-b pb-3">
                  <h3 className="font-semibold text-2xl text-foreground tracking-normal">
                    {item.name}
                  </h3>
                  <code className="rounded-full border border-border px-3 py-1 text-muted-foreground text-xs">
                    variant=&quot;{item.variant}&quot;
                  </code>
                </div>

                <div className="flex min-h-40 items-center justify-center rounded-[1.75rem] border border-border bg-overlay p-6">
                  <PortfolioButton href="#" variant={item.variant}>
                    {item.label}
                  </PortfolioButton>
                </div>
              </article>
            ))}
          </div>
        </ComponentPreviewSection>

        <ComponentPreviewSection
          title="ProfileVisual"
          description="Componente usado no Hero para exibir o retrato com elementos de interface, glow e animação no selo circular."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {profileVariants.map((item) => (
              <article key={item.variant} className="min-w-0">
                <div className="mb-4 flex items-center justify-between border-border border-b pb-3">
                  <h3 className="font-semibold text-2xl text-foreground tracking-normal">
                    {item.name}
                  </h3>
                  <code className="rounded-full border border-border px-3 py-1 text-muted-foreground text-xs">
                    variant=&quot;{item.variant}&quot;
                  </code>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-border bg-overlay py-6">
                  <ProfileVisual
                    variant={item.variant}
                    className="max-w-92 px-6 py-5 sm:px-8"
                  />
                </div>
              </article>
            ))}
          </div>
        </ComponentPreviewSection>
      </div>
    </main>
  );
}
