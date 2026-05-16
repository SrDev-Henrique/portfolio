**Work case de portfólio** — site imersivo sobre a série *Arcane* (Riot Games / Netflix)  
**Autor:** SrDev Henrique  
**Repositório:** [github.com/SrDev-Henrique/Arcane_Project](https://github.com/SrDev-Henrique/Arcane_Project)  
**Stack principal:** Next.js 15 · React 19 · TypeScript · SCSS Modules · Framer Motion · Lenis

> Projeto não oficial, desenvolvido para fins de portfólio, estudo e demonstração de habilidades em frontend moderno. Sem fins comerciais.

---

## Visão geral

**Arcane: Universo Interativo** é uma experiência web editorial que apresenta o universo de *Arcane* de forma cinematográfica: uma landing page longa com navegação por âncoras, microsites dedicados para dez personagens, exploradores de temporada em tela cheia e uma seção de extras com materiais promocionais e trilhas sonoras.

O projeto foi pensado como peça de portfólio de alto impacto visual — não como um blog ou wiki estático, mas como um **produto digital imersivo** em que scroll, motion design, tipografia e hierarquia de conteúdo trabalham juntos para transmitir a atmosfera de Piltover (claro, aristocrático, bege/dourado) e Zaun (escuro, industrial, `#0a0a0a`).

**Escala aproximada da codebase:**

| Métrica | Valor |
|--------|-------|
| Arquivos `.tsx`, `.ts`, `.scss` em `src/` | ~170 |
| Componentes React (`.tsx`) | ~76 |
| Módulos SCSS co-localizados | ~60 |
| Arquivos de variantes de animação (`anime.ts`) | 18 |
| Linhas em `Characters.ts` | ~2.070 |
| Linhas em `Temporadas.ts` | ~558 |
| Rotas públicas | 4 padrões (`/`, `/[character]`, `/temporada_1`, `/temporada_2`) |
| Personagens com página própria | 10 (SSG) |

---

## Contexto e objetivos

### Contexto

*Arcane* consolidou-se como referência em animação para games e streaming. O universo de Runeterra — em especial o contraste entre **Piltover** (cidade do progresso) e **Zaun** (subcidade da desigualdade) — oferece material rico para narrativa, identidade visual e interação.

### Objetivos do projeto

1. **Demonstrar domínio de frontend moderno** — App Router do Next.js, React 19, TypeScript estrito, componentização profunda e padrões de performance (SSG, code splitting).
2. **Entregar experiência memorável** — animações coordenadas, scroll suave, transições de rota customizadas e player de áudio por personagem.
3. **Organizar conteúdo denso de forma navegável** — dezenas de blocos de texto, imagens, episódios e highlights sem perder clareza.
4. **Servir como peça de portfólio** — apresentável a recrutadores, clientes e comunidade de entretenimento/games.

### Público-alvo

- Fãs da série que queiram explorar personagens e temporadas.
- Profissionais de UX, design e desenvolvimento avaliando competência técnica e sensibilidade estética.
- Curiosos sobre o universo de League of Legends / Arcane.

---

## O desafio

Construir um site que:

- **Não pareça um template** — identidade visual própria, tipografia customizada (11 famílias em `@font-face`), paleta temática por região.
- **Suporte muito conteúdo** — biografias longas, jornadas por temporada, listas de episódios com links Netflix, highlights em vídeo, playlists por personagem.
- **Mantenha fluidez** — scroll suave no desktop, transições entre rotas, vídeos no hero e em highlights sem travar a navegação.
- **Funcione em mobile e desktop** — Lenis desativado em mobile; vídeos e fullscreen adaptados; layouts com breakpoints de `$xs` (520px) a `$xxl` (1536px).
- **Separe apresentação de dados** — conteúdo editável em arquivos TypeScript tipados, UI reutilizável.

---

## A solução

### Arquitetura em camadas

```
┌─────────────────────────────────────────────────────────────┐
│  Apresentação (React + Framer Motion + SCSS Modules)        │
│  app/(sections) · app/[character] · components/             │
├─────────────────────────────────────────────────────────────┤
│  Estado global (Context API)                                │
│  MenuProvider · LenisProvider · View Transitions            │
├─────────────────────────────────────────────────────────────┤
│  Dados tipados (TypeScript)                                 │
│  data/Characters.ts · data/Temporadas.ts · data locais      │
├─────────────────────────────────────────────────────────────┤
│  Assets estáticos + CDN                                     │
│  public/images · public/audio · public/fonts                │
│  CloudFront (vídeos hero e highlights)                      │
└─────────────────────────────────────────────────────────────┘
```

### Modelo de navegação

| Rota | Comportamento |
|------|----------------|
| `/` | Single-page com 8 blocos: Hero → About → Piltover → Zaun → Temporadas → Extras → Outro (+ Header fixo) |
| `/[character]` | Microsite do personagem (abas: Perfil, Sobre, História) — **gerado estaticamente** |
| `/temporada_1` | Explorador Season 1 (episódios + highlights) |
| `/temporada_2` | Explorador Season 2 |

O grupo de rotas `(sections)` organiza componentes da home **sem afetar a URL** — padrão do App Router para manter `page.tsx` enxuto.

---

## Stack tecnológica

| Tecnologia | Papel no projeto |
|------------|------------------|
| **Next.js 15.3** | App Router, `generateStaticParams`, `next/image`, build de produção |
| **React 19** | Componentes client/server, hooks, estado local e global |
| **TypeScript 5** | Tipagem de personagens, temporadas e props de UI |
| **Sass Modules** | Estilos encapsulados por componente; tokens em `variables.scss` |
| **Framer Motion 12** | Scroll-linked animations, variants, `AnimatePresence`, `useInView` |
| **Lenis 1.3** | Scroll suave global (desktop); instâncias locais em História e Highlights |
| **next-view-transitions** | Transições de página com API View Transitions + animações custom |
| **react-device-detect** | Desativar Lenis e fullscreen em mobile |
| **react-icons** | Ícones de UI (menu, player, navegação) |
| **lodash.debounce** | Debounce em interações sensíveis ao resize/scroll |
| **classnames** | Composição condicional de classes SCSS |
| **ESLint 9** | Lint com `eslint-config-next` |

**Scripts npm:**

- `dev` — `next dev --turbo -H 0.0.0.0` (acesso em rede local)
- `build` / `start` / `lint` — pipeline padrão Next.js

---

## Estrutura do projeto

```
arcane_project/
├── public/
│   ├── fonts/          # circularweb, general, robert, zentry, lora, cinzel, playfair (.woff2)
│   ├── audio/          # {NomePersonagem}-{n}.m4a (playlists)
│   └── images/         # Regiões, personagens, temporadas, extras
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Providers, fonts, view transitions
│   │   ├── page.tsx                # Home (composição de seções)
│   │   ├── globals.css             # Reset, Lenis, view-transition, @font-face
│   │   ├── (sections)/             # Hero, About, Piltover, Zaun, Temporadas, Extras, Outro
│   │   ├── [character]/            # Páginas de personagem
│   │   ├── temporada_1/            # Season 1 fullscreen
│   │   └── temporada_2/            # Season 2 fullscreen
│   ├── components/                 # Header, Button, AnimatedText, TransitionLink, etc.
│   ├── contexts/                   # GlobalContext, LenisContext
│   ├── data/                       # Characters.ts, Temporadas.ts
│   ├── hooks/                      # useFullscreen
│   ├── styles/variables.scss       # Design tokens
│   ├── types/CharacterTypes.ts     # Interfaces de domínio
│   └── utils/                      # sectionRefs, scroll restoration, lock body
└── work-case.md
```

---

## Jornada do usuário (home)

A home é uma **narrativa vertical contínua**. O usuário entra pelo Hero com loader de 6 segundos e vídeos em loop (CloudFront), percorre a introdução a Runeterra (About com clip-path e rotação no scroll), explora Piltover e Zaun em blocos temáticos, vê previews das temporadas com efeito parallax no mouse, acessa extras (promocionais e músicas) e encerra nos créditos.

**Ordem das seções** (`src/app/page.tsx`):

1. **Header** — menu overlay animado com navegação por âncoras
2. **Hero** — vídeos rotativos, clip-path no scroll, CTA
3. **About** — “Bem-vindos a Runeterra”, título animado, imagem sticky
4. **Piltover** — Apresentação, História, Personagens, Outro
5. **Zaun** — Intro (vídeo/parallax), Apresentação, História, Personagens
6. **Temporadas** — cards Season 1 e 2 com link para rotas dedicadas
7. **Extras** — Promocionais + Músicas (embeds/links)
8. **Outro** — galeria + créditos

### Menu e âncoras

O menu (`Header` → `Nav`) usa uma estrutura de dados declarativa (`Nav/data.ts`):

- Início
- Piltover → Apresentação, História, Personagens
- Zaun → Apresentação, História, Personagens
- Temporadas → Temporada 1, Temporada 2
- Extras → Promocionais, Músicas

Cada subseção registra seu elemento DOM em um objeto global:

```ts
// utils/sectionRefs.ts
export const sectionRefs = { current: {} as Record<string, HTMLElement> };
```

As chaves seguem o padrão `{região}-{subseção}` em minúsculas (ex.: `piltover-história`, `zaun-personagens`). O `Nav` faz `scrollIntoView` e usa polling de posição (`getBoundingClientRect`) para fechar o menu só quando o scroll estabiliza — evitando fechar o overlay antes da animação terminar.

O **Header** carrega `Nav` e `Button` com `dynamic(..., { ssr: false })` e spinner de loading, reduzindo hidratação pesada no primeiro paint.

---

## Regiões: Piltover e Zaun

### Piltover

Identidade **clara e nobre**: fundo bege (`#ead8c0`, `#FFEBB7`), tipografia serifada, cards com texto lateral.

| Subseção | Destaque técnico |
|----------|------------------|
| **Apresentação** | Grid de imagens, cards `Cardtextaside` / `Cardinnertext`, registro em `sectionRefs` |
| **História** | Timeline/conteúdo via `data.ts` local + `RenderContent` |
| **Personagens** | 5 cards (Viktor, Jayce, Mel, Caitlyn, Heimerdinger) → `TransitionLink` para `/[slug]` |
| **Outro** | Fechamento visual da região |

### Zaun

Identidade **sombria e industrial**: fundo `#0a0a0a`, acentos neon, colunas animadas.

| Subseção | Destaque técnico |
|----------|------------------|
| **Intro** | Hero com vídeo/scroll; animações em `anime.ts` |
| **Apresentação** | `AnimatedColumns`, `CardAside`, dados em `data.ts` |
| **História** | Mesmo padrão de renderização de conteúdo que Piltover |
| **Personagens** | 5 cards (Ekko, Jinx, Violet, Vander, Silco) com `TransitionLink` |

**Contraste intencional:** ao entrar em uma página de personagem, o `backgroundColor` do `<main>` muda conforme `data.theme` (`zaun` → `#0a0a0a`, `piltover` → `#ead8c0`), reforçando pertencimento regional sem nova rota.

---

## Páginas de personagem

### Roteamento e SSG

```tsx
// app/[character]/page.tsx
export async function generateStaticParams() {
  return Object.keys(characters).map((character) => ({ character }));
}
```

**Personagens disponíveis** (10 rotas estáticas no build):

| Slug | Nome | Região |
|------|------|--------|
| `caitlyn` | Caitlyn Kiramman | Piltover |
| `mel` | Mel | Piltover |
| `jayce` | Jayce Talis | Piltover |
| `viktor` | Viktor | Piltover |
| `heimerdinger` | Heimerdinger | Piltover |
| `silco` | Silco | Zaun |
| `vander` | Vander | Zaun |
| `violet` | Vi (Violet) | Zaun |
| `jinx` | Jinx | Zaun |
| `ekko` | Ekko | Zaun |

Slug inválido → `notFound()` do Next.js.

### Modelo de dados (`CharacterData`)

Cada personagem em `Characters.ts` (~200+ linhas de conteúdo em média) inclui:

- **Identidade:** `theme`, `color`, `secondaryColor`, `icon`, `heroImage`, `name`, `lastName`, `quote`, `description`
- **Sobre:** `personalidade`, `aparencia`, `habilidades` — cada um com arrays de `src`, `title`, `content` (carrossel em `RenderAbout`)
- **História:** `jornada[]`, `temporada1[]`, `temporada2[]`, `conclusion[]` — itens com `image`, `quote`, `content` (HTML com `<b>` para ênfase)
- **Playlist:** faixas com `songName`, `artistName`, `imgSrc` (suporte a capas `.gif`)

### UI em abas (single URL)

`CharacterPageClient` mantém estado `activeTab`: `perfil` | `sobre` | `história`. As três áreas (`Hero`, `About`, `Historia`) permanecem no DOM; seções inativas recebem classe `.hidden` — troca instantânea sem remount da árvore nem mudança de URL.

### NavBar do personagem

Componente de alta complexidade (`NavBar.tsx`):

- **Navegação por abas** com animações Framer (`navContainerVariants`, `buttonsVariants`)
- **Player de áudio** via `HTMLAudioElement` — arquivos em `/audio/{name}-{index}.m4a` (exceção: Cecil B. Heimerdinger usa `lastName` no path)
- **Troca de faixa** com estados `isChangingSong`, delays com `sleep()`, animação de disco (`musicDiscVariants`)
- **Texto rolante** quando nome/artista excede largura do container
- **Link home** com `TransitionLink`
- **Menu lateral** (`Menu`) para subnavegação dentro da História

### Aba História

`Historia.tsx` cria uma **instância Lenis local** no container da aba (independente do Lenis global), com:

- Subseções: Jornada, Temporada 1, Temporada 2, Conclusão
- Menu flutuante de âncoras internas
- Botão “voltar ao topo” após 100px de scroll
- `RenderCharacterData` — pares `ImageDiv` + `TextDiv` com animações separadas (`anime.ts`)

Conteúdo rico usa `dangerouslySetInnerHTML` em `TextDiv` para renderizar negrito sem fragmentar strings no TSX.

---

## Temporadas

### Preview na home

`Seasons.tsx` combina:

- `AnimatedText` com blur e stagger
- **Parallax 3D no mouse** — `perspective(1000px)` + `translate` baseado na posição do cursor
- `TransitionLink` com `color="#0a0a0a"` para handoff de cor de fundo na transição
- Galeria de imagens com stagger via Framer

Links: `/temporada_1` e `/temporada_2`.

### Páginas dedicadas (`RenderSeasons`)

Experiência **quase app-like** em tela cheia:

| Aba | Funcionalidade |
|-----|----------------|
| **Episódios** | Lista lateral (`EpisodesList`) + painel de detalhe (`Episodes`) — título, nota IMDB, sinopse, imagem, **link direto Netflix** |
| **Highlights** | Lista vertical com Lenis; reprodução inline de MP4 (CloudFront) |

**Dados** (`Temporadas.ts`):

- `firstSeason` / `secondSeason` — episódios completos
- `firstSeasonEpisodes` / `secondSeasonEpisodes` — listas compactas para picker
- `firstSeasonHighlights` / `secondSeasonHighlights` — clipes de cenas marcantes

**Controles:** botão fechar (`TransitionLink` → `/`), `FullscreenSwitcher` (desktop), navegação por tabs, overlays de episódio/highlight com estados `isEpisodeActive` / `isHighlightActive`.

**Contexto global:** `useLockBodyScroll(isSeasonActive)` bloqueia scroll do body quando temporada ativa; `LenisProvider` pausa scroll suave durante loading ou season lock.

---

## Extras e encerramento

### Extras

- **Promocionais** — trailers e materiais de marketing (imagens/vídeos, refs em `sectionRefs`)
- **Músicas** — trilhas e embeds (ex.: YouTube) com animações de entrada

### Outro

- **Intro** — galeria visual de encerramento
- **Credits** — autoria e agradecimentos

---

## Componentes reutilizáveis (`src/components`)

| Componente | Responsabilidade |
|------------|------------------|
| **Header** | Menu morphing (Framer `variants` open/closed), click outside, `AnimatePresence` |
| **Button** | Variantes: `default`, `hero`, `ghost`, `fechar`, `chars`, `voltar`, `assistaAgora`, `anterior` — texto duplicado para hover animado |
| **AnimatedText** | Split palavra/caractere; `useInView`; camada decorativa `aria-hidden` + `.srOnly` para leitores de tela |
| **AnimatedTitle** | Títulos por palavra com stagger |
| **TransitionLink** | Salva scroll em `sessionStorage`, `useTransitionRouter`, animação clip-path + scale na View Transition |
| **TransitionCard** | Card com estilos de transição |
| **FullscreenSwitcher** | Toggle Fullscreen API no `document.documentElement` |
| **AnimatedLine** | Helper SVG para linhas animadas |

### Padrão `anime.ts`

18 arquivos co-localizados exportam **variant maps** do Framer Motion (`hidden` / `visible`, easings `[0.76, 0, 0.24, 1]`, etc.), mantendo componentes focados em estrutura e dados.

---

## Estado global e utilitários

### `MenuProvider` (`GlobalContext`)

| Estado | Uso |
|--------|-----|
| `isMenuOpen` | Menu header (também espelhado localmente no Header) |
| `isLoading` | Splash Hero 6s; bloqueia scroll (`overflow-hidden` no body) |
| `isSeasonActive` / `activeSeason` | Sincronização temporada + resize scroll para refs da home |
| `isAudioOn` | Definido no contexto; **não consumido** na UI global (áudio é local ao NavBar do personagem) |

### `LenisProvider`

- Instancia Lenis apenas se **não for mobile**
- Para Lenis quando `isLoading` ou `isSeasonActive`
- RAF loop com `requestAnimationFrame`

### Scroll restoration

`TransitionLink` grava `scrollPos:{pathname}` no `sessionStorage` antes de navegar. `ClientSideScrollRestorer` + `useScrollRestoration` restauram posição ao voltar para `/`.

---

## Design system (SCSS)

### Tokens (`styles/variables.scss`)

- **Cores temáticas:** Arcane pink/purple, beiges Piltover, blacks Zaun, `red-netflix`, acentos por personagem via inline `style={{ color: data.color }}`
- **Tipografia:** 11 famílias nomeadas (`$font-zentry`, `$font-cinzel`, `$font-lora`, etc.)
- **Breakpoints:** `$xs` 520px → `$xxl` 1536px

### Globais (`globals.css`)

- Reset e scrollbar customizada (bege/oliva)
- Overrides `::view-transition-*` para controlar z-index e desabilitar animações default do browser
- Classes Lenis (`.lenis-smooth`, `.lenis-stopped`, `[data-lenis-prevent]`)
- `@font-face` para todas as famílias em `/fonts/`

### Convenções

- Um `.module.scss` por componente
- `@use "@/styles/variables" as *` nos módulos
- Unidades `svh` / `vh` e `clamp()` para layouts imersivos
- `classnames` para estados condicionais

---

## Motion design e transições

### Hero (home)

- 4 vídeos MP4 no CloudFront (`clip-1` a `clip-4`)
- Rotação automática com crossfade (`isTransitioning`, 700ms)
- **Mobile:** um vídeo em loop; **desktop:** grid com variants `heroVideos`
- `useScroll` + `useTransform` → `clipPath` poligonal no scroll
- Loader com dots + barra de progresso; `setIsLoading(false)` após 6000ms

### View Transitions (`TransitionLink`)

1. Opcionalmente define `document.body.style.backgroundColor` (cor da região destino)
2. Previne default do link, salva scroll, `router.push` com `scroll: false`
3. Anima `::view-transition-old(root)` (opacity, scale, translateY)
4. Anima `::view-transition-new(root)` (clip-path wipe de baixo para cima)
5. Duração ~1000ms, easing cubic-bezier editorial

### Texto animado acessível

`AnimatedText` renderiza:

```tsx
<span className={styles.srOnly}>{text}</span>
<motion.span aria-hidden role="presentation">...</motion.span>
```

Leitores de tela recebem o texto completo; usuários visuais veem stagger por caractere com blur, skew e opacity configuráveis.

---

## Performance e entrega

| Estratégia | Benefício |
|------------|-----------|
| `generateStaticParams` | 10 HTMLs estáticos de personagem; TTFB previsível |
| `dynamic()` no Header | Menu não bloqueia SSR inicial |
| Lenis só no desktop | Scroll nativo mais performático em touch |
| Vídeos no CloudFront | Bandwidth e cache fora do bundle Next |
| `next/image` | Otimização de imagens onde aplicado |
| Preload Zentry | Fonte crítica no `<head>` do layout |
| Dados em TS puro | Sem runtime de CMS; build time conhecido |

**Trade-offs conscientes:**

- `Characters.ts` monolítico aumenta chunk das rotas de personagem — aceitável para portfólio; em produção, considerar split por personagem ou MDX.
- Múltiplos vídeos autoplay no Hero — mitigado por CDN e `muted` / `playsInline`.
- Polling de scroll no menu (`setInterval` 10ms) — garante UX do fechamento do menu; poderia evoluir para `scrollend` onde suportado.

---

## Acessibilidade e UX

### Pontos fortes

- Texto completo em `.srOnly` nos componentes de texto animado
- `lang="pt-br"` no `<html>`
- `alt` descritivos em cards de Zaun (`RenderCharsCard/data.ts`)
- `aria-label` em CTAs do Hero
- Feedback visual de loading e estados de transição

### Oportunidades de evolução

- `FullscreenSwitcher` usa `<motion.div onClick>` — ideal migrar para `<button>` com teclado
- Sem `prefers-reduced-motion` — animações sempre ativas
- `scrollIntoView({ behavior: "instant" })` — abrupto para usuários sensíveis a movimento
- Menu accordion sem `aria-expanded` explícito em todos os nós

---

## Integrações externas

| Plataforma | Uso |
|------------|-----|
| **Netflix** | Links `watch` por episódio em `Temporadas.ts` |
| **YouTube** | Embeds na seção Músicas / promocionais |
| **CloudFront** | `d3v6dicq4pzaym.cloudfront.net` — clips do Hero e highlights |
| **IMDB** | Notas por episódio nos metadados |

---

## Diferenciais para portfólio

1. **Profundidade de conteúdo** — não é landing de uma seção; são milhares de linhas de copy, 10 perfis completos e 2 temporadas exploráveis.
2. **Arquitetura híbrida** — marketing page + rotas de produto (personagem/temporada) no mesmo repo.
3. **Motion como camada de produto** — scroll-linked, view transitions, parallax, player sincronizado com UI.
4. **Separação dados/UI** — tipos em `CharacterTypes.ts`, conteúdo em `data/`, apresentação em `app/` e `components/`.
5. **Identidade dual Piltover/Zaun** — consistente em cor, fundo, tipografia e tom.
6. **Detalhes de craft** — variantes de botão com texto duplo, menu que espera scroll estabilizar, handoff de cor entre rotas.

---

## Métricas de complexidade (por área)

| Área | Complexidade | Observação |
|------|--------------|------------|
| `data/Characters.ts` | Muito alta | Fonte única de verdade; manutenção centralizada |
| `NavBar` (personagem) | Alta | Áudio + Framer + tabs |
| `RenderSeasons` + episódios/highlights | Alta | Múltiplos overlays, Lenis, vídeo |
| `Header/Nav` | Média-alta | Accordion + scroll polling + fullscreen |
| Seções Piltover/Zaun | Média-alta | Muitos subcomponentes e `anime.ts` |
| `components/` compartilhados | Média | Primitivos bem definidos |

---

## Aprendizados e evoluções possíveis

**O que o projeto demonstra:**

- Domínio do ecossistema React/Next atual (App Router, RSC boundaries, static generation).
- Capacidade de orquestrar bibliotecas de animação e scroll sem perder legibilidade de código.
- Sensibilidade a UX editorial (timing de loader, transições, hierarquia visual).

**Evoluções naturais (não implementadas):**

- Fragmentar `Characters.ts` por slug ou migrar para CMS/MDX.
- `prefers-reduced-motion` e botões semânticos no fullscreen.
- i18n (EN) para alcance internacional.
- Testes E2E (Playwright) nos fluxos críticos: menu → personagem → voltar com scroll restaurado.
- Ativar de fato `setIsSeasonActive` no fluxo overlay da home, se season lock for requisito.

---

## Como executar

```bash
git clone https://github.com/SrDev-Henrique/Arcane_Project
cd arcane_project
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). O script `dev` expõe `0.0.0.0` para testes em dispositivos na mesma rede.

> **Nota:** Assets em `public/` (imagens, áudio, fontes) podem não estar versionados no repositório por tamanho; o projeto espera essa estrutura conforme o README.

---

## Créditos e contato

**Desenvolvimento:** SrDev Henrique

- GitHub: [github.com/SrDev-Henrique](https://github.com/SrDev-Henrique)
- Instagram: [@hick.slv](https://www.instagram.com/hick.slv/)
- E-mail: [halbuquerque2850@gmail.com](mailto:halbuquerque2850@gmail.com?subject=Gostaria%20de%20montar%20um%20orçamento%20para%20um%20projeto)

**Propriedade intelectual:** Arcane, League of Legends e personagens são propriedade da Riot Games. Este projeto é homenagem de fã e material de portfólio.

---

## Texto curto para card de portfólio (copy-paste)

> **Arcane: Universo Interativo** — Site imersivo em Next.js 15 e React 19 sobre a série Arcane. Landing cinematográfica com scroll Lenis, view transitions customizadas, 10 microsites de personagem (SSG) com player de áudio, e exploradores de temporada com episódios (Netflix) e highlights em vídeo. Motion design com Framer Motion, design system SCSS e ~2k linhas de conteúdo tipado em TypeScript.

---

## Texto médio para seção “Sobre o projeto” no portfólio

Desenvolvi **Arcane: Universo Interativo** como peça central do meu portfólio frontend: uma experiência web que traduz o contraste visual e narrativo entre Piltover e Zaun em interface, animação e arquitetura de informação.

A home funciona como um documentário interativo — vídeos no hero, textos com reveal por caractere, menu por âncoras e seções regionais densas em conteúdo. Cada um dos dez personagens principais tem rota própria gerada estaticamente, com abas de perfil, carrossel “sobre” e história longa com scroll suave dedicado e playlist temática.

As temporadas abrem em rotas fullscreen com listagem de episódios (links Netflix, notas IMDB) e highlights em vídeo via CDN. Usei Context API para estados globais (loading, menu, scroll), `next-view-transitions` para mudanças de rota com wipe animado, e um design system SCSS com dezenas de tokens e módulos co-localizados.

O objetivo foi provar que consigo entregar **produto digital com nível editorial** — não apenas páginas responsivas, mas timing, acessibilidade parcial em camadas animadas, performance consciente e organização de código escalável para conteúdo massivo.

---

*Documento gerado a partir da análise da codebase em maio de 2026.*
