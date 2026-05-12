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
    label: "Codigo limpo",
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
    <main className="min-h-screen bg-zinc-950 px-5 py-10 text-zinc-50 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <header className="pb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-normal text-lime-300">
            Componentes
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal sm:text-7xl">
            Preview do sistema visual
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
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
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-2xl font-semibold tracking-normal text-zinc-50">
                  Left / Right
                </h3>
                <code className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  variant=&quot;metric&quot;
                </code>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
                <div className="grid gap-6 md:grid-cols-3 md:gap-0">
                  {metricStats.map((item, index) => (
                    <div
                      key={item.value}
                      className={
                        index > 0
                          ? "md:border-l md:border-white/10 md:px-8"
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
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-2xl font-semibold tracking-normal text-zinc-50">
                  Top / Bottom
                </h3>
                <code className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                  variant=&quot;feature&quot;
                </code>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                  {featureStats.map((item, index) => (
                    <div
                      key={item.label}
                      className={
                        index > 0
                          ? "lg:border-l lg:border-white/10 lg:px-6"
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
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-2xl font-semibold tracking-normal text-zinc-50">
                    {item.name}
                  </h3>
                  <code className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    variant=&quot;{item.variant}&quot;
                  </code>
                </div>

                <div className="flex min-h-40 items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
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
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-2xl font-semibold tracking-normal text-zinc-50">
                    {item.name}
                  </h3>
                  <code className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    variant=&quot;{item.variant}&quot;
                  </code>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 py-6">
                  <ProfileVisual
                    variant={item.variant}
                    className="max-w-[23rem] px-6 py-5 sm:px-8"
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
