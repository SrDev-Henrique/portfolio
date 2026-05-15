# App Router Context

Esta pasta usa o App Router do Next.js. Antes de mexer em convencoes de páginas, layouts, metadata, imagens, fontes, server/client components ou roteamento, leia os docs locais em `node_modules/next/dist/docs/`.

## Estrutura

- `layout.tsx`: layout raiz em `pt-BR`, aplica `dark`, renderiza providers globais e carrega `globals.css`.
- `page.tsx`: home. Deve permanecer leve e apenas compor secoes vindas de `src/components/home` e componentes estruturais como `SiteFooter`.
- `preview/page.tsx`: vitrine interna de componentes e variantes.
- `preview/services-showcase/page.tsx`: preview especifico do `ServicesShowcase`.
- `globals.css`: tokens globais, fontes locais, base shadcn/Tailwind e keyframes globais.

## Regras de pagina

- páginas devem compor secoes, nao concentrar markup complexo.
- Use `main` como container de pagina.
- Texto público deve estar em portugues do Brasil.
- Mantenha a home na ordem atual salvo pedido explicito do usuario: Hero, Sobre, Servicos, Projetos, Depoimentos, FAQ, Blog, Contato, Footer.
- Nao crie rotas como `/blog`, `/sobre-mim` ou páginas de projeto apenas porque ha links apontando para elas; crie somente quando solicitado.

## Globals e cores

- Nao remova imports do Tailwind, `tw-animate-css` ou `shadcn/tailwind.css`.
- Fontes sao locais via `@font-face`; nao volte para `next/font/google` sem necessidade clara.
- Keyframes globais devem ter nomes especificos do componente para evitar colisoes.
- Use os tokens de cor definidos em `globals.css` como fonte de verdade. Novos estilos devem preferir classes como `bg-background`, `text-foreground`, `bg-accent`, `text-accent`, `text-accent-foreground`, `border-border` e `ring-ring`.
- Ainda ha classes antigas com `zinc`, `lime` e `white/..`; elas serao migradas depois. Ao tocar em uma secao, evite introduzir novas cores hardcoded se houver token global equivalente.

## Preview

- `/preview` e ferramenta interna de alinhamento visual; mantenha objetiva, com nome do componente, descricao curta, variante e demonstracao.
- Nem toda secao da home precisa preview. Priorize componentes reutilizaveis, componentes com variantes ou interacoes importantes.
