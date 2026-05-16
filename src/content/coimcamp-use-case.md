# Case de trabalho — Site institucional COIMCAMP

Documento gerado a partir da análise do repositório (`gcm`): aplicação web de marketing e captação de leads para empresa de **automação de portões, cercas elétricas, alarmes, CFTV e serviços elétricos** na região de **Campinas, Valinhos e Vinhedo**.

---

## Visão executiva

**Nome do projeto (repo):** `gcm`  
**Repositório:** [github.com/GCM-Coimbra/GCM_COIMBRA](https://github.com/GCM-Coimbra/GCM_COIMBRA) 
**Produto:** site institucional **COIMCAMP**  
**Propósito:** presença digital profissional com narrativa de casos reais, blog para autoridade e SEO, e **funil de conversão** via formulários (agendamento de visita técnica e solicitação de orçamento), com notificação por e-mail e suporte a **anexos de imagem** armazenados na nuvem.

**Stack principal:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Biome, integrações Resend e Supabase Storage.

---

## Contexto de negócio

Empresas de segurança e automação residencial/comercial precisam:

1. **Credibilidade** — mostrar trabalhos reais e explicar o processo (diagnóstico, execução, entrega).
2. **Descoberta orgânica** — conteúdo temático e páginas locais (Campinas e região).
3. **Conversão rápida** — WhatsApp e e-mail já existem; o site complementa com formulários estruturados (endereço, tipo de serviço, data/hora desejada, mensagem e fotos do local).

O projeto endereça esses três eixos em uma única base de código type-safe e orientada a componentes.

---

## Escopo funcional entregue na codebase

### Landing page (`/`)

Seções compostas em `src/app/page.tsx`:

- **Hero** — headline institucional, CTA visual, selo de qualidade, animações com **Motion** (`motion/react`) e `useInView` para entrada escalonada.
- **Serviços** — prévia do portfólio com cards e dados centralizados.
- **Contato** — cartões e área de contato (inclui formulário de contato na UI; ver nota em “Pontos de atenção”).
- **Por que nos escolher** — diferenciação da empresa.
- **Depoimentos / clientes** — prova social (dados em arquivo).
- **FAQ** — accordion com conteúdo estático.

Metadados específicos da home incluem **URL canônica** (`alternates.canonical`).

### Catálogo e casos de uso (`/servicos`)

- Listagem (`src/app/servicos/page.tsx`) com cards numerados e texto de abertura orientado a conversão.
- **Oito casos** modelados em `src/app/servicos/lib/data.ts` — cada item inclui: título curto, descrição, imagem local (`/public`), nome do cliente, foto (CDN Pexels com helper tipado), vídeo em `/public/videos`, e narrativa longa em **quatro blocos**: primeiro contato, problema, serviço prestado, conclusão.
- Rota dinâmica `/servicos/[slug]` resolve o caso pelo `href` no dataset; estado **não encontrado** usa componente dedicado.
- Página de detalhe (`client-page.tsx`) estrutura a leitura em sessões nomeadas, hero visual com `next/image`, botão de scroll suave para “resultado”, e sugestão de outros casos.

Isso funciona como **estudo de caso B2C/B2B leve** embutido no site, útil para SEO de cauda longa e para visitantes que compararam fornecedores.

### Blog (`/blog`, `/blog/[subject]`)

- **Três artigos** registrados via `articleMap` com **dynamic import** (`use-get-article.ts`): code-splitting por post — apenas o módulo necessário é carregado quando o slug corresponde.
- Conteúdo dos posts em formato compatível com **Portable Text** (`@portabletext/react`): blocos `h2`, `h3`, `normal`, listas e marks (`strong`, `em`, `code`) com componentes React customizados para tipografia consistente.
- `generateMetadata` por artigo: título, descrição, canonical, Open Graph (`type: article`) e Twitter Card com imagem absoluta derivada de `getSiteUrl()`.
- **JSON-LD** do tipo `BlogPosting` na página do artigo (headline, imagem, URL, tempo de leitura estimado, tags como keywords, autor referenciado).

### Conversão — Agendar visita (`/agendar-visita`) e Orçamento (`/orcamento`)

Fluxo completo cliente → servidor:

1. **Validação no cliente** com **Zod** + **react-hook-form** + `@hookform/resolvers/zod`.
2. Envio como **`multipart/form-data`** (`FormData`) para rotas API internas — adequado a **upload de arquivos** sem JSON base64.
3. **ViaCEP** — quando o CEP tem 8 dígitos, `fetch` com `AbortController` preenche logradouro, bairro, cidade e UF (melhora UX e reduz erro de digitação).
4. **Telefone brasileiro** — helpers em `src/lib/phone.ts` (`getPhoneDigits`, `formatPhone`) com máscara progressiva e armazenamento numérico no estado do formulário.
5. **Data e hora** — componente `DateTimePicker` baseado em **React Aria Components** (`DateField` / `DateInput`) e `@internationalized/date`, granularidade em minutos, ciclo 24h, integrado ao react-hook-form.
6. **Upload de imagens** — componente `ImageUploader` apoiado no hook robusto `useFileUpload` (drag-and-drop, limite de tamanho, aceitação por tipo, previews com `URL.createObjectURL` e revogação ao remover/limpar, duplicatas ignoradas em modo múltiplo).
7. Feedback — **Sonner** para toasts; spinner no botão de envio; cópias de sucesso com SLA textual (“em até 2 horas…”).

Diferença entre os dois formulários: **orçamento** exige campo **urgência** (`baixa` | `normal` | `urgente`), refletido na API e no corpo do e-mail.

### APIs (`src/app/api/forms/`)

- **`POST /api/forms/agendar-visita`** — valida campos obrigatórios no servidor; opcionalmente faz upload no **Supabase Storage** (bucket `agendamentos`), com nomes de objeto sanitizados (`normalizeFolderName`, `safeObjectBaseName` + UUID), pasta por cliente; monta HTML e texto plano; envia via **Resend**. Se há imagens mas Supabase não está configurado, responde **503** com mensagem clara.
- **`POST /api/forms/orcamento`** — mesma ideia, com campo `urgency` e lógica de upload paralela (estrutura de chaves no storage com prefixo adicional `agendamentos/` em relação à rota de visita — detalhe de implementação a considerar em futura uniformização).

Variáveis de ambiente relevantes: `RESEND_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`.

Cliente Supabase criado em **`getSupabaseServerClient()`** apenas no servidor — uso da **service role** para operações de storage (adequado para route handlers; não expor ao browser).

### Navegação global e contato rápido

- **Menu flutuante** (`NavigationMenu`) — padrão não convencional: barra fixa centralizada (inferior no desktop, topo no mobile), blur e transição de tema quando expandido; lista de contatos (WhatsApp, e-mail) e links de navegação; fecha ao clicar fora (`pointerdown` no `document`).
- **Botão fixo** canto inferior direito — expande para os mesmos contatos com animação Motion.

### SEO técnico

- **`metadataBase`** e template de título no `RootLayout`.
- **`sitemap.ts`** — URLs absolutas com `getSiteUrl()`; inclui estáticas, todas as rotas de serviços derivadas de `clientServices`, e todos os posts retornados por `getArticles()` com prioridades e `changeFrequency` distintos.
- **`robots.ts`** — allow all, `host` e `sitemap` apontando para o domínio configurado.
- **JSON-LD na home** (`HomeJsonLd`) — grafo com `WebSite` e `Organization` (logo absoluto, `ContactPoint` com e-mail e telefone WhatsApp, `sameAs` para perfil Google).
- **`next/image`** com **remote patterns** para placeholders, Picsum e Pexels (`next.config.ts`).

### Analytics / ads

- Scripts **Google tag (gtag)** no layout raiz com ID `AW-18042166634` (`strategy: beforeInteractive`) — compatível com medição de conversão Google Ads.

---

## Arquitetura técnica

### Framework e roteamento

- **Next.js App Router** — layouts aninhados implícitos, `Suspense` em páginas de blog e serviço com fallback de spinner.
- Separação **Server Components** vs **Client Components** (`"use client"`) onde há estado, formulários, Motion ou hooks do browser.

### Modelagem de conteúdo

| Área | Onde vive | Observação |
|------|-----------|------------|
| Casos de serviço | `src/app/servicos/lib/data.ts` | Fonte única para cards, slugs e narrativa longa |
| Blog | `src/app/blog/blog-posts/*.ts` + `articleMap` | Lazy loading por slug |
| FAQ / serviços da home / clientes | `src/app/(sections)/**/data.ts` | Conteúdo estático tipado |

### Componentes UI

Biblioteca estilo **shadcn**: `src/components/ui/*` com **Radix UI** (accordion, dialog, select, tabs, etc.), **class-variance-authority**, **tailwind-merge** / `cn()` em `src/lib/utils.ts`.

Ícones: **Lucide** e **Remix Icon**.

Carrossel: **Embla** (`embla-carousel-react`).

Temas: **`next-themes`** disponível na stack (padrão visual definido em `globals.css` com variáveis CSS e tema Tailwind v4).

### Qualidade de código

- **Biome** 2.x — format + lint; regra **`useSortedClasses`** para ordenação de classes Tailwind em `className`; domínios recomendados Next/React/Tailwind habilitados.
- TypeScript estrito no projeto; paths `@/*` para imports absolutos.

---

## Decisões de produto e engenharia (para narrar em entrevista)

1. **FormData + multipart no POST** — escolha correta para uploads misturados com campos texto sem inflar payload ou limites de JSON.
2. **Dupla validação** — Zod no cliente (UX imediata) e verificação de campos obrigatórios na API (segurança básica contra requests malformados).
3. **Imports dinâmicos no blog** — performance e escalabilidade: novos posts são um arquivo + uma entrada no mapa.
4. **Portable Text sem CMS headless** — conteúdo versionado no Git, deploy previsível; trade-off: edição exige dev ou fluxo editorial técnico.
5. **Imagens remotas de exemplo** — Pexels com URL parametrizada e allowlist no Next; imagens de marca em `/public`.
6. **Service role Supabase** apenas em route handlers — evita expor chave privilegiada; upload só server-side.

---

## Pontos de atenção (transparência para evolução)

- **`ContactForm`** (`src/components/contact-form.tsx`): submit apenas com `console.log` — não há rota API dedicada; útil mencionar como “stub” ou próximo incremento (integração Resend espelhando os outros formulários).
- **Rotas de upload** — pequena inconsistência no prefixo de pasta entre `agendar-visita` e `orcamento` no Storage; unificar facilita governança do bucket.
- **`console.log`** na rota de orçamento — remover ou trocar por logger em produção.
- **E-mails destinatários** hardcoded nas rotas — mover para variável de ambiente melhora portabilidade entre ambientes.

---

## Resultados mensuráveis (preenchendo no portfólio)

_Substitua por dados reais após deploy/medição:_

- Tráfego orgânico / impressões (Search Console).
- Taxa de envio dos formulários vs. sessões.
- Tempo de primeira resposta do time comercial (processo, não só código).
- Core Web Vitals no Lighthouse/PageSpeed após build de produção.

---

## Stack resumida (para currículo ou rodapé do case)

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, React Aria Components, Radix UI, Embla Carousel, Sonner  
- **Forms:** react-hook-form, Zod 4  
- **Conteúdo rico:** Portable Text (`@portabletext/react`)  
- **Backend (BFF):** Next.js Route Handlers  
- **E-mail:** Resend  
- **Storage:** Supabase (bucket `agendamentos`)  
- **Dados auxiliares:** ViaCEP API pública  
- **Tooling:** Biome, Bun lockfile no repo (compatível com npm/pnpm/yarn)  
- **Deploy:** compatível com Vercel ou Node (`next build` / `next start`), conforme README

---

## Mapa de diretórios (referência rápida)

```
src/app/
  page.tsx                 # Landing
  layout.tsx               # Metadata global, gtag, shell (nav, footer, toaster, FAB)
  globals.css              # Tailwind v4 + tema
  sitemap.ts, robots.ts
  (sections)/              # Blocos da home (hero, services, contact, faq, …)
  servicos/                # Lista, [slug], dados e cards
  blog/                    # Lista, [subject], posts e Portable Text
  agendar-visita/, orcamento/
  api/forms/*/route.ts     # POST multipart → Storage + Resend
src/components/            # UI compartilhada, navegação, forms auxiliares
src/hooks/                 # use-file-upload, use-mobile
src/lib/                   # site URL, Supabase server client, phone, contact constants
public/                    # imagens, vídeos, logo
```

---

## Como usar este texto no portfólio

- **Versão curta (hero do case):** um parágrafo da “Visão executiva” + bullets da stack.  
- **Versão média:** Visão executiva + Escopo funcional + SEO + Integrações.  
- **Versão longa / estudo de caso:** documento completo, enfatizando decisões de FormData, lazy imports do blog e pipeline de leads.

---

## Sumário em inglês (portfolio snippet)

**COIMCAMP — Marketing & lead-generation site for security/gate automation (Campinas region, Brazil).** Built with **Next.js 16 App Router** and **React 19**, using **TypeScript**, **Tailwind CSS 4**, and a **shadcn/Radix** component layer. Delivers a conversion-focused landing page, **eight detailed service case studies** with rich storytelling, and a **three-article SEO blog** rendered from **Portable Text** with dynamic imports. Lead flows (**schedule technical visit**, **request quote**) combine **react-hook-form + Zod**, **ViaCEP** address autofill, accessible **date/time** picking (**React Aria**), and optional **image uploads** to **Supabase Storage**, with transactional e-mail via **Resend**. Technical SEO includes **dynamic sitemap**, **robots.txt**, **canonical URLs**, **Organization/WebSite JSON-LD**, and **BlogPosting** structured data per article.

---

*Documento elaborado com base na revisão do código-fonte do repositório; datas de conteúdo dos posts e métricas de produção devem ser atualizadas conforme o deploy oficial.*
