# Jaber Seguros — Website Institucional

> Case de portfolio · Site institucional para corretora de seguros e consórcios  
> Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

---

## Resumo executivo

O **Jaber Seguros** é o site institucional da corretora homônima, especializada em seguros e consórcios para pessoas físicas e jurídicas, com atuação em São Paulo e em todo o Brasil. O projeto entrega uma experiência digital completa: apresentação da marca, catálogo detalhado de nove linhas de serviço, geração de leads via formulário e WhatsApp, páginas legais (LGPD) e otimização para buscadores.

Trata-se de um **produto web de marketing e conversão**, construído como **Single Page Application híbrida** com Next.js App Router — páginas estáticas e dinâmicas no servidor, interatividade no cliente onde faz sentido, e uma API route para envio de e-mails transacionais.

---

## Contexto do cliente

| Item | Detalhe |
|------|---------|
| **Segmento** | Corretagem de seguros e consórcios |
| **Público** | Pessoas físicas, empresas e gestores de benefícios |
| **Proposta de valor** | Consultoria personalizada, parcerias com seguradoras de referência (Porto Seguro, SulAmérica, Amil, Omint, Seguros Unimed, MetLife, Care Plus, entre outras) e atendimento humanizado |
| **Diferencial de mercado** | Mais de 15 anos de experiência, soluções sob medida, cobertura nacional |
| **Canais de conversão** | Formulário de contato (e-mail), WhatsApp fixo e CTAs contextuais por serviço |

---

## Objetivos do projeto

1. **Presença digital profissional** — Transmitir confiança, autoridade e proximidade em um setor regulado e baseado em relacionamento.
2. **Educar e converter** — Explicar cada modalidade (seguros empresariais, saúde, vida, garantia, RC, consórcios) com conteúdo rico, FAQ e CTAs claros.
3. **Captação de leads qualificados** — Formulário com campos condicionais conforme o serviço (vidas, valor em consórcio, marca de veículo) e integração por e-mail.
4. **SEO e descoberta orgânica** — Metadados por página, Open Graph, Twitter Cards, URLs canônicas e dados estruturados Schema.org.
5. **Performance e acessibilidade** — Hero com vídeo otimizado (LCP), animações respeitando `prefers-reduced-motion`, semântica HTML e labels ARIA.
6. **Conformidade** — Termos de uso, política de privacidade e aceite LGPD no formulário.

---

## Escopo entregue

### Páginas e rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero em vídeo, sobre resumido, parceiros, opções de serviços, essência da marca, mensagem institucional, visão e CTAs |
| `/servicos` | Listagem narrativa de todos os serviços (seguros + consórcios) com seções animadas e âncoras |
| `/servicos/[service]` | **9 páginas dinâmicas** geradas a partir de um único modelo e fonte de dados centralizada |
| `/sobre-nos` | História, passos, metodologia e como trabalhamos |
| `/contato` | Formulário validado, cards de contato e FAQ |
| `/termos-de-uso` | Termos legais |
| `/politica-de-privacidade` | Política de privacidade |
| `POST /api/contact` | API serverless para envio de e-mail via Resend |

### Serviços modelados (9 slugs)

**Seguros:** `seguro-saude`, `seguro-vida-empresarial`, `seguro-empresarial`, `seguro-garantia`, `seguro-responsabilidade-civil`

**Consórcios:** `consorcio-veiculos`, `consorcio-veiculos-pesados`, `consorcio-imoveis`, `consorcio-sustentavel`

Cada serviço possui: headline, subtítulo, imagem hero, três diferenciais com ícones, blocos “Sobre”, “O que está incluso”, “Como funciona”, “Por que importa”, CTA e FAQ — tudo definido em `src/lib/services.ts` (~650 linhas de conteúdo tipado).

---

## Stack tecnológica

