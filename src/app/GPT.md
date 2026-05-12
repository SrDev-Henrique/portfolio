# App Router Context

Esta pasta usa o App Router do Next.js. Antes de mexer em convencoes de paginas, layouts, metadata, imagens, fontes, server/client components ou roteamento, leia os docs locais em `node_modules/next/dist/docs/`.

## Estrutura

- `layout.tsx`: layout raiz em `pt-BR`, aplica `dark`, renderiza `TVStaticCanvas` e carrega `globals.css`.
- `page.tsx`: home. Deve permanecer leve e delegar secoes para componentes em `src/components/home`.
- `preview/page.tsx`: vitrine de componentes. Sempre que um componente visual de marca for criado ou ganhar variante, adicione um exemplo aqui.
- `globals.css`: tokens globais, fontes locais, base shadcn/Tailwind e keyframes globais.

## Regras para paginas

- Paginas devem compor secoes, nao concentrar markup complexo.
- Use `main` como container de pagina.
- Mantenha o fundo escuro e a linguagem visual consistente com a home.
- Texto publico deve estar em portugues do Brasil.
- A pagina `/preview` e ferramenta interna de alinhamento visual; mantenha objetiva, com nome do componente, descricao curta, variante e demonstracao.

## Globals

- Nao remova imports do Tailwind, `tw-animate-css` ou `shadcn/tailwind.css`.
- Fontes sao locais via `@font-face`; nao volte para `next/font/google` sem necessidade clara.
- Keyframes globais devem ter nomes especificos do componente para evitar colisoes.
