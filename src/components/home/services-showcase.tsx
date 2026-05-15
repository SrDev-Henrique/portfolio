"use client";

import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import * as React from "react";
import { isMobile as isMobileDevice } from "react-device-detect";
import { useCursorTracker } from "@/components/cursor-tracker";
import { Reveal } from "@/components/reveal";

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
    title: "aplicações Full Stack",
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
    title: "APIs e integrações",
    tag: "Sistemas conectados",
    description:
      "Criação de APIs seguras, escaláveis e prontas para conectar sistemas, dashboards e automações.",
    image: "/images/api.jpeg",
  },
];

export function ServicesShowcase() {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [isSmallViewport, setIsSmallViewport] = React.useState(true);
  const { isEnabled: isCursorEnabled, resetCursorState, setCursorState } =
    useCursorTracker();

  React.useEffect(() => {
    const checkViewport = () => setIsSmallViewport(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const isCompactDevice = isMobileDevice || isSmallViewport;
  const isDesktopInteractive = !isCompactDevice && isCursorEnabled;

  React.useEffect(() => {
    if (!isDesktopInteractive) {
      setActiveId(null);
      resetCursorState();
    }
  }, [isDesktopInteractive, resetCursorState]);

  return (
    <section
      aria-label="soluções digitais"
      className="relative w-full cursor-default overflow-hidden bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <div className="mx-auto max-w-7xl">
        <Reveal
          as="header"
          className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              O que eu posso fazer
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              soluções digitais que eu entrego
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-border lg:block" />

          <p className="max-w-52 text-right font-inter font-semibold text-foreground-subtle text-xs uppercase leading-5 tracking-normal">
            Do site institucional ao sistema completo
          </p>
        </Reveal>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              data={service}
              index={index}
              isActive={activeId === service.id}
              isAnyActive={activeId !== null}
              isDesktopInteractive={isDesktopInteractive}
              isMobile={isCompactDevice}
              onDesktopEnter={() => {
                setActiveId(service.id);
                setCursorState({
                  imageSrc: service.image,
                  label: service.title,
                  mode: "media",
                });
              }}
              onDesktopLeave={() => {
                setActiveId(null);
                resetCursorState();
              }}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  data,
  index,
  isActive,
  isDesktopInteractive,
  onDesktopEnter,
  onDesktopLeave,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: Service;
  index: number;
  isActive: boolean;
  isDesktopInteractive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
  onDesktopEnter: () => void;
  onDesktopLeave: () => void;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <Reveal
      as="article"
      delay={0.08}
      staggerIndex={index}
      style={{
        backgroundColor:
          isActive && isMobile ? "rgb(var(--light-rgb)/0.03)" : "transparent",
      }}
      onMouseEnter={() => isDesktopInteractive && onDesktopEnter()}
      onMouseLeave={() => isDesktopInteractive && onDesktopLeave()}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      visibleOpacity={isDimmed ? 0.35 : 1}
      className={`group relative border-border border-t transition-colors duration-500 last:border-b ${
        isMobile ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="relative z-10 flex flex-col py-7 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)_3rem] lg:items-center lg:gap-8 lg:py-10">
        <div className="flex items-baseline gap-5 transition-transform duration-500 group-hover:translate-x-3 lg:gap-10">
          <span className="font-mono text-accent/55 text-xs">{data.id}</span>
          <h3 className="font-semibold text-3xl text-foreground-muted leading-none tracking-normal transition-colors duration-300 group-hover:text-foreground sm:text-4xl lg:text-5xl">
            {data.title}
          </h3>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5 pl-11 lg:mt-0 lg:pl-0">
          <div>
            <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal transition-colors">
              {data.tag}
            </span>
            <p className="mt-2 max-w-md font-inter text-foreground-subtle text-sm leading-6 transition-colors group-hover:text-foreground-muted">
              {data.description}
            </p>
          </div>

          <div className="block shrink-0 text-foreground-subtle lg:hidden">
            {isActive ? <Minus size={18} /> : <Plus size={18} />}
          </div>
        </div>

        <motion.div
          animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
          className="hidden justify-self-end text-accent lg:block"
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
    </Reveal>
  );
}