| Camada | Tecnologias |
|--------|-------------|
| **Framework** | Next.js 16.1.6 (App Router, Server Components, Route Handlers) |
| **UI** | React 19.2, TypeScript 5 |
| **Estilo** | Tailwind CSS 4 (`@import "tailwindcss"`), design tokens em OKLCH, `tw-animate-css` |
| **Componentes** | Radix UI (primitivos acessíveis), padrão shadcn/ui (33 componentes em `components/ui`) |
| **Ícones** | Lucide React, Remix Icon (`@remixicon/react`), Font Awesome (marcas, ex.: WhatsApp no hero) |
| **Formulários** | React Hook Form 7, Zod 4, `@hookform/resolvers` |
| **E-mail** | Resend 4 (API route server-side) |
| **Animação** | GSAP 3 + ScrollTrigger + SplitText; Motion 12 (`motion/react`) |
| **Carrosséis / UI** | Embla Carousel, Recharts (gráficos), Sonner (toasts) |
| **Imagens** | `next/image` com `priority`, `sizes` e `fill` onde aplicável |
| **Qualidade** | ESLint 9 (`eslint-config-next`), Biome 2.2 (dev) |
| **Fontes** | Inter (sans), Poppins (serif), Montserrat (mono) — via CSS variables |

---

## Arquitetura e organização do código

```
jaberseguros/
├── src/
│   ├── app/                      # App Router
│   │   ├── (sections)/           # Seções da home e blocos compartilhados (hero, footer, CTA, serviços…)
│   │   ├── api/contact/          # Route Handler POST → Resend
│   │   ├── contato/
│   │   ├── servicos/ + [service]/
│   │   ├── sobre-nos/
│   │   ├── termos-de-uso/
│   │   ├── politica-de-privacidade/
│   │   ├── layout.tsx            # Shell global: nav, footer, WhatsApp, toaster
│   │   ├── page.tsx              # Composição da home
│   │   └── globals.css           # Tokens, temas, keyframes
│   ├── components/               # UI reutilizável, ícones SVG, navegação, JSON-LD
│   ├── contexts/                 # MenuProvider (estado do menu mobile)
│   └── lib/                      # services.ts (CMS em código), phone.ts, utils.ts
├── public/assets/                # Logos, imagens de serviços, vídeo hero, ícones
└── package.json
```

**Padrões adotados:**

- **Composição por seções** — A home é montada importando seções de `(sections)/`, facilitando manutenção e leitura do `page.tsx`.
- **CMS em código** — Conteúdo de serviços centralizado em `services.ts` com tipos `ServiceSlug`, `Service`, `Diferencial`; páginas dinâmicas consomem `getServiceBySlug()`.
- **Server vs Client** — Páginas de serviço e metadados no servidor; formulário, navegação, animações GSAP/Motion como Client Components (`"use client"`).
- **Alias `@/*`** — Imports consistentes via `tsconfig` paths.
- **Colocation** — Componentes específicos de rota ficam em `app/.../components/` (ex.: cards de diferencial, FAQ da página de serviço).

**Escala do repositório:** ~124 arquivos TypeScript/TSX em `src/`, dezenas de componentes de domínio e 33 primitivos de UI.

---

## Destaques técnicos (portfolio)

### 1. Páginas de serviço dinâmicas com SEO completo

Cada slug em `/servicos/[service]` implementa:

- `generateMetadata()` assíncrono com título, description, keywords, `alternates.canonical`, Open Graph (imagem 1200×630) e Twitter Card.
- **JSON-LD** duplo: `Service` + `FAQPage` (quando há perguntas).
- Hero em duas colunas, diferenciais em grid responsivo, sidebar sticky com CTA, accordion de FAQ reutilizável.
- Links de WhatsApp com mensagem pré-preenchida personalizada por serviço (`encodeURIComponent`).

Isso permite escalar conteúdo adicionando entradas em `services.ts` sem duplicar layouts.

### 2. Formulário de contato inteligente

