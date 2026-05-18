# Home Components Context

Esta pasta contem secoes e pecas especificas da home. A home deve ser construida por secoes independentes para manter manutencao e reuso simples.

## Regra de composicao

- Cada nova area da home deve ter arquivo proprio nesta pasta.
- `src/app/page.tsx` deve apenas importar e renderizar as secoes.
- Preserve a ordem atual da home salvo pedido explicito: `HeroSection`, `AboutSection`, `ServicesShowcase`, `ProjectsSection`, `TestimonialsSection`, `FaqSection`, `BlogSection`, `ContactSection`, `SiteFooter`.
- Copy publica sempre em portugues do Brasil.

## Cores e tokens

- Use `globals.css` como fonte de verdade para cores.
- Novas classes devem preferir tokens globais como `bg-background`, `text-foreground`, `text-accent`, `bg-accent`, `text-accent-foreground`, `border-border`, `ring-ring`.
- Existem classes antigas com `zinc-950`, `lime-300`, `white/10`; nao amplie esse padrao sem necessidade. O projeto sera migrado depois para tokens globais.

## Secoes

### HeroSection

Primeira secao da pagina inicial. Deve continuar focada em:

- Apresentacao de Henrique Albuquerque.
- Proposta de valor em desenvolvimento fullstack.
- CTAs usando `PortfolioButton`.
- Estatisticas curtas.
- Links sociais.
- Visual de retrato usando `ProfileVisual`.

Nao coloque componentes de outras secoes dentro de `HeroSection`.

### AboutSection

Secao "Sobre mim" com texto breve, metricas e links ghost:

- `2+` anos de experiencia.
- `20+` clientes atendidos.
- WhatsApp: `https://wa.me/5519994012785`.
- E-mail: `mailto:contato@henriquealbuquerque.dev`.
- Link futuro: `/sobre-mim`.

### ServicesShowcase

Secao "Solucoes digitais que eu entrego". Nasceu do antigo `KineticTeamHybrid`, mas agora e especifica de servicos.

- Mantem mecanica cinetica no desktop: hover em cada linha mostra imagem flutuante.
- No mobile, toque expande o item e mostra a imagem.
- Servicos atuais: Sites sob medida, aplicações Full Stack, SEO e Performance, APIs e integrações.
- Imagens locais:
  - `/images/web-custom.jpeg`
  - `/images/fullstack.jpeg`
  - `/images/seo.jpeg`
  - `/images/api.jpeg`
- Nao reintroduza dados de time, nomes ficticios ou imagens externas Unsplash.

### ProjectsSection

Secao "Projetos em destaque".

- Grid de no maximo 2 colunas.
- Cards nao sao links por enquanto.
- Cada card tem imagem grande, tag, nome e descricao.
- Imagens principais:
  - `/images/projects/jaber-seguros/jaber-main.webp`
  - `/images/projects/coimcamp/coimcamp-main.webp`
  - `/images/projects/achadinho-preferido/achadinho-main.webp`
  - `/images/projects/arcane/arcane-main.webp`

### TestimonialsSection

Secao de depoimentos inspirada em referencia visual com titulo grande, cards escuros com estrelas e cards metricos.

- Grid: 1 coluna no mobile, 2 em `md`, 3 em telas grandes.
- Depoimentos atuais sao editaveis e ligados aos projetos, nao necessariamente depoimentos reais.

### FaqSection

FAQ client-side com accordion.

- Reaproveita harmonia visual do `ServicesShowcase`: numero, pergunta grande, plus/minus e expansao animada.
- A coluna com titulo e descricao deve ficar `sticky` a partir de `md`.
- Pode abrir/fechar itens; preserve acessibilidade com `aria-expanded` e `aria-controls`.

### BlogSection

Secao "Insights, tutoriais e recursos".

- Deve renderizar depois do FAQ.
- Contem array local com 7 posts, mas renderiza apenas os 2 primeiros na home.
- Cards nao sao links por enquanto.
- Botao outline aponta para `/blog`.
- Imagens ainda nao existem; use placeholder visual "Imagem em breve" ate o usuario fornecer assets.
- conteúdo dos posts deve orbitar insights, tutoriais e recursos.

### ContactSection

Secao final antes do footer.

- Layout mobile em coluna, com `ProfileVisual` variante `code` acima e formulário abaixo.
- A partir de `md`, layout em duas colunas.
- Usa React Hook Form + Zod + `zodResolver`.
- Campos:
  - Nome obrigatorio.
  - E-mail obrigatorio e valido.
  - Servico obrigatorio: website, webapp, e-commerce, API, "Ainda não sei ao certo".
  - Descricao opcional.
- Submit e simulado: aguarda 1 segundo, mostra spinner via `isSubmitting`, depois troca para sucesso.
- Troca formulário/sucesso deve ser suave com `AnimatePresence mode="wait"` e fade-in/fade-out.
- Sucesso mostra "Mensagem enviada", texto claro, link WhatsApp e botao para enviar outra mensagem.
- Nao ha backend, server action, envio de e-mail ou envio automatico por WhatsApp.

## ProfileVisual

Componente visual do retrato. Aceita:

- `variant`: `code`, `message`, `caption`.
- `imageSrc`: caminho customizavel da imagem.
- `className`: ajustes de layout vindos do consumidor.
- Props adicionais podem existir por evolucao local, como uso especifico no contato; preserve antes de refatorar.

Comportamento importante:

- Usa `next/image` com `fill`.
- Mantem moldura arredondada, sombra forte e detalhes de acento.
- Variantes com selo circular usam animação vertical em `src/app/globals.css` com classes `profile-badge-copy` e `profile-badge-icon`.

## Padroes de secao

- Use borda superior discreta para separar blocos.
- Use headings grandes em Bebas Neue e textos de apoio em Inter.
- Evite cards aninhados.
- Verifique mobile e desktop para evitar quebra de texto e sobreposicao.
