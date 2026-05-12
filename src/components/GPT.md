# Components Context

Componentes deste projeto se dividem em tres grupos:

- Componentes de marca do portfolio, diretamente em `src/components` ou em subpastas por secao.
- Componentes de secao, como `src/components/home`.
- Componentes base shadcn em `src/components/ui`.

## Regra principal

Nao coloque estilos especificos do portfolio dentro de `src/components/ui`. Essa pasta deve continuar generica e reaproveitavel. Para a identidade visual do portfolio, crie componentes proprios, como `PortfolioButton`.

## Padroes de componente

- Use TypeScript com props pequenas e explicitas.
- Use `cn` para mesclar classes.
- Use `class-variance-authority` quando houver variantes reais de design.
- Exporte componentes nomeados.
- Aceite `className` quando o componente precisar ser posicionado por uma secao ou preview.
- Use `lucide-react` para icones.
- Botoes e links de CTA da marca devem usar `PortfolioButton`.

## Design skills

- Preserve a paleta escura com lime como destaque.
- Trabalhe com glow sutil, bordas `white/10` ou `white/25`, e fundos transluscidos.
- Botoes de marca sao arredondados, com icone de seta no lado direito.
- Evite excesso de gradientes e decoracoes abstratas sem funcao.
- Cada componente deve funcionar em mobile e desktop sem texto cortado ou sobreposto.

## Preview obrigatorio

Todo componente visual novo ou variante nova deve aparecer em `/preview`. O padrao atual e:

- Nome do componente.
- Descricao curta.
- Cada variante dentro de um bloco com o nome e `variant="..."`.
- Demonstracao real do componente em fundo escuro.

## Componentes existentes

- `PortfolioButton`
  - Variantes: `primary`, `outline`, `outline-green`.
  - Tamanhos: `sm`, `default`, `lg`.
  - Renderiza `button` por padrao e `a` quando recebe `href`.

- `ComponentPreviewSection`
  - Wrapper visual da pagina `/preview`.

- `TVStaticCanvas`
  - Canvas client-side usado no layout global para textura de ruido.
