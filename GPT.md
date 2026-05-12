# Portfolio Context

Este projeto e um portfolio pessoal de Henrique Albuquerque, feito com Next.js 16, React 19, Tailwind CSS v4, shadcn/radix para base de UI e Bun como runtime de scripts.

## Regra obrigatoria de Next.js

Antes de alterar qualquer API, convencao de rota, imagem, metadata, fonte, cache, server/client component ou estrutura do App Router, leia o guia relevante em `node_modules/next/dist/docs/`. Este projeto usa uma versao de Next com mudancas que podem divergir do conhecimento previo do agente.

## Objetivo de produto

Construir uma home de portfolio com visual premium, escuro, tecnico e editorial, comunicando desenvolvimento fullstack, performance, websites, webapps e e-commerce. A pagina deve parecer uma experiencia real de portfolio, nao uma landing generica.

O usuario quer construir o projeto por componentes reutilizaveis. Cada secao nova deve virar componente proprio, e componentes visuais importantes devem ser incluidos em `/preview` com suas variantes.

## Direcao visual

- Base escura: `zinc-950`, preto transluscido, bordas brancas com baixa opacidade.
- Cor de destaque: verde/lime eletrico, principalmente `lime-300`.
- Tipografia local: titulos usam Bebas Neue; texto, links, botoes e inputs usam Inter.
- Visual deve ter contraste, glow controlado, bordas arredondadas grandes em elementos de marca, e ruido de fundo via `TVStaticCanvas`.
- Evite aparencia de template SaaS comum. O portfolio deve ter personalidade, mas continuar limpo.
- Nao use cards dentro de cards. Use cards apenas para previews, itens repetidos ou ferramentas claramente emolduradas.
- Prefira icones `lucide-react`.
- Elementos devem ser responsivos sem quebrar texto, sobrepor conteudo ou depender de escala por viewport.

## Metodos de implementacao

- Componentize sempre que uma peca visual for reutilizavel ou tiver variantes.
- Para variantes de estilo, use `class-variance-authority` quando o componente tiver mais de um estado visual relevante.
- Use `cn` de `src/lib/utils.ts` para combinar classes Tailwind.
- Prefira props simples e explicitamente tipadas. Exemplo: `variant`, `size`, `imageSrc`, `className`.
- Para imagens locais renderizadas na UI, use `next/image`.
- Para animacoes simples e globais, use keyframes em `src/app/globals.css` com classes semanticas.
- Para CTAs de marca, use `PortfolioButton`, nao `src/components/ui/button.tsx`.
- Mantenha `src/components/ui` como base shadcn generica. Nao misture identidade visual especifica do portfolio ali.
- Depois de criar ou alterar componente visual, adicione sua demonstracao em `/preview`.

## Paginas atuais

- `/`: home, atualmente renderiza `HeroSection`.
- `/preview`: vitrine interna de componentes e variantes. Deve crescer junto com o design system.

## Componentes atuais

- `HeroSection`: primeira secao da home.
- `ProfileVisual`: frame da foto com variantes `code`, `message`, `caption`.
- `PortfolioButton`: botao de marca com variantes `primary`, `outline`, `outline-green`.
- `ComponentPreviewSection`: wrapper da pagina `/preview` para listar componentes.
- `TVStaticCanvas`: ruido visual fixo no layout global.

## Assets

- Foto temporaria do Hero: `public/images/hero-profile-reference.png`.
- Fontes locais:
  - `public/fonts/bebas-neue-v16-latin-regular.woff2`
  - `public/fonts/inter-v20-latin-regular.woff2`
  - `public/fonts/inter-v20-latin-500.woff2`
  - `public/fonts/inter-v20-latin-600.woff2`
  - `public/fonts/inter-v20-latin-700.woff2`

Evite depender de `next/font/google`, pois builds em ambiente sem rede podem falhar. Use as fontes locais ja configuradas em `globals.css`.

## Validacao

Antes de encerrar uma alteracao de codigo, rode:

```bash
bun run lint
bun run build
```

Se houver alteracao visual importante, tente verificar localmente no navegador. A rota de desenvolvimento comum e `http://127.0.0.1:3001` ou outra porta livre.