O formulário em `/contato` (`contact-form.tsx`) usa **validação condicional com Zod**:

- Nome completo (nome + sobrenome).
- Telefone brasileiro com máscara em tempo real (`formatPhone` / `getPhoneDigits` em `lib/phone.ts`).
- Valor em reais com máscara BRL para consórcios.
- Campo **“Quantidade de vidas”** obrigatório apenas para seguro saúde e vida empresarial.
- Campo **“Valor aproximado”** obrigatório quando o serviço contém `consorcio`.
- Campo **“Marca de interesse”** exibido para serviços de veículos.
- Checkbox **LGPD** com links para termos e política.

Fluxo: `POST /api/contact` → validação server-side → HTML do e-mail → Resend → toast customizado (sucesso/erro) → reset do form.

Variáveis: `RESEND_API_KEY` (obrigatória para envio), remetente configurado no domínio verificado da Resend.

### 3. Hero com vídeo e performance (LCP)

`HeroVideo` implementa boas práticas de Core Web Vitals:

- **Poster estático** (`hero-image.webp`) como LCP com `priority`.
- Carregamento do vídeo **adiado** via `requestIdleCallback` (fallback `setTimeout`) para não competir com o LCP.
- Respeito a **`prefers-reduced-motion`**: usuários que preferem menos movimento veem apenas a imagem.
- Crossfade suave poster → vídeo no evento `canplay`.
- Vídeo otimizado: MP4 ~12s, 24fps, resolução 1280px.

### 4. Animações em camadas

- **GSAP SplitText + ScrollTrigger** — Títulos com reveal por palavra ou linha (`AnimatedText`), usado na home, serviços e páginas internas.
- **Motion (Framer Motion)** — Transições na seção “Essência Jaber”, marquee vertical de CTAs, fades em cards.
- **CSS** — `@keyframes fade-in-up`, marquee vertical no Tailwind 4 `@theme`.
- **Navegação mobile** — Animações dedicadas em `navigation-menu/anime.ts`.

Todas as animações críticas consideram acessibilidade (reduced motion no hero; elementos decorativos com `aria-hidden`).

### 5. Navegação rica (desktop e mobile)

- Header **fixo flutuante** (`fixed`, `rounded-full`, sombra) centralizado na viewport.
- **Desktop:** menu Radix Navigation Menu com megamenu de seguros e consórcios (`data.ts` com imagens e links).
- **Mobile:** `MenuProvider` + drawer animado (`SmallDevicesMenu`, `MobileNavigation`).
- CTA “Fale Conosco” sempre visível no desktop.

### 6. SEO e dados estruturados

Componente reutilizável `JsonLd<T>` injeta `application/ld+json` de forma segura (dados controlados pela aplicação).

**Tipos Schema.org usados no projeto:**

| Página | Schema |
|--------|--------|
| Contato | `ContactPage` + `InsuranceAgency` + `ContactPoint` + endereço |
| Sobre nós | `InsuranceAgency` + `AboutPage` |
| Serviços (listagem) | `CollectionPage` + `ItemList` (na seção Services) |
| Serviço individual | `Service` + `FAQPage` |
| Essência Jaber (home) | `ItemList` |

Metadados globais em `layout.tsx` com `metadataBase` derivado de `NEXT_PUBLIC_SITE_URL`.

### 7. Design system e identidade visual

- Paleta em **OKLCH** com primary azul (`oklch(0.6231 0.188 259.8145)`), foreground escuro e tokens de card, border, muted.
- **Border radius** generoso (`--radius: 1.175rem`) e cantos `rounded-[0.35rem]` em imagens — identidade visual consistente.
- Breakpoints customizados: `xs` (400px), `bmb`, `mlg`, `2xl`.
- Componentes shadcn-style: Button, Form, Select, Accordion, Dialog, Carousel, etc.
- **Logo cloud** na home com parceiros (Amil, Care Plus, Porto, Unimed, SulAmérica, Omint, MetLife).

