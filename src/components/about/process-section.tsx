import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    description:
      "Nesta etapa, eu entendo sua ideia, o momento do negócio e o tipo de produto que você quer construir. A conversa serve para identificar objetivos, urgências, expectativas e o melhor caminho inicial para transformar a necessidade em um projeto claro.",
    title: "Primeiro contato",
  },
  {
    description:
      "Aqui eu aprofundo o contexto: público, mercado, referências, funcionalidades, conteúdo, integrações e critérios de sucesso. A partir disso, organizo uma direção estratégica para que design, tecnologia e escopo caminhem com o mesmo objetivo.",
    title: "Pesquisa e estratégia",
  },
  {
    description:
      "Com a direção definida, estruturo prioridades, páginas, fluxos, stack, integrações, banco de dados, autenticação, pagamentos e pontos técnicos importantes. O resultado é um plano de execução claro, com proposta, prazos e responsabilidades bem definidos.",
    title: "Escopo e arquitetura",
  },
  {
    description:
      "Nesta fase, transformo estratégia em interface: hierarquia visual, copy, navegação, componentes, responsividade e jornadas principais. A ideia é criar uma experiência bonita, funcional e alinhada ao que o usuário precisa entender ou fazer.",
    title: "Design e experiência",
  },
  {
    description:
      "Implemento o produto com atenção a performance, acessibilidade, SEO, integrações e qualidade de código. Durante o processo, revisamos pontos importantes, ajustamos detalhes e refinamos a entrega para manter tudo alinhado ao objetivo.",
    title: "Desenvolvimento e refinamento",
  },
  {
    description:
      "Antes de publicar, valido responsividade, formulários, fluxos, performance, conteúdo e comportamento em produção. Depois do lançamento, deixo a base pronta para manutenção, melhorias futuras e evolução conforme o produto ganhar uso real.",
    title: "Testes, lançamento e evolução",
  },
];

export function ProcessSection() {
  return (
    <section className="px-5 pb-20 text-foreground sm:px-8 lg:px-12 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal
          as="header"
          className="flex flex-col gap-6 border-accent/99 border-t pt-14 lg:flex-row lg:items-end lg:justify-between lg:pt-20"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Processo
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Processo com estratégia e criatividade
            </h2>
          </div>

          <p className="max-w-md font-inter text-base text-foreground-muted leading-7 lg:text-right">
            Meu processo combina clareza, direção técnica e sensibilidade visual
            para entender desafios, construir soluções e entregar produtos
            digitais prontos para evoluir.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={0.04} staggerIndex={index}>
              <article
                className={cn(
                  "flex h-full min-h-96 flex-col border-accent/30 border-b py-6 transition-colors duration-300 hover:bg-foreground/3 sm:p-8",
                  getProcessCardBorderClass(index),
                )}
              >
                <span className="grid size-28 place-items-center rounded-full bg-accent font-bold font-inter text-4xl text-accent-foreground leading-none sm:size-32 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-16">
                  <h3 className="font-semibold text-3xl leading-none tracking-normal md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 font-inter text-foreground-muted text-sm leading-7 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function getProcessCardBorderClass(index: number) {
  const visualIndex = index + 1;
  const hasMdRightBorder = visualIndex % 2 !== 0;
  const hasLgRightBorder = visualIndex % 3 !== 0;
  const hasNoBottomBorder = visualIndex === 6;
  const hasNoBottomBorderMd = visualIndex === 5 || visualIndex === 6;
  const hasNoBottomBorderLg = visualIndex === 4;

  return cn(
    hasMdRightBorder ? "md:border-r" : "md:border-r-0",
    hasLgRightBorder ? "lg:border-r" : "lg:border-r-0",
    hasNoBottomBorderMd ? "md:border-b-0" : "md:border-b",
    hasNoBottomBorderLg ? "lg:border-b-0" : "lg:border-b",
    hasNoBottomBorder ? "border-b-0" : "border-b",
  );
}
