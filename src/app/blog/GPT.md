# Blog Guidelines

Este arquivo orienta alterações em `src/app/blog` e no conteúdo usado pelas páginas do blog. Siga estas regras para manter harmonia visual, consistência editorial e geração estática previsível.

## Escopo

- A listagem do blog vive em `src/app/blog/page.tsx`.
- A página de post vive em `src/app/blog/[slug]/page.tsx`.
- O conteúdo dos posts vive em `src/content/blog-posts.ts`.
- Cards reutilizáveis devem continuar em componentes compartilhados, especialmente `src/components/blog-post-card.tsx`.

Evite espalhar conteúdo editorial dentro das páginas de rota. As rotas devem organizar layout, metadados, animação e renderização.

## Modo De Agir

- Preserve a estrutura existente antes de criar uma nova.
- Leia os tipos em `src/content/blog-posts.ts` antes de editar posts.
- Mantenha o texto em português brasileiro, com acentuação correta, tom profissional e leitura leve.
- Escreva para pessoas que avaliam tecnologia, produto, presença digital, SEO, performance e decisões de implementação.
- Prefira explicações concretas, com exemplos e contexto prático. Evite copy genérica.
- Não invente números, métricas, clientes, rankings, prêmios ou resultados.
- Quando citar tecnologias, explique o impacto para o leitor, não apenas a ferramenta usada.

## Estrutura De Conteúdo

Cada post deve seguir o contrato `BlogPost`:

- `id`: identificador único e estável.
- `slug`: URL curta, em minúsculas, com hífens e sem acentos.
- `tag`: use apenas `"Insight"`, `"Recurso"` ou `"Tutorial"`.
- `date`: data legível em português brasileiro.
- `dateTime`: data em formato ISO, como `2026-05-16`.
- `readTime`: estimativa curta, como `6 min de leitura`.
- `title`: título claro, específico e forte.
- `description`: resumo útil para listagem, SEO e redes sociais.
- `image`: caminho local da imagem, preferencialmente em `/images/blog/...`.
- `imageAlt`: texto alternativo contextual, sem repetir apenas o título.
- `content`: seções com `heading`, `paragraphs` e, quando fizer sentido, `bullets`.
- `references`: links confiáveis usados no post.

Use seções curtas e escaneáveis. Um bom post costuma ter:

1. Abertura com contexto e problema.
2. Desenvolvimento com decisões, exemplos ou critérios.
3. Fechamento com síntese prática.
4. Referências quando houver afirmações técnicas, pesquisas ou fontes externas.

## Referências

- Inclua referências reais e relevantes.
- Prefira documentação oficial, artigos técnicos reconhecidos, estudos, relatórios ou fontes primárias.
- Não inclua links decorativos.
- Não cite uma fonte se o texto não depende dela.
- Para temas técnicos atuais, confira a documentação oficial antes de escrever.

## Layout Da Listagem

A listagem deve manter a composição atual:

- `main` com espaçamento amplo no topo e respiro inferior.
- Container interno em `max-w-7xl`.
- Cabeçalho com label, título grande e subtítulo curto.
- Primeiro post em destaque vindo de `getMainBlogPost()`.
- Demais posts vindos de `getSecondaryBlogPosts()`.
- Cards renderizados por `BlogPostCard`.

Não crie uma landing page de marketing para o blog. A primeira tela deve mostrar conteúdo editorial de verdade.

## Layout Do Post

A página de post deve preservar:

- `generateStaticParams()` usando `getBlogPostSlugs()`.
- `generateMetadata()` usando título, descrição, imagem e dados do post.
- `notFound()` para slugs inválidos.
- Link de retorno para `/blog`.
- Cabeçalho com tag, data, tempo de leitura, título e descrição.
- Imagem principal com `next/image`.
- Conteúdo em largura confortável para leitura (`max-w-3xl`).
- Referências ao final, quando existirem.
- Posts relacionados usando `getFeaturedBlogPosts(post.id)`.

Não remova a geração estática nem transforme a página em client component sem necessidade real.

## Animação

- Use o componente `Reveal` para entradas principais.
- Anime blocos relevantes: cabeçalho, imagem hero, seções de conteúdo, referências e relacionados.
- Não anime cada parágrafo individualmente.
- Mantenha delays discretos e consistentes.
- Para seções de artigo, `Reveal as="section"` é apropriado.

## Design Visual

- Use os tokens globais já existentes, como `background`, `foreground`, `muted-foreground`, `foreground-muted`, `foreground-subtle`, `accent`, `border`, `surface` e `ring`.
- Não introduza paletas paralelas, gradientes decorativos, bolhas, ornamentos ou fundos chamativos.
- Evite cards dentro de cards.
- Use cards apenas onde já existe esse padrão, como previews de posts.
- Preserve cantos moderados. `rounded-lg` é suficiente para imagens e cards existentes.
- Garanta foco visível com `focus-visible`.
- Mantenha textos legíveis em mobile e desktop.
- Não use tamanhos de fonte baseados em largura de viewport.
- Não use letter-spacing negativo.

## Imagens

- Use imagens locais sempre que possível.
- Prefira caminhos públicos estáveis, como `/images/blog/nome-da-imagem.webp`.
- Use `next/image` nas rotas e componentes React.
- Defina `alt` específico e útil.
- Não use imagens externas sem verificar configuração e necessidade.
- Não invente imagens que ainda não existem.
- Se faltar imagem, use uma existente coerente ou ajuste o conteúdo para não depender dela.

## SEO E Metadados

- O título da metadata deve seguir o padrão `${post.title} | Henrique Albuquerque`.
- A descrição deve usar `post.description`.
- Open Graph deve usar `type: "article"` em posts.
- Preserve `publishedTime`, `authors`, imagem e texto alternativo quando disponíveis.
- Slugs são contratos públicos: altere apenas quando for intencional.

## Código E Manutenção

- Não duplique lógica de busca de posts dentro das páginas.
- Reuse helpers de `src/content/blog-posts.ts`.
- Não adicione estado de cliente para renderização puramente editorial.
- Não altere componentes globais para resolver um detalhe isolado do blog.
- Se precisar de novo padrão visual, crie algo pequeno, reutilizável e compatível com o design atual.
- Mantenha imports organizados e compatíveis com o formatador do projeto.

## Validação Recomendada

Depois de alterar conteúdo ou layout do blog, valide:

```bash
bunx biome check src/app/blog/page.tsx "src/app/blog/[slug]/page.tsx" src/content/blog-posts.ts
bun run build
```

Quando a mudança afetar layout, confira também:

- `/blog` em desktop e mobile.
- Pelo menos um post em `/blog/[slug]`.
- Imagem principal, links de referência, posts relacionados e espaçamentos.

`bun run lint` pode ser útil, mas registre falhas preexistentes fora do escopo em vez de misturá-las com a alteração do blog.