### 8. Conversão omnicanal (WhatsApp)

- Botão **fixo** no canto inferior (`FixedWhatsAppButton`) em todas as páginas.
- Hero com CTA direto para `wa.me/5511993101907`.
- Páginas de serviço com mensagem contextual por produto.
- Número e endereço repetidos no footer e na página de contato.

### 9. Acessibilidade e semântica

- `lang="pt-BR"` no `<html>`.
- Landmarks: `header role="banner"`, `main` com `aria-labelledby` / `aria-label` por página.
- Links com `title` e `aria-label` descritivos (especialmente WhatsApp e navegação).
- Formulário com labels, mensagens de erro do React Hook Form e checkbox LGPD associado a texto via `aria-describedby`.
- Imagens com `alt` contextual (não genérico).

### 10. Experiência da home (storytelling)

Sequência narrativa em `page.tsx`:

1. **Hero** — Vídeo + proposta de valor + diferenciais (+15 anos, parcerias, atendimento personalizado).
2. **AboutUs** — Apresentação da corretora.
3. **LogoCloudDemo** — Prova social (seguradoras parceiras).
4. **ServicesOptions** — Cards de entrada para serviços.
5. **JaberEssence** — Três pilares interativos (consultoria, planos, atendimento humano).
6. **Message** — Mensagem institucional animada.
7. **Vision** — Visão de futuro.
8. **CTAWithVerticalMarquee** — Marquee vertical com ícones e links.
9. **CTA** — Chamada final para contato.

Espaçamento vertical responsivo (`space-y-20` → `40` em large) cria ritmo de leitura.

---

## Integrações e variáveis de ambiente

| Variável | Uso |
|----------|-----|
| `RESEND_API_KEY` | Envio de e-mails do formulário (server-only) |
| `NEXT_PUBLIC_SITE_URL` | `metadataBase`, URLs absolutas em OG e JSON-LD (default: `https://jaberseguros.com.br`) |

**Deploy:** Compatível com Vercel, Netlify ou qualquer host Next.js; variáveis configuradas no painel do provedor. A chave Resend nunca é exposta ao cliente.

---

## Conteúdo e copy

- Textos em **português brasileiro**, tom consultivo e profissional.
- Conteúdo de serviços escrito para **SEO de cauda longa** (termos como “seguro garantia licitação”, “consórcio sem juros”, “plano de saúde empresarial”).
- FAQs por serviço respondem objeções comuns (coparticipação, FGTS em consórcio imobiliário, lances, dedução fiscal em vida empresarial).
- Página de contato cita operadoras e promessa de retorno em **24 horas úteis**.

---

## Scripts e desenvolvimento

```bash
npm run dev    # Desenvolvimento (localhost:3000)
npm run build  # Build de produção
npm run start  # Servidor de produção
npm run lint   # ESLint
```

**Pré-requisitos:** Node.js 20+ (LTS recomendado).

---

## Métricas de escopo (referência)

| Métrica | Valor aproximado |
|---------|------------------|
| Arquivos TS/TSX em `src/` | ~124 |
| Componentes UI (`components/ui`) | 33 |
| Páginas públicas | 7 rotas + 9 dinâmicas |
| Linhas em `services.ts` (conteúdo) | ~650 |
| Dependências de produção | ~40 pacotes |
| Parceiros exibidos na home | 7 logos |

---

## Resultados e valor de negócio

- **Canal digital 24/7** para apresentação da corretora e captação de orçamentos.
- **Educação do lead** antes do contato humano — reduz fricção e melhora qualidade das solicitações (campos condicionais por tipo de produto).
- **Autoridade de marca** via parceiros, história (+15 anos, fundação referenciada em Schema como 2009 na página Sobre) e conteúdo especializado.
- **Base técnica escalável** — Novos serviços ou ajustes de copy concentrados em `services.ts` e metadados automáticos.
- **Preparado para marketing** — OG/Twitter prontos para compartilhamento; estrutura para campanhas por landing de serviço.

