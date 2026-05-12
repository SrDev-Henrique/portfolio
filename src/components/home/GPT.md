# Home Components Context

Esta pasta contem secoes e pecas especificas da home. A home deve ser construida por secoes independentes para manter manutencao e reuso simples.

## HeroSection

`HeroSection` e a primeira secao da pagina inicial. Ela deve continuar focada em:

- Apresentacao de Henrique Albuquerque.
- Proposta de valor em desenvolvimento fullstack.
- CTAs usando `PortfolioButton`.
- Estatisticas curtas.
- Links sociais.
- Visual de retrato usando `ProfileVisual`.

Nao coloque componentes de outras secoes dentro de `HeroSection`. Novas areas da home devem virar novos componentes no mesmo escopo ou em subpastas.

## ProfileVisual

`ProfileVisual` e o componente visual do retrato. Ele aceita:

- `variant`: `code`, `message`, `caption`.
- `imageSrc`: caminho customizavel da imagem.
- `className`: ajustes de layout vindos do consumidor.

Comportamento importante:

- Usa `next/image` com `fill`.
- Mantem moldura arredondada, sombra forte e detalhes lime.
- Variantes com selo circular usam animacao em que texto e icone alternam verticalmente dentro de uma area com `overflow-hidden`.
- A animacao fica em `src/app/globals.css` com classes `profile-badge-copy` e `profile-badge-icon`.

## Ao criar novas secoes da home

- Crie um arquivo proprio, por exemplo `services-section.tsx`, `projects-section.tsx` ou `process-section.tsx`.
- Importe a secao em `src/app/page.tsx` ou em um componente compositor da home quando a pagina crescer.
- Mantenha copy em portugues do Brasil.
- Use a mesma linguagem visual: fundo escuro, contraste alto, bordas discretas, lime como acento.
- Se a secao criar um componente reutilizavel ou variante visual, registre em `/preview`.
