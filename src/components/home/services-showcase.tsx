"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import * as React from "react";

type Service = {
  description: string;
  id: string;
  image: string;
  tag: string;
  title: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Sites sob medida",
    tag: "Web customizado",
    description:
      "Desenvolvimento de sites rápidos, responsivos e alinhados ao posicionamento do seu negócio.",
    image: "/images/web-custom.jpeg",
  },
  {
    id: "02",
    title: "Aplicacoes Full Stack",
    tag: "Produto completo",
    description:
      "Front-end, back-end, banco de dados e deploy integrados para produtos digitais completos.",
    image: "/images/fullstack.jpeg",
  },
  {
    id: "03",
    title: "SEO e Performance",
    tag: "Crescimento organico",
    description:
      "Otimização técnica para melhorar velocidade, indexação e presença orgânica nos buscadores.",
    image: "/images/seo.jpeg",
  },
  {
    id: "04",
    title: "APIs e Integracoes",
    tag: "Sistemas conectados",
    description:
      "Criação de APIs seguras, escaláveis e prontas para conectar sistemas, dashboards e automações.",
    image: "/images/api.jpeg",
  },
];

export function ServicesShowcase() {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(event.clientX + 20);
    mouseY.set(event.clientY + 20);
  };

  const activeService = activeId
    ? (services.find((service) => service.id === activeId) ?? null)
    : null;

  return (
    <section
      aria-label="soluções digitais"
      onMouseMove={handleMouseMove}
      className="relative w-full cursor-default overflow-hidden bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              O que eu posso fazer
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              soluções digitais que eu entrego
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-border md:block" />

          <p className="max-w-52 text-right font-inter font-semibold text-foreground-subtle text-xs uppercase leading-5 tracking-normal">
            Do site institucional ao sistema completo
          </p>
        </motion.header>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              data={service}
              index={index}
              isActive={activeId === service.id}
              isAnyActive={activeId !== null}
              isMobile={isMobile}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>

      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeService ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-64 w-80 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="320px"
                  className="h-full w-full object-cover"
                />

                <div className="absolute right-0 bottom-0 w-full bg-linear-to-t from-overlay-strong to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_rgb(var(--accent-rgb)/0.9)]" />
                    <span className="font-inter text-[10px] text-foreground-soft/85 uppercase tracking-normal">
                      solução em destaque
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}

function ServiceRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: Service;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: isDimmed ? 0.35 : 1,
        y: 0,
      }}
      style={{
        backgroundColor:
          isActive && isMobile ? "rgb(var(--light-rgb)/0.03)" : "transparent",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-border border-t transition-colors duration-500 last:border-b ${
        isMobile ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="relative z-10 flex flex-col py-7 md:grid md:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)_3rem] md:items-center md:gap-8 md:py-10">
        <div className="flex items-baseline gap-5 transition-transform duration-500 group-hover:translate-x-3 md:gap-10">
          <span className="font-mono text-accent/55 text-xs">{data.id}</span>
          <h3 className="font-semibold text-3xl text-foreground-muted leading-none tracking-normal transition-colors duration-300 group-hover:text-foreground sm:text-4xl md:text-5xl">
            {data.title}
          </h3>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5 pl-11 md:mt-0 md:pl-0">
          <div>
            <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal transition-colors">
              {data.tag}
            </span>
            <p className="mt-2 max-w-md font-inter text-foreground-subtle text-sm leading-6 transition-colors group-hover:text-foreground-muted">
              {data.description}
            </p>
          </div>

          <div className="block shrink-0 text-foreground-subtle md:hidden">
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>
        </div>

        <motion.div
          animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
          className="hidden justify-self-end text-accent md:block"
        >
          <ArrowUpRight size={28} strokeWidth={1.5} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobile && isActive ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-overlay-strong to-transparent" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
