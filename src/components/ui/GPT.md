# UI Components Context

Esta pasta contem componentes base shadcn/radix genericos.

## Regra principal

- Nao coloque identidade visual especifica do portfolio aqui.
- Nao adicione copy publica, links de negócio, dados de contato ou estilos fortemente ligados a uma secao.
- Se precisar de um componente com marca do portfolio, crie fora de `ui`.

## Cores

- Mesmo em componentes base, prefira tokens do `globals.css` (`background`, `foreground`, `border`, `ring`, `accent`, etc.) em vez de cores hardcoded.
- Preserve compatibilidade com shadcn e estados como `aria-invalid`, `disabled`, `focus-visible`.

## formulários

- `form.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx` sao a base para formulários.
- formulários de negócio devem usar React Hook Form + Zod fora desta pasta.
- Componentes base devem continuar genericos e acessiveis.

## Alteracoes

- Evite mexer nesta pasta para ajustes de uma secao especifica.
- Se alterar comportamento base, rode `bun run lint` e `bun run build` e verifique se ContactSection e demais formulários continuam funcionando.
