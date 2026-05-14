# Components Context

Componentes deste projeto se dividem em:

- Componentes de marca do portfolio, diretamente em `src/components`.
- Componentes de secao em `src/components/home`.
- Componentes base shadcn em `src/components/ui`.
- Componentes de preview em `src/components/preview`.

## Regra principal

Nao coloque estilos especificos do portfolio dentro de `src/components/ui`. Essa pasta deve continuar generica e reaproveitavel. Para identidade visual do portfolio, crie componentes proprios fora de `ui`, como `PortfolioButton`, `PortfolioStat`, secoes de home e `SiteFooter`.

## Cores e design tokens

- Use as cores do `globals.css` como orientacao principal.
- Novos componentes devem preferir `accent`, `accent-foreground`, `background`, `foreground`, `border`, `ring`, `muted` e tokens relacionados em vez de cores Tailwind soltas.
- Classes como `zinc-950`, `lime-300`, `white/10` aparecem por historico do projeto, mas a direcao e migrar gradualmente para tokens globais.
- CTAs de marca devem usar `PortfolioButton`.
- Links ghost normalmente usam texto claro com hover em `text-accent`.
- Preserve fundo escuro, bordas discretas, glow sutil e tipografia Bebas Neue + Inter.

## Padroes de componente

- Use TypeScript com props pequenas e explicitas.
- Use `cn` para mesclar classes.
- Use `class-variance-authority` quando houver variantes reais de design.
- Exporte componentes nomeados.
- Aceite `className` quando o componente precisar ser posicionado por uma secao ou preview.
- Use `lucide-react` para icones por padrao. Hugeicons foi usado no contato para WhatsApp; preserve se ja estiver aplicado.
- Use `next/image` para imagens locais.
- Use Motion para interacoes ja estabelecidas: accordions, fades, hovers e transicoes entre estados.

## Componentes estruturais

- `PortfolioButton`: CTA de marca, com variantes `primary`, `outline`, `outline-green` e tamanhos `sm`, `default`, `lg`.
- `PortfolioStat`: bloco visual de metricas/features.
- `SiteFooter`: footer da home, deve usar `bg-accent` e incluir e-mail e WhatsApp.
- `TVStaticCanvas`/canvas de ruido: textura global do layout.
- `SmoothScrollProvider`: provider client-side para rolagem suave, quando presente no layout.

## Preview

Todo componente visual novo com variantes ou uso recorrente deve aparecer em `/preview`. O padrao:

- Nome do componente.
- Descricao curta.
- Cada variante dentro de bloco com nome e props relevantes.
- Demonstracao em fundo escuro.
