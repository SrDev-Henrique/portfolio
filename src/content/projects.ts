export type Project = {
  caseStudy?: ProjectCaseStudy;
  description: string;
  image: string;
  liveUrl: string;
  name: string;
  slug: string;
  tag: string;
};

export type ProjectCaseStudy = {
  challenge: {
    body: string;
    title: string;
  };
  cta: {
    body: string;
    label: string;
  };
  decisions: string[];
  heroSummary: string;
  impact: string[];
  overview: {
    body: string;
    label: string;
    title: string;
  };
  placeholders: {
    eyebrow: string;
    hint: string;
    title: string;
  }[];
  showcaseImages?: {
    alt: string;
    caption: string;
    src: string;
  }[];
  solution: {
    body: string;
    title: string;
  };
  stack: string[];
  technicalDiagram?: {
    description: string;
    eyebrow: string;
    title: string;
    variant?:
      | "admin-composition"
      | "arcane-art-direction"
      | "lead-pipeline"
      | "service-routing";
  };
  visualSection?: {
    body: string;
    eyebrow: string;
    title: string;
  };
};

export const projects: Project[] = [
  {
    slug: "coimcamp",
    name: "Coimcamp",
    tag: "Marketing e automação",
    description:
      "Site comercial para empresa de segurança e automação, com conteúdo estruturado, formulários integrados e suporte a arquivos.",
    image: "/images/projects/coimcamp/coimcamp-main.webp",
    liveUrl: "https://coimcamp.com",
    caseStudy: {
      heroSummary:
        "Uma presença digital para transformar serviços de segurança e automação em uma jornada clara: entender a empresa, conhecer soluções, ler conteúdos úteis e solicitar atendimento com contexto suficiente para o time comercial agir rápido.",
      overview: {
        label: "Contexto",
        title: "Credibilidade, SEO local e captação em uma única experiência",
        body: "A Coimcamp atende demandas de automação de portões, cercas elétricas, alarmes, CFTV e serviços elétricos na região de Campinas, Valinhos e Vinhedo. O site precisava apresentar a empresa com seriedade, organizar frentes de serviço e criar caminhos diretos para visitantes que chegam por indicação, busca orgânica ou campanhas.",
      },
      challenge: {
        title: "O desafio",
        body: "O projeto precisava evitar uma página institucional rasa. A experiência deveria explicar o que a empresa faz, mostrar sinais de confiança, sustentar conteúdo de descoberta e converter interessados sem depender apenas de uma conversa informal no WhatsApp.",
      },
      solution: {
        title: "A solução",
        body: "A base foi desenhada como um funil comercial leve: landing page com proposta clara, catálogo de serviços, narrativas de casos, blog com estrutura de SEO e formulários para agendamento de visita ou solicitação de orçamento. Os formulários coletam endereço, tipo de serviço, urgência quando aplicável, data desejada e imagens do local.",
      },
      placeholders: [],
      technicalDiagram: {
        eyebrow: "Pipeline técnico",
        title: "Do formulário ao atendimento, sem perder contexto",
        description:
          "O fluxo combina validação, upload opcional de imagens e envio de e-mail para que cada solicitação chegue pronta para o time entender o cenário antes do primeiro contato.",
      },
      visualSection: {
        eyebrow: "Experiência em telas",
        title:
          "Uma jornada criada para transformar interesse em contato qualificado",
        body: "As telas mostram como a Coimcamp apresenta valor logo no início, organiza serviços de forma simples, coleta informações úteis no formulário e usa conteúdo editorial para fortalecer SEO local e confiança antes do primeiro atendimento.",
      },
      showcaseImages: [
        {
          src: "/images/projects/coimcamp/hero.png",
          alt: "Home do site da Coimcamp com proposta de valor e chamada principal",
          caption:
            "Home com proposta de valor, CTA e sinais de confiança acima da dobra.",
        },
        {
          src: "/images/projects/coimcamp/serviços.png",
          alt: "Seção de serviços do site da Coimcamp",
          caption:
            "Serviços organizados para explicar as soluções e sustentar a narrativa comercial.",
        },
        {
          src: "/images/projects/coimcamp/form.png",
          alt: "Formulário de agendamento do site da Coimcamp",
          caption:
            "Formulário pensado para captar dados úteis antes do primeiro atendimento.",
        },
        {
          src: "/images/projects/coimcamp/blog.png",
          alt: "Blog do site da Coimcamp com conteúdo editorial",
          caption:
            "Conteúdo editorial para SEO, autoridade e descoberta orgânica.",
        },
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Zod",
        "react-hook-form",
        "ViaCEP",
        "Resend",
        "Supabase Storage",
      ],
      decisions: [
        "Envio em multipart/form-data para combinar campos de texto e anexos sem inflar payload em JSON.",
        "Validação no cliente para UX imediata e verificações no servidor para proteger as rotas de formulário.",
        "Blog com imports dinâmicos para carregar apenas o artigo necessário e manter o site mais leve.",
        "SEO técnico com metadados, canonical, sitemap, robots e dados estruturados para reforçar descoberta orgânica.",
      ],
      impact: [
        "Conteúdo comercial organizado para visitantes que ainda estão comparando fornecedores.",
        "Formulários mais completos para reduzir idas e vindas antes do primeiro atendimento.",
        "Base técnica preparada para evoluir conteúdo, campanhas e novos casos sem refazer a arquitetura.",
      ],
      cta: {
        label: "Falar sobre um projeto assim",
        body: "Um case como este combina conteúdo, interface e backend de captação para transformar uma presença digital em ferramenta comercial.",
      },
    },
  },
  {
    slug: "jaber-seguros",
    name: "Jaber Seguros",
    tag: "Site institucional",
    description:
      "Site para corretora de seguros e consórcios, com páginas comerciais, conteúdo legal e formulário de contato por e-mail.",
    image: "/images/projects/jaber-seguros/jaber-main.webp",
    liveUrl: "https://jaberseguros.com",
    caseStudy: {
      heroSummary:
        "Um site institucional para uma corretora de seguros e consórcios, construído para transmitir confiança, organizar linhas de serviço e transformar visitantes em leads qualificados por meio de conteúdo, SEO e canais claros de contato.",
      overview: {
        label: "Contexto",
        title: "Confiança e clareza para um serviço baseado em relacionamento",
        body: "A Jaber Seguros precisava de uma presença digital capaz de conversar com pessoas físicas, empresas e gestores de benefícios. O projeto posiciona a corretora como uma parceira consultiva, com atuação nacional, atendimento humanizado e uma vitrine clara para seguros, consórcios e soluções sob medida.",
      },
      challenge: {
        title: "O desafio",
        body: "O setor de seguros exige credibilidade, precisão e conteúdo suficiente para educar o lead sem tornar a experiência pesada. O site precisava explicar diferentes produtos, preservar uma navegação simples e manter caminhos de conversão sempre próximos, seja por formulário, WhatsApp ou CTA contextual.",
      },
      solution: {
        title: "A solução",
        body: "A entrega combina uma home narrativa, páginas legais, página de contato e nove páginas dinâmicas de serviço geradas a partir de uma fonte de dados centralizada. Cada serviço pode ter descrição, diferenciais, FAQ, CTA e metadados próprios, mantendo escala editorial sem duplicar layouts.",
      },
      placeholders: [],
      technicalDiagram: {
        eyebrow: "Arquitetura de conteúdo",
        title:
          "Um template único para transformar serviços em páginas completas",
        description:
          "A estrutura usa uma fonte de dados tipada para gerar páginas, metadados e dados estruturados por serviço, mantendo escala editorial sem duplicar código.",
        variant: "service-routing",
      },
      visualSection: {
        eyebrow: "Experiência em telas",
        title:
          "Uma presença digital consultiva para explicar, orientar e converter",
        body: "As telas mostram como a Jaber Seguros apresenta confiança desde a primeira dobra, organiza produtos de seguro e consórcio, aprofunda serviços específicos e conduz o visitante para um contato mais contextualizado.",
      },
      showcaseImages: [
        {
          src: "/images/projects/jaber-seguros/hero.png",
          alt: "Home da Jaber Seguros com hero institucional e chamadas de contato",
          caption:
            "Home com proposta consultiva, CTAs claros e sinais de confiança logo no início.",
        },
        {
          src: "/images/projects/jaber-seguros/sobre-nos-1.png",
          alt: "Seção sobre a Jaber Seguros com mensagem institucional",
          caption:
            "Narrativa institucional para reforçar proximidade, experiência e credibilidade.",
        },
        {
          src: "/images/projects/jaber-seguros/sobre-nos-2.png",
          alt: "Bloco institucional da Jaber Seguros com diferenciais de atendimento",
          caption:
            "Conteúdo de apoio para tornar a corretora mais humana antes da conversão.",
        },
        {
          src: "/images/projects/jaber-seguros/serviços-1.png",
          alt: "Listagem de serviços da Jaber Seguros",
          caption:
            "Catálogo de seguros e consórcios organizado para facilitar a descoberta.",
        },
        {
          src: "/images/projects/jaber-seguros/serviços-2.png",
          alt: "Cards de serviços e soluções da Jaber Seguros",
          caption:
            "Blocos comerciais com caminhos claros para cada solução oferecida.",
        },
        {
          src: "/images/projects/jaber-seguros/serviços-3.png",
          alt: "Página de serviços da Jaber Seguros com detalhes e chamadas",
          caption:
            "Estrutura visual pensada para comparar opções e avançar para o contato.",
        },
        {
          src: "/images/projects/jaber-seguros/produto.png",
          alt: "Página de produto ou serviço específico da Jaber Seguros",
          caption:
            "Página de serviço com contexto, diferenciais, perguntas frequentes e CTA.",
        },
        {
          src: "/images/projects/jaber-seguros/form.png",
          alt: "Formulário de contato da Jaber Seguros",
          caption:
            "Formulário para transformar interesse em lead com informações úteis para atendimento.",
        },
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Radix/shadcn",
        "React Hook Form",
        "Zod",
        "Resend",
        "GSAP",
        "Motion",
        "Schema.org JSON-LD",
      ],
      decisions: [
        "Modelo de serviços tipado em TypeScript para escalar nove páginas dinâmicas sem duplicar estrutura visual.",
        "Metadados, Open Graph, canonical e dados estruturados por página para reforçar descoberta orgânica.",
        "Formulário com validação condicional para adaptar a coleta de dados ao tipo de seguro ou consórcio.",
        "Hero com vídeo otimizado, poster prioritário e respeito a preferências de redução de movimento.",
      ],
      impact: [
        "Presença digital profissional para apoiar confiança antes do contato humano.",
        "Conteúdo de serviço organizado para educar o lead e reduzir fricção comercial.",
        "Base preparada para campanhas, novas páginas de serviço e evolução contínua da copy.",
      ],
      cta: {
        label: "Falar sobre um site institucional",
        body: "Um projeto como este transforma conteúdo comercial complexo em uma experiência consultiva, clara e pronta para captar oportunidades.",
      },
    },
  },
  {
    slug: "achadinho-preferido",
    name: "Achadinho Preferido",
    tag: "Afiliados e painel admin",
    description:
      "Curadoria de achadinhos com links de afiliado, painel administrativo e integração com API REST.",
    image: "/images/projects/achadinho-preferido/achadinho-main.webp",
    liveUrl: "https://achadinhopreferido.com.br",
    caseStudy: {
      heroSummary:
        "Uma vitrine de afiliados com curadoria de ofertas, busca, filtros, favoritos, SEO e um painel administrativo completo para gerenciar catálogo, acompanhar cliques e manter a operação comercial em movimento.",
      overview: {
        label: "Contexto",
        title: "Uma loja de descoberta, não de checkout",
        body: "O Achadinho Preferido funciona como um produto de marketing de afiliados: a plataforma organiza ofertas de marketplaces, exibe preços e descontos, e direciona o visitante para a loja oficial por meio de links rastreados. O valor está na curadoria, na descoberta rápida e na capacidade de entender quais produtos realmente geram interesse.",
      },
      challenge: {
        title: "O desafio",
        body: "O projeto precisava conectar loja pública, painel administrativo, API externa, autenticação e analytics em uma experiência estável. Como frontend e backend podem viver em origens diferentes, a arquitetura também precisava resolver sessão, cookies e acesso administrativo sem fragilizar a experiência em produção.",
      },
      solution: {
        title: "A solução",
        body: "A aplicação usa Next.js com App Router, rotas públicas para vitrine e conteúdo institucional, BFF para autenticação e API REST, além de um painel admin protegido para CRUD de catálogo, categorias, plataformas, ações em lote, dashboard de KPIs, exploração de cliques e exportação CSV.",
      },
      placeholders: [],
      technicalDiagram: {
        eyebrow: "Composição do admin",
        title: "Curadoria de catálogo com operação e analytics no mesmo fluxo",
        description:
          "O painel foi planejado para combinar formulário de produto, variantes multimídia, operações em lote e análise exportável sem perder consistência visual entre loja pública e área administrativa.",
        variant: "admin-composition",
      },
      visualSection: {
        eyebrow: "Experiência em telas",
        title: "Uma vitrine de ofertas com bastidores operacionais completos",
        body: "As telas mostram como o Achadinho Preferido une descoberta pública, páginas institucionais, catálogo de ofertas e uma área administrativa capaz de manter produtos, categorias e cliques sob controle.",
      },
      showcaseImages: [
        {
          src: "/images/projects/achadinho-preferido/hero.png",
          alt: "Home do Achadinho Preferido com vitrine de ofertas",
          caption:
            "Home com proposta de curadoria, destaque para ofertas e caminhos rápidos para descoberta.",
        },
        {
          src: "/images/projects/achadinho-preferido/ofertas.png",
          alt: "Listagem de ofertas do Achadinho Preferido",
          caption:
            "Catálogo público com ofertas organizadas para busca, comparação e clique rastreado.",
        },
        {
          src: "/images/projects/achadinho-preferido/sobre.png",
          alt: "Página sobre do Achadinho Preferido",
          caption:
            "Página institucional para explicar a proposta do produto sem simular um e-commerce próprio.",
        },
        {
          src: "/images/projects/achadinho-preferido/#contato.png",
          alt: "Página de contato do Achadinho Preferido",
          caption:
            "Contato direto para suporte, parcerias e relacionamento com a operação.",
        },
        {
          src: "/images/projects/achadinho-preferido/dashboard.png",
          alt: "Dashboard administrativo do Achadinho Preferido",
          caption:
            "Dashboard administrativo para acompanhar produtos, cliques e sinais principais da operação.",
        },
        {
          src: "/images/projects/achadinho-preferido/dashboard-2.png",
          alt: "Visão complementar do painel administrativo do Achadinho Preferido",
          caption:
            "Visão operacional com indicadores e áreas de atenção para gestão diária.",
        },
        {
          src: "/images/projects/achadinho-preferido/admin-produto.png",
          alt: "Formulário administrativo de produto do Achadinho Preferido",
          caption:
            "Formulário de produto para dados comerciais, links de afiliado, categorias, plataforma e publicação.",
        },
        {
          src: "/images/projects/achadinho-preferido/categorias.png",
          alt: "Tela administrativa de categorias do Achadinho Preferido",
          caption:
            "Gestão de categorias para manter a curadoria organizada e escalável.",
        },
        {
          src: "/images/projects/achadinho-preferido/admin-cliques.png",
          alt: "Tela de analytics de cliques do Achadinho Preferido",
          caption:
            "Analytics de cliques com filtros, gráfico e exportação CSV para leitura comercial.",
        },
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/Radix",
        "TanStack Query",
        "TanStack Table",
        "React Hook Form",
        "Zod",
        "Better Auth",
        "Recharts",
        "Resend",
        "BFF REST/Auth",
      ],
      decisions: [
        "BFF para autenticação e REST, encaminhando cookies e evitando problemas de sessão entre domínios diferentes.",
        "URL como fonte de verdade para filtros de catálogo, mantendo busca, ordenação e compartilhamento previsíveis.",
        "CTA de afiliado como link real para o endpoint de redirect, preservando navegação, rastreamento e semântica.",
        "Painel admin com React Query, tabelas, ações em lote e degradação independente de widgets quando uma fonte falha.",
      ],
      impact: [
        "Produto B2C completo para descoberta de ofertas e redirecionamento de afiliados.",
        "Operação administrativa mais produtiva, com catálogo, variantes, categorias, plataformas e analytics no mesmo fluxo.",
        "Arquitetura preparada para frontend e backend separados, SEO de catálogo e evolução contínua do negócio.",
      ],
      cta: {
        label: "Falar sobre uma plataforma assim",
        body: "Um projeto como este une vitrine pública, painel interno e integrações reais para transformar curadoria em produto digital operável.",
      },
    },
  },
  {
    slug: "arcane",
    name: "Arcane",
    tag: "Frontend interativo",
    description:
      "Experiência visual rica em animações e UX para explorar o universo de Arcane, demonstrando frontend moderno e responsivo.",
    image: "/images/projects/arcane/arcane-main.webp",
    liveUrl: "https://arcane-lime.vercel.app",
    caseStudy: {
      heroSummary:
        "Uma experiência editorial imersiva sobre Arcane, criada como peça de portfólio para demonstrar frontend moderno, motion design, scroll suave, rotas estáticas de personagens e exploradores de temporada com atmosfera cinematográfica.",
      overview: {
        label: "Contexto",
        title: "Um projeto não oficial, visual e feito para portfólio",
        body: "Arcane foi desenvolvido sem fins comerciais como uma homenagem interativa ao universo da série. A proposta era criar uma experiência de alto impacto visual, com navegação editorial, contraste entre Piltover e Zaun, personagens com identidade própria e uma camada de animação capaz de transformar conteúdo denso em uma jornada memorável.",
      },
      challenge: {
        title: "O desafio",
        body: "O projeto precisava fugir da sensação de template, suportar muito conteúdo e manter fluidez mesmo com vídeos, transições, páginas de personagem, exploradores de temporada e interações em scroll. Também era importante funcionar bem em desktop e mobile sem perder a atmosfera visual que sustenta o conceito.",
      },
      solution: {
        title: "A solução",
        body: "A arquitetura combina Next.js, React, TypeScript, SCSS Modules, Framer Motion e Lenis. A home funciona como uma narrativa vertical, personagens são renderizados em rotas estáticas, temporadas ganham experiências fullscreen, e os dados de personagens e episódios ficam organizados em arquivos tipados para separar conteúdo e apresentação.",
      },
      placeholders: [],
      technicalDiagram: {
        eyebrow: "Art direction & UI",
        title: "Experiência imersiva Arcane",
        description:
          "A direção visual traduz a dualidade Piltover e Zaun em paleta, tipografia, layout e movimento, tratando o conteúdo como uma exposição digital cinematográfica em vez de um wiki.",
        variant: "arcane-art-direction",
      },
      visualSection: {
        eyebrow: "Experiência em telas",
        title: "Do hero cinematográfico aos mundos de Piltover e Zaun",
        body: "A sequência visual acompanha a narrativa do site: abertura em tela cheia, passagem pela elegância clara de Piltover, mergulho no polo escuro de Zaun e fechamento com áreas promocionais e musicais que reforçam o caráter sensorial do projeto.",
      },
      showcaseImages: [
        {
          src: "/images/projects/arcane/hero.png",
          alt: "Hero cinematográfico do projeto Arcane",
          caption:
            "Hero em tela cheia com atmosfera cinematográfica, vídeo como textura e entrada de marca.",
        },
        {
          src: "/images/projects/arcane/piltover-intro.png",
          alt: "Introdução da região de Piltover no projeto Arcane",
          caption:
            "Piltover abre o eixo claro da experiência, com bege, luz e sensação institucional.",
        },
        {
          src: "/images/projects/arcane/piltover-historia.png",
          alt: "Seção narrativa sobre Piltover no projeto Arcane",
          caption:
            "Texto e imagem em composição editorial para apresentar história sem parecer enciclopédia.",
        },
        {
          src: "/images/projects/arcane/piltover-personagens-intro.png",
          alt: "Introdução dos personagens de Piltover no projeto Arcane",
          caption:
            "Cards e ritmo de scroll aproximam os personagens de uma vitrine de museu digital.",
        },
        {
          src: "/images/projects/arcane/piltover-personagem-hero.png",
          alt: "Hero de personagem de Piltover no projeto Arcane",
          caption:
            "Microsites por personagem reforçam identidade própria sem quebrar o sistema visual global.",
        },
        {
          src: "/images/projects/arcane/piltover-personagem-banner.png",
          alt: "Banner de personagem de Piltover no projeto Arcane",
          caption:
            "Banners de personagem funcionam como capas editoriais dentro do universo claro de Piltover.",
        },
        {
          src: "/images/projects/arcane/piltover-personagem-historia-jornada.png",
          alt: "Seção de jornada de personagem de Piltover no projeto Arcane",
          caption:
            "A jornada do personagem organiza texto longo em blocos visuais com ritmo de leitura controlado.",
        },
        {
          src: "/images/projects/arcane/piltover-personagem-historia-temporada.png",
          alt: "Seção de temporada de personagem de Piltover no projeto Arcane",
          caption:
            "História por temporada mantém a narrativa conectada sem transformar o conteúdo em wiki.",
        },
        {
          src: "/images/projects/arcane/zaun-first-intro.png",
          alt: "Primeira introdução visual de Zaun no projeto Arcane",
          caption:
            "Zaun muda o clima imediatamente: preto, tensão e verde químico como linguagem dominante.",
        },
        {
          src: "/images/projects/arcane/zaun-second-intro.png",
          alt: "Segunda introdução visual de Zaun no projeto Arcane",
          caption:
            "Colunas, vídeo e contraste alto criam sensação industrial e subterrânea.",
        },
        {
          src: "/images/projects/arcane/zaun-historia.png",
          alt: "Seção narrativa sobre Zaun no projeto Arcane",
          caption:
            "A narrativa de Zaun usa sombra, textura e recortes visuais para sustentar resistência e conflito.",
        },
        {
          src: "/images/projects/arcane/zaun-personagens-intro.png",
          alt: "Introdução dos personagens de Zaun no projeto Arcane",
          caption:
            "Personagens de Zaun entram em uma camada mais escura, tensa e underground.",
        },
        {
          src: "/images/projects/arcane/zaun-personagem-hero.png",
          alt: "Hero de personagem de Zaun no projeto Arcane",
          caption:
            "Rotas de personagem alternam tema por região, reforçando onde o usuário está no universo.",
        },
        {
          src: "/images/projects/arcane/zaun-personagem-banner.png",
          alt: "Banner de personagem de Zaun no projeto Arcane",
          caption:
            "Banners escuros ampliam a sensação de tensão e identidade underground dos personagens de Zaun.",
        },
        {
          src: "/images/projects/arcane/zaun-personagem-historia-jornada.png",
          alt: "Seção de jornada de personagem de Zaun no projeto Arcane",
          caption:
            "A jornada em Zaun usa contraste forte e composição mais densa para sustentar conflito.",
        },
        {
          src: "/images/projects/arcane/zaun-personagem-historia-temporada.png",
          alt: "Seção de temporada de personagem de Zaun no projeto Arcane",
          caption:
            "Recortes por temporada ajudam a navegar conteúdo extenso sem perder atmosfera.",
        },
        {
          src: "/images/projects/arcane/arcane-dark-season-1.png",
          alt: "Tela escura da primeira temporada no projeto Arcane",
          caption:
            "Temporada 1 assume o polo escuro, aproximando a navegação de uma experiência de streaming editorial.",
        },
        {
          src: "/images/projects/arcane/arcane-dark-season-2.png",
          alt: "Tela escura da segunda temporada no projeto Arcane",
          caption:
            "Temporada 2 amplia a camada cinematográfica com foco em episódios, vídeos e highlights.",
        },
        {
          src: "/images/projects/arcane/temporada-2-episodio-list.png",
          alt: "Listagem de episódios da segunda temporada no projeto Arcane",
          caption:
            "A listagem de episódios organiza descoberta e progressão dentro de uma interface fullscreen.",
        },
        {
          src: "/images/projects/arcane/temporada-2-episodio.png",
          alt: "Detalhe de episódio da segunda temporada no projeto Arcane",
          caption:
            "Detalhes de episódio usam hierarquia dramática para manter sinopse, mídia e navegação em equilíbrio.",
        },
        {
          src: "/images/projects/arcane/temporada-2-highlights.png",
          alt: "Highlights da segunda temporada no projeto Arcane",
          caption:
            "Highlights em vídeo reforçam movimento como textura narrativa, não apenas decoração.",
        },
        {
          src: "/images/projects/arcane/termporada-2-video-1.png",
          alt: "Primeiro vídeo da segunda temporada no projeto Arcane",
          caption:
            "Vídeos inline funcionam como momentos de pausa visual dentro do fluxo editorial.",
        },
        {
          src: "/images/projects/arcane/temporada-2-video-2.png",
          alt: "Segundo vídeo da segunda temporada no projeto Arcane",
          caption:
            "A experiência de temporada combina imagem, vídeo e tipografia para criar clima de sala de cinema.",
        },
        {
          src: "/images/projects/arcane/arcane-dark-promo.png",
          alt: "Tela promocional escura do projeto Arcane",
          caption:
            "Áreas promocionais seguem o polo escuro, com leitura próxima a uma sala de cinema.",
        },
        {
          src: "/images/projects/arcane/arcane-dark-music.png",
          alt: "Tela musical escura do projeto Arcane",
          caption:
            "A camada musical adiciona sensação sensorial ao case, conectando personagem, atmosfera e navegação.",
        },
      ],
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "SCSS Modules",
        "Framer Motion",
        "Lenis",
        "next-view-transitions",
        "react-device-detect",
        "react-icons",
        "Sass",
      ],
      decisions: [
        "Dados tipados para personagens e temporadas, separando conteúdo extenso da camada de interface.",
        "Rotas estáticas para microsites de personagens, deixando a navegação previsível e performática.",
        "Motion design como parte do produto, com scroll suave, transições de rota e animações coordenadas por seção.",
        "Identidade visual por região para reforçar o contraste narrativo entre Piltover e Zaun.",
      ],
      impact: [
        "Peça de portfólio de alto impacto para demonstrar sensibilidade visual e domínio de frontend editorial.",
        "Conteúdo denso organizado em uma experiência navegável, com personagens, temporadas e extras.",
        "Base técnica que mostra componentização, dados tipados, rotas estáticas e animações aplicadas com intenção.",
      ],
      cta: {
        label: "Falar sobre uma experiência imersiva",
        body: "Um projeto como este mostra como narrativa, interface e motion podem transformar conteúdo de entretenimento em uma experiência digital marcante.",
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
