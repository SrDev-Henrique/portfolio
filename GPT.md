# Portfolio Context

Este projeto e o portfolio pessoal de Henrique Albuquerque, feito com Next.js 16, React 19, Tailwind CSS v4, shadcn/radix, Motion, React Hook Form, Zod e Bun.

## Regra obrigatoria de Next.js

Antes de alterar API, convencao de rota, imagem, metadata, fonte, cache, server/client component ou estrutura do App Router, leia o guia relevante em `node_modules/next/dist/docs/`. Esta versao do Next.js pode divergir do conhecimento previo do agente.

## Direcao de produto

- A home deve comunicar desenvolvimento full stack, websites, webapps, e-commerce, APIs, performance, SEO e foco em resultado.
- O tom público deve ser portugues do Brasil, direto, vendavel e profissional.
- A experiencia deve parecer um portfolio premium, escuro, tecnico e editorial, nao uma landing generica.
- Cada nova area da home deve virar uma secao independente em `src/components/home`.
- Evite inventar backend, envio real, rotas internas ou páginas novas quando o pedido for apenas criar a secao visual.

## Direcao visual

- Use as cores vindas de `src/app/globals.css` como fonte de verdade. A direcao daqui em diante e migrar classNames para tokens como `bg-background`, `text-foreground`, `bg-accent`, `text-accent`, `text-accent-foreground`, `border-border`, `ring-ring`, etc.
- Temporariamente ainda existem classes Tailwind diretas como `zinc-950`, `lime-300` e `white/10`; ao editar, prefira aproximar novas decisoes aos tokens globais em vez de espalhar mais cores hardcoded.
- `accent` e a cor principal de destaque. Em modo escuro, ela representa o verde/lime eletrico da identidade.
- Titulos usam Bebas Neue; texto, links, botoes, labels e inputs usam Inter.
- A interface usa fundo escuro, contraste alto, ruido global via `TVStaticCanvas`, bordas discretas, glow controlado e CTAs arredondados.
- Nao use cards dentro de cards. Cards sao apropriados para itens repetidos, previews, depoimentos, posts e ferramentas claramente emolduradas.
- Evite decoracoes abstratas sem funcao, gradientes excessivos e paletas novas.
- Tudo deve funcionar em mobile e desktop sem texto cortado, sobreposto ou dependente de escala por viewport.

## Estado atual da home

A home em `src/app/page.tsx` compoe, nesta ordem:

1. `HeroSection`
2. `AboutSection`
3. `ServicesShowcase`
4. `ProjectsSection`
5. `TestimonialsSection`
6. `FaqSection`
7. `BlogSection`
8. `ContactSection`
9. `SiteFooter`

Preserve essa ordem a menos que o usuario peca explicitamente outra organizacao.

## conteúdo e contatos

- Nome público: Henrique Albuquerque.
- WhatsApp: `(19) 99401-2785`
- Link WhatsApp: `https://wa.me/5519994012785`
- E-mail atual: `halbuquerque2850@gmail.com`
- Link e-mail: `mailto:halbuquerque2850@gmail.com`
- Link sobre mim planejado: `/sobre-mim`
- Link blog planejado: `/blog`

## Secoes ja criadas

- **Sobre mim**: texto breve, `2+` anos de experiencia e `20+` clientes atendidos, links ghost para WhatsApp, e-mail e `/sobre-mim`.
- **Servicos**: `ServicesShowcase`, baseado no antigo `KineticTeamHybrid`, com linhas interativas e imagens locais de servicos.
- **Projetos**: grid com ate 2 colunas, imagem grande, nome, tag e descricao. Cards nao sao links por enquanto.
- **Depoimentos**: inspirado em layout de cards escuros com estrelas e cards metricos; grid 1/2/3 por breakpoint.
- **FAQ**: accordion client-side inspirado na interacao mobile de `ServicesShowcase`; coluna de titulo sticky a partir de `md`.
- **Blog**: lista local com 7 posts, renderiza apenas 2 na home; imagens sao placeholders ate o usuario fornecer assets.
- **Contato**: formulário client-side com React Hook Form + Zod, envio simulado de 1 segundo, spinner durante submit, sucesso com `AnimatePresence`.
- **Footer**: usa `bg-accent` e inclui e-mail, WhatsApp, links rápidos e copyright.

## Implementacao

- Use `PortfolioButton` para CTAs de marca.
- Use `next/image` para imagens locais renderizadas na UI.
- Use Motion para transicoes e interacoes ja estabelecidas, especialmente onde ja existe padrao com `AnimatePresence`.
- Use `react-hook-form` + `zod` para formulários com validacao.
- Use `cn` de `src/lib/utils.ts` para combinar classes.
- `src/components/ui` deve permanecer generico; estilos especificos do portfolio ficam fora dela.
- Se um componente visual tiver variantes reutilizaveis, adicione ou atualize preview em `/preview`.

## Validacao

Antes de encerrar alteracoes de código, rode:

```bash
bun run lint
bun run build
```

Para mudancas visuais importantes, verifique no navegador em desktop e mobile quando possivel.
