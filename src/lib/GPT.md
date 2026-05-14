# Lib Context

Esta pasta contem utilitarios compartilhados.

## Regras

- Mantenha helpers pequenos, genericos e sem dependencias de copy publica.
- `utils.ts` contem `cn`, usado para combinar classes. Reutilize esse helper em componentes com `className` dinamico.
- Nao coloque dados de secoes, contatos, posts, projetos ou configuracoes visuais especificas aqui sem pedido explicito.

## Cores

- Decisoes de cor e tokens pertencem a `src/app/globals.css` e aos componentes consumidores, nao a `src/lib`.