*(Métricas de tráfego, conversão e ranking — preencher com dados reais pós-deploy, se disponíveis.)*

---

## Desafios e decisões de engenharia

| Desafio | Decisão |
|---------|---------|
| Muito conteúdo por serviço sem CMS headless | Modelo de dados tipado em TypeScript + página template única |
| Performance do hero com vídeo | Poster LCP + idle load + reduced motion |
| Formulário com regras diferentes por produto | `superRefine` no Zod + `useWatch` para UI condicional |
| Animações sem prejudicar a11y/perf | GSAP apenas em viewport; Motion em blocos isolados; CSS para entradas simples |
| E-mail transacional confiável | Resend na Route Handler, validação dupla (client + server) |
| Menu complexo em mobile | Context API para estado global do menu + animações GSAP no drawer |

---

## Sugestões para o portfolio (como apresentar)

### Título sugerido
**Jaber Seguros — Site institucional com Next.js 16, SEO avançado e captação de leads**

### Uma linha (elevator pitch)
Site institucional full-stack para corretora de seguros: nove landing pages de produto a partir de um único template, formulário inteligente com e-mail transacional, hero em vídeo otimizado e dados estruturados Schema.org.

### Tags para filtros
`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `SEO` · `GSAP` · `Radix UI` · `Zod` · `Resend` · `Institucional` · `Finanças / Seguros`

### Bullets para card do projeto
- App Router com Server Components e 9 rotas dinâmicas de serviço
- JSON-LD (Service, FAQ, Organization, ContactPage) em todas as páginas-chave
- Formulário com validação condicional Zod + API Resend
- Hero com vídeo: LCP em poster, `requestIdleCallback`, `prefers-reduced-motion`
- Design system OKLCH + 33 componentes Radix/shadcn

### Seção “Meu papel” *(personalizar)*
<!-- Exemplo — substitua conforme sua participação real -->
- [ ] Arquitetura e setup Next.js  
- [ ] UI/UX e implementação front-end  
- [ ] Integração Resend e API de contato  
- [ ] Conteúdo / copy dos serviços  
- [ ] SEO técnico e Schema.org  
- [ ] Deploy e DevOps  

### Links *(preencher quando publicado)*
- **Site em produção:** `https://jaberseguros.com.br`  
- **Repositório:** *(privado — uso interno Jaber Seguros)*  

---

## Galeria de telas (checklist para o portfolio visual)

Recomenda-se capturas em desktop e mobile:

- [ ] Home — Hero com vídeo e CTAs  
- [ ] Home — Logo cloud de parceiros  
- [ ] Home — Seção Essência Jaber (estado ativo)  
- [ ] `/servicos` — Listagem de um bloco (ex.: seguro saúde)  
- [ ] `/servicos/seguro-saude` — Hero + diferenciais  
- [ ] `/servicos/consorcio-imoveis` — FAQ  
- [ ] `/contato` — Formulário com campos condicionais abertos  
- [ ] `/sobre-nos` — Timeline / passos  
- [ ] Menu mobile aberto  
- [ ] Botão flutuante WhatsApp  

---

## Stack resumida (bloco copiável)

```
Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4
Radix UI · React Hook Form · Zod · Resend
GSAP · Motion · Embla · Sonner · next/image
ESLint · Biome · Schema.org JSON-LD
```

---

## Licença e confidencialidade

Projeto de **uso privado**. Todos os direitos reservados à Jaber Seguros. Ao publicar no portfolio, confirme autorização para exibir imagens, logotipos de parceiros e trechos de interface.

---

*Documento gerado com base na análise da codebase do repositório `jaberseguros` (estrutura, dependências, rotas, componentes e padrões de implementação).*
