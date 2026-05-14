"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

type FaqItem = {
  answer: string;
  id: string;
  question: string;
};

const faqItems: FaqItem[] = [
  {
    id: "01",
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "Depende do escopo. Um site institucional costuma levar menos tempo do que uma plataforma com painel, API e integracoes. Depois do briefing, eu defino etapas, prazo e prioridades com clareza.",
  },
  {
    id: "02",
    question: "Voce desenvolve o design e o codigo?",
    answer:
      "Sim. Posso cuidar da estrutura visual, experiencia de uso, desenvolvimento front-end, back-end, banco de dados e deploy, mantendo tudo alinhado ao objetivo do negocio.",
  },
  {
    id: "03",
    question: "Meu site vai funcionar bem no celular?",
    answer:
      "Sim. Os projetos sao pensados para mobile e desktop desde o inicio, com layout responsivo, boa leitura, performance e interacoes adequadas para cada tamanho de tela.",
  },
  {
    id: "04",
    question: "Voce tambem faz SEO?",
    answer:
      "Sim. Trabalho SEO tecnico, estrutura de paginas, performance, metadados e boas praticas para ajudar o site a ser melhor compreendido por buscadores.",
  },
  {
    id: "05",
    question: "Consigo editar conteudos depois da entrega?",
    answer:
      "Quando o projeto pede isso, posso criar painel administrativo, integracao com CMS ou uma estrutura simples de conteudo para facilitar atualizacoes futuras.",
  },
  {
    id: "06",
    question: "Como comecamos um projeto?",
    answer:
      "O primeiro passo e uma conversa para entender objetivo, publico, funcionalidades e referencias. A partir disso, eu organizo a proposta e o caminho de execucao.",
  },
];

export function FaqSection() {
  const [activeId, setActiveId] = React.useState<string | null>(
    faqItems[0]?.id ?? null,
  );

  return (
    <section className="relative bg-zinc-950 px-5 py-20 text-zinc-50 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 border-white/10 border-t pt-14 md:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:pt-20">
        <header className="md:sticky md:top-10 md:self-start">
          <p className="mb-5 font-inter font-semibold text-lime-300 text-sm uppercase tracking-normal">
            FAQ
          </p>
          <h2 className="max-w-xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
            Perguntas frequentes
          </h2>
          <p className="mt-6 max-w-md font-inter text-lg text-zinc-400 leading-8">
            Algumas respostas rapidas para entender o processo, o escopo e como
            eu conduzo projetos digitais do briefing ao deploy.
          </p>
        </header>

        <div className="flex flex-col">
          {faqItems.map((item) => (
            <FaqRow
              key={item.id}
              data={item}
              isActive={activeId === item.id}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({
  data,
  isActive,
  setActiveId,
}: {
  data: FaqItem;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
}) {
  return (
    <article className="group border-white/10 border-t transition-colors duration-500 last:border-b">
      <button
        type="button"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${data.id}`}
        onClick={() => setActiveId(isActive ? null : data.id)}
        className="flex w-full items-start gap-5 py-7 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:gap-8 md:py-9"
      >
        <span className="mt-1 shrink-0 font-mono text-lime-300/55 text-xs">
          {data.id}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-bebas-neue text-3xl text-zinc-300 leading-none tracking-normal transition-colors group-hover:text-zinc-50 sm:text-4xl lg:text-5xl">
            {data.question}
          </span>
        </span>

        <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-500 transition-colors group-hover:border-lime-300/50 group-hover:text-lime-300">
          {isActive ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isActive ? (
          <motion.div
            id={`faq-answer-${data.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-10 font-inter text-base text-zinc-400 leading-7 md:pb-9 md:pl-16 md:text-lg md:leading-8">
              {data.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
