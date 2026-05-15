export type BlogReference = {
  href: string;
  label: string;
};

export type BlogContentSection = {
  bullets?: string[];
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: number;
  content: BlogContentSection[];
  date: string;
  dateTime: string;
  description: string;
  image: string;
  imageAlt: string;
  readTime: string;
  references: BlogReference[];
  slug: string;
  tag: "Insight" | "Recurso" | "Tutorial";
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    slug: "como-um-site-profissional-transforma-a-percepcao-do-seu-negocio",
    tag: "Insight",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "7 min de leitura",
    title: "Como um site profissional transforma a percepção do seu negócio",
    description:
      "Estratégias para usar design, performance e clareza para gerar mais confiança online.",
    image: "/images/blog/blog-1.jpg",
    imageAlt:
      "Notebook exibindo uma interface premium em uma mesa escura com identidade visual verde.",
    content: [
      {
        heading: "A percepção começa antes da primeira conversa",
        paragraphs: [
          "Quando alguém acessa o seu site, a pessoa ainda não conhece seu processo, seu cuidado com os detalhes ou a qualidade real da sua entrega. Ela avalia sinais: velocidade, clareza, hierarquia visual, organização das informações e facilidade para encontrar o próximo passo.",
          "Um site profissional reduz incertezas. Ele mostra que a empresa sabe se apresentar, entende o problema do cliente e tem estrutura para conduzir uma jornada de compra sem ruído. Isso vale para negócios locais, prestadores de serviço, e-commerces e produtos digitais.",
        ],
      },
      {
        heading: "Design não é enfeite, é orientação",
        paragraphs: [
          "O visual precisa ajudar o usuário a decidir. Uma boa interface direciona o olhar para mensagens importantes, cria contraste para chamadas de ação e organiza o conteúdo por prioridade. O visitante não deveria ter que adivinhar onde clicar ou por que aquela solução faz sentido para ele.",
          "Em projetos de alta conversão, cada seção responde a uma dúvida específica: quem é a empresa, o que ela resolve, para quem resolve, por que confiar, como funciona e qual é o próximo passo. O design só funciona bem quando sustenta essa lógica.",
        ],
        bullets: [
          "Use títulos que expliquem o valor, não apenas o nome da seção.",
          "Mostre provas: projetos, depoimentos, números, processos e diferenciais reais.",
          "Evite excesso de opções no mesmo bloco. Escolha uma ação principal por contexto.",
          "Trate mobile como experiência principal, não como adaptação tardia.",
        ],
      },
      {
        heading: "Performance também comunica profissionalismo",
        paragraphs: [
          "Um site lento cria a sensação de abandono antes mesmo do usuário ler a proposta. A documentação do web.dev define bons limites para Core Web Vitals: LCP de até 2,5 segundos, INP de até 200 milissegundos e CLS de até 0,1. Esses números não são detalhe técnico isolado: eles ajudam a medir se a experiência parece rápida, responsiva e estável.",
          "Para o cliente final, estabilidade visual significa confiança. Se botões mudam de lugar, imagens carregam empurrando textos ou a página demora para reagir, a percepção de qualidade cai. O usuário talvez não saiba nomear o problema, mas sente o atrito.",
        ],
      },
      {
        heading: "Conteúdo claro vende melhor que discurso genérico",
        paragraphs: [
          "Muitos sites falham porque tentam parecer sofisticados, mas não dizem com precisão o que fazem. Clareza é vantagem competitiva. Uma boa página inicial deve transformar dúvidas em entendimento rápido, usando linguagem específica, benefícios concretos e exemplos próximos da realidade do público.",
          "A descrição de serviços precisa sair do óbvio. Em vez de apenas dizer 'criamos sites', explique o tipo de site, o objetivo, os critérios de qualidade e o impacto esperado: captar leads, apresentar autoridade, facilitar orçamento, vender produtos ou integrar processos.",
        ],
      },
      {
        heading: "O site como ativo de negócio",
        paragraphs: [
          "Um site profissional não termina no lançamento. Ele vira uma base para campanhas, SEO, conteúdo, atendimento, análise de comportamento e evolução de ofertas. Quando a estrutura nasce bem planejada, cada melhoria futura custa menos e entrega mais.",
          "A pergunta central não é 'meu site está bonito?'. A pergunta melhor é: 'ele ajuda a pessoa certa a confiar, entender e agir?'. Quando a resposta é sim, o site deixa de ser vitrine e passa a ser parte real da operação comercial.",
        ],
      },
    ],
    references: [
      {
        label: "web.dev: Core Web Vitals thresholds",
        href: "https://web.dev/articles/defining-core-web-vitals-thresholds",
      },
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    id: 1,
    slug: "primeiros-passos-para-planejar-um-site-que-converte",
    tag: "Tutorial",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "8 min de leitura",
    title: "Primeiros passos para planejar um site que converte",
    description:
      "Um guia simples para organizar objetivo, público, páginas e chamadas antes do desenvolvimento.",
    image: "/images/blog/blog-2.jpg",
    imageAlt:
      "Mesa com wireframes, tablet e cartões de planejamento para interface digital.",
    content: [
      {
        heading: "Comece pelo objetivo de negócio",
        paragraphs: [
          "Um site que converte não nasce da pergunta 'quantas páginas precisamos?'. Ele começa com uma decisão mais importante: qual ação queremos que o visitante realize? Essa ação pode ser pedir orçamento, comprar, agendar uma conversa, baixar um material, preencher um formulário ou entender uma oferta complexa.",
          "Quando o objetivo fica claro, o restante do projeto ganha critério. O conteúdo, a navegação, o formulário, a ordem das seções e até a escolha das imagens passam a trabalhar para reduzir dúvidas e aproximar o usuário dessa ação.",
        ],
      },
      {
        heading: "Defina o público com precisão",
        paragraphs: [
          "Dizer que o público é 'todo mundo' enfraquece o site. Um bom planejamento descreve quem compra, o que essa pessoa já sabe, quais objeções aparecem antes do contato e qual linguagem ela considera confiável. Um diretor financeiro, uma clínica local e uma loja virtual não precisam da mesma argumentação.",
          "Esse recorte evita páginas genéricas. Também ajuda a decidir quais provas mostrar: cases, números, bastidores, garantias, depoimentos, certificações, prazos ou comparações entre planos.",
        ],
        bullets: [
          "Quem é o decisor e quem influencia a decisão?",
          "Qual problema fez essa pessoa procurar uma solução agora?",
          "Quais dúvidas impedem o contato?",
          "Que tipo de prova aumenta confiança nesse mercado?",
        ],
      },
      {
        heading: "Desenhe a jornada antes da interface",
        paragraphs: [
          "Antes de pensar em cores e animações, organize a sequência de raciocínio da página. Um fluxo comum é: promessa clara, contexto do problema, solução, diferenciais, prova, processo, perguntas frequentes e chamada para ação. Essa estrutura muda conforme o negócio, mas a lógica é sempre a mesma: guiar a decisão.",
          "Wireframes simples ajudam muito nessa etapa. Eles permitem discutir hierarquia e conteúdo sem se distrair com acabamento visual. É melhor descobrir cedo que uma seção não convence do que redesenhar tudo depois.",
        ],
      },
      {
        heading: "Planeje CTAs por intenção",
        paragraphs: [
          "Nem todo usuário está pronto para comprar. Por isso, chamadas de ação precisam respeitar níveis de intenção. Um visitante no começo da pesquisa pode preferir 'ver projetos' ou 'entender o processo'. Quem já está decidido precisa encontrar rapidamente 'solicitar orçamento' ou 'falar no WhatsApp'.",
          "A conversão melhora quando o site oferece caminhos claros sem transformar cada bloco em uma disputa por atenção. CTA demais vira ruído. CTA bem posicionado vira direção.",
        ],
      },
      {
        heading: "Prepare conteúdo antes de desenvolver",
        paragraphs: [
          "Projetos atrasam quando textos, imagens, serviços e diferenciais são decididos no improviso. Um briefing mínimo já deve reunir informações comerciais, referências visuais, tom de voz, principais dúvidas dos clientes e exemplos de trabalhos anteriores.",
          "Com esse material em mãos, o desenvolvimento deixa de ser tentativa e vira construção orientada. O resultado tende a ser mais claro, mais rápido de aprovar e mais alinhado com o que o negócio realmente precisa comunicar.",
        ],
      },
    ],
    references: [
      {
        label: "Google Search Central: conteúdo útil e estrutura para busca",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    id: 2,
    slug: "checklist-essencial-antes-de-publicar-um-site",
    tag: "Recurso",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "9 min de leitura",
    title: "Checklist essencial antes de publicar um site",
    description:
      "Itens importantes de performance, SEO, responsividade, acessibilidade e formulários.",
    image: "/images/blog/blog-3.jpg",
    imageAlt:
      "Notebook com painel de produto digital, celular e cartões com ícones técnicos.",
    content: [
      {
        heading: "Publicar não é apenas colocar no ar",
        paragraphs: [
          "O lançamento de um site deveria ser tratado como uma etapa de qualidade, não como o fim apressado do projeto. Antes de divulgar o link, é preciso verificar se a experiência funciona em dispositivos reais, se as páginas carregam bem, se os formulários enviam corretamente e se o conteúdo está pronto para ser entendido por pessoas e mecanismos de busca.",
          "Um checklist evita retrabalho e protege a percepção da marca. Pequenos erros de publicação podem custar oportunidades: botão quebrado, texto sem acento, imagem pesada, título duplicado ou formulário sem retorno visual.",
        ],
      },
      {
        heading: "Performance e estabilidade",
        paragraphs: [
          "Performance precisa ser testada antes da divulgação. O ideal é observar Core Web Vitals, tamanho das imagens, carregamento de fontes, scripts de terceiros e estabilidade visual durante o carregamento. O web.dev recomenda observar LCP, INP e CLS para entender se a experiência está rápida, responsiva e estável.",
          "Nem todo site precisa de engenharia complexa, mas todo site precisa respeitar o tempo do usuário. Imagens otimizadas, HTML sem excesso, CSS organizado e JavaScript controlado costumam resolver boa parte dos problemas.",
        ],
        bullets: [
          "Imagens com dimensões corretas, compressão adequada e texto alternativo.",
          "Fontes carregando sem causar salto visual perceptível.",
          "Componentes interativos respondendo sem atraso desconfortável.",
          "Layout sem elementos pulando durante o carregamento.",
        ],
      },
      {
        heading: "SEO básico e compartilhamento",
        paragraphs: [
          "Toda página importante deve ter título único, descrição coerente, hierarquia de headings e conteúdo que realmente responda à intenção do usuário. A documentação do Google reforça que títulos e descrições ajudam pessoas e mecanismos de busca a entenderem o conteúdo da página.",
          "Também vale verificar imagem social, favicon, idioma da página, URLs legíveis e links internos. O usuário pode encontrar seu site pelo Google, WhatsApp, LinkedIn ou anúncio. Em todos esses pontos, a prévia precisa parecer confiável.",
        ],
      },
      {
        heading: "Acessibilidade e uso real",
        paragraphs: [
          "Acessibilidade não deve ser vista como acabamento opcional. Contraste, foco visível, textos alternativos, botões com nome claro e navegação por teclado tornam o site mais robusto para todos. Muitas melhorias de acessibilidade também melhoram conversão, porque reduzem ambiguidade.",
          "Teste o site como usuário comum: em celular, com internet média, preenchendo formulários, abrindo menus, voltando páginas e clicando em links. Esse teste simples encontra problemas que uma tela bonita no desktop não mostra.",
        ],
      },
      {
        heading: "Formulários e mensuração",
        paragraphs: [
          "Formulários precisam validar campos, informar erros, confirmar envio e oferecer alternativa de contato quando algo falhar. Um formulário que parece enviar, mas não dá resposta, quebra confiança no momento mais sensível da jornada.",
          "Antes de divulgar, confirme também eventos de análise, metas, pixels e integrações. Sem mensuração, fica difícil saber quais canais geram resultado e quais partes da página precisam evoluir.",
        ],
      },
    ],
    references: [
      {
        label: "web.dev: Core Web Vitals thresholds",
        href: "https://web.dev/articles/defining-core-web-vitals-thresholds",
      },
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    id: 3,
    slug: "por-que-performance-tambem-e-uma-estrategia-de-vendas",
    tag: "Insight",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "7 min de leitura",
    title: "Por que performance também é uma estratégia de vendas",
    description:
      "Como velocidade, estabilidade e experiência afetam conversão e retenção.",
    image: "/images/blog/blog-4.png",
    imageAlt:
      "Notebook com painel de métricas de crescimento e celular em uma mesa escura.",
    content: [
      {
        heading: "Velocidade influencia comportamento",
        paragraphs: [
          "Performance não é apenas uma preocupação de desenvolvedor. Ela afeta a disposição do usuário para continuar navegando, comparar ofertas, preencher dados e confiar na experiência. Uma página que demora para carregar transmite a sensação de que o negócio não está preparado para atender bem.",
          "Em vendas digitais, cada segundo de atrito compete com distrações, concorrentes e urgências do usuário. Se a experiência parece pesada, a pessoa tende a simplificar a decisão: fecha a aba, adia o contato ou escolhe uma alternativa mais fluida.",
        ],
      },
      {
        heading: "Core Web Vitals traduzem percepção em métrica",
        paragraphs: [
          "Os Core Web Vitals ajudam a medir partes importantes da experiência. O LCP observa quando o conteúdo principal aparece, o INP mede a responsividade das interações e o CLS acompanha mudanças inesperadas de layout. Segundo o web.dev, bons valores ficam em até 2,5 segundos para LCP, até 200 milissegundos para INP e até 0,1 para CLS.",
          "Essas métricas são úteis porque aproximam tecnologia de percepção. Uma página pode parecer bonita em uma captura estática, mas falhar quando o usuário tenta tocar em um botão, ler um texto ou aguardar uma imagem carregar.",
        ],
      },
      {
        heading: "Performance aumenta a eficiência do tráfego",
        paragraphs: [
          "Quando uma empresa investe em anúncios, SEO ou redes sociais, cada visita tem custo. Se o site desperdiça parte desse tráfego por lentidão ou instabilidade, o problema não está apenas na tecnologia: está no retorno sobre investimento.",
          "Melhorar performance pode aumentar a eficiência dos canais existentes antes de aumentar orçamento. Em muitos casos, otimizar imagens, remover scripts desnecessários, simplificar componentes e melhorar cache traz mais impacto do que redesenhar tudo.",
        ],
      },
      {
        heading: "Experiência rápida também fortalece marca",
        paragraphs: [
          "Marcas fortes parecem consistentes. Isso inclui a forma como o site responde. Quando a navegação é rápida, os elementos carregam de forma estável e o conteúdo aparece sem esforço, o usuário percebe controle, cuidado e maturidade.",
          "O contrário também é verdadeiro. Uma interface travada pode enfraquecer uma oferta excelente. Se a experiência digital não acompanha a promessa comercial, a confiança fica menor antes da equipe ter chance de conversar.",
        ],
      },
      {
        heading: "O que priorizar primeiro",
        paragraphs: [
          "Comece pelas páginas que recebem tráfego ou geram contato. Home, páginas de serviço, landing pages e checkout merecem atenção antes de áreas internas com baixo impacto comercial. Depois, avalie gargalos reais com ferramentas de laboratório e dados de campo quando disponíveis.",
          "A melhor estratégia é tratar performance como rotina. Medir, corrigir e acompanhar evita que o site degrade com novas imagens, scripts, plugins e integrações adicionados ao longo do tempo.",
        ],
      },
    ],
    references: [
      {
        label: "web.dev: Core Web Vitals thresholds",
        href: "https://web.dev/articles/defining-core-web-vitals-thresholds",
      },
      {
        label: "Google Search Console: relatório de Core Web Vitals",
        href: "https://support.google.com/webmasters/answer/9205520",
      },
      {
        label: "HTTP Archive Web Almanac: Performance",
        href: "https://almanac.httparchive.org/en/2025/performance",
      },
    ],
  },
  {
    id: 4,
    slug: "como-estruturar-uma-api-para-crescer-com-seguranca",
    tag: "Tutorial",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "10 min de leitura",
    title: "Como estruturar uma API para crescer com segurança",
    description:
      "Conceitos práticos para pensar rotas, validação, autenticação e manutenção.",
    image: "/images/blog/blog-5.png",
    imageAlt:
      "Monitor exibindo diagrama de arquitetura de API com fluxos conectados.",
    content: [
      {
        heading: "Uma API boa começa pelo contrato",
        paragraphs: [
          "Antes de escrever endpoints, defina o contrato que clientes internos, frontends e integrações externas vão consumir. Nome das rotas, formato de payload, códigos de erro e regras de autenticação precisam ser previsíveis. Isso evita que cada nova funcionalidade crie um padrão diferente.",
          "APIs crescem rápido. O que começa com dois endpoints pode virar base para aplicativo, painel administrativo, checkout, automações e integrações com terceiros. Sem organização inicial, cada evolução fica mais cara.",
        ],
      },
      {
        heading: "Modele recursos, não telas",
        paragraphs: [
          "Um erro comum é desenhar APIs copiando a interface do momento. A tela muda, mas os recursos principais do domínio costumam permanecer: usuários, pedidos, produtos, pagamentos, agendas, documentos. Rotas orientadas a recursos tendem a ser mais estáveis.",
          "Isso não significa seguir REST de forma rígida em todos os casos. Significa criar uma linguagem consistente para o sistema. Quando a equipe entende a estrutura, fica mais fácil manter, testar e documentar.",
        ],
        bullets: [
          "Use nomes claros e consistentes para recursos.",
          "Separe operações públicas, autenticadas e administrativas.",
          "Evite retornar campos sensíveis por conveniência.",
          "Padronize respostas de erro para facilitar tratamento no frontend.",
        ],
      },
      {
        heading: "Validação protege o produto",
        paragraphs: [
          "Toda entrada externa deve ser validada. Isso inclui corpo da requisição, parâmetros, filtros, paginação e arquivos. Validação não é só segurança: é previsibilidade. Ela impede que dados quebrados contaminem relatórios, fluxos financeiros, automações e atendimento.",
          "O ideal é validar perto da borda da aplicação e transformar dados em formatos seguros antes de chegar à regra de negócio. Assim, o núcleo do sistema trabalha com informações confiáveis.",
        ],
      },
      {
        heading: "Autorização merece atenção desde o início",
        paragraphs: [
          "O OWASP API Security Top 10 destaca riscos como falhas de autorização em nível de objeto e autenticação quebrada. Na prática, isso significa que não basta saber quem é o usuário; a API precisa confirmar se ele pode acessar exatamente aquele recurso.",
          "Esse cuidado evita problemas graves, como um cliente visualizar dados de outro apenas trocando um identificador na URL. Segurança precisa ser parte do desenho da API, não uma camada improvisada depois.",
        ],
      },
      {
        heading: "Observabilidade e evolução",
        paragraphs: [
          "APIs profissionais registram erros, tempos de resposta e eventos importantes. Sem logs e métricas, investigar falhas vira tentativa. Com observabilidade mínima, é possível entender impacto, reproduzir problemas e priorizar correções.",
          "Também planeje versionamento ou compatibilidade. Quando consumidores externos dependem da API, mudanças bruscas podem quebrar integrações. Uma boa evolução preserva contratos existentes ou comunica transições com antecedência.",
        ],
      },
    ],
    references: [
      {
        label: "OWASP API Security Top 10 2023",
        href: "https://owasp.org/API-Security/editions/2023/en/0x00-header/",
      },
    ],
  },
  {
    id: 5,
    slug: "o-que-preparar-antes-de-contratar-um-desenvolvedor",
    tag: "Recurso",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "8 min de leitura",
    title: "O que preparar antes de contratar um desenvolvedor",
    description:
      "Materiais, referências e decisões que aceleram briefing, orçamento e execução.",
    image: "/images/blog/blog-6.png",
    imageAlt:
      "Notebook e celular com telas de produto digital ao lado de materiais de identidade visual.",
    content: [
      {
        heading: "Um bom briefing economiza semanas",
        paragraphs: [
          "Contratar desenvolvimento fica mais simples quando o problema já está bem explicado. O objetivo não é chegar com tudo decidido, mas reunir informações suficientes para que o profissional entenda contexto, prioridade e restrições. Isso melhora o orçamento e reduz retrabalho.",
          "Um briefing fraco costuma gerar propostas vagas. Um briefing claro permite estimar escopo, sugerir tecnologia adequada, identificar riscos e separar o que é essencial do que pode entrar em uma etapa futura.",
        ],
      },
      {
        heading: "Explique o resultado esperado",
        paragraphs: [
          "Comece pelo resultado de negócio: vender mais, captar leads, automatizar atendimento, organizar pedidos, validar uma ideia, melhorar performance ou integrar sistemas. Tecnologia é meio. Quando o resultado está claro, as decisões técnicas ganham direção.",
          "Também informe como o sucesso será medido. Pode ser volume de contatos, taxa de conversão, tempo economizado em um processo, redução de erros ou melhoria de posicionamento orgânico.",
        ],
      },
      {
        heading: "Reúna materiais antes do orçamento",
        paragraphs: [
          "Materiais visuais e comerciais ajudam muito. Logo, paleta, fotos, textos, catálogo, diferenciais, links de referência, exemplos de concorrentes e dúvidas frequentes reduzem incerteza. Quando algo ainda não existe, isso também precisa aparecer no escopo.",
          "Se o projeto envolve sistema, liste perfis de usuário, permissões, regras de negócio, integrações desejadas e exemplos de telas ou fluxos. Não precisa ser técnico; precisa ser específico.",
        ],
        bullets: [
          "Objetivo principal e público-alvo.",
          "Conteúdos existentes: textos, fotos, vídeos e documentos.",
          "Referências visuais com o que você gosta e o que quer evitar.",
          "Funcionalidades obrigatórias e funcionalidades desejáveis.",
          "Prazo ideal, orçamento aproximado e responsáveis pela aprovação.",
        ],
      },
      {
        heading: "Decida o que entra na primeira versão",
        paragraphs: [
          "Nem tudo precisa nascer no primeiro lançamento. Uma versão inicial bem feita pode validar oferta, captar contatos e gerar aprendizado. Depois, o produto evolui com base em dados reais. Essa abordagem reduz risco e evita gastar energia em funcionalidades que talvez não sejam usadas.",
          "O importante é não confundir MVP com algo descuidado. Uma primeira versão pode ser enxuta e ainda assim ter excelente qualidade visual, performance, segurança e clareza de navegação.",
        ],
      },
      {
        heading: "Transparência acelera a parceria",
        paragraphs: [
          "Compartilhe restrições desde o começo: sistemas legados, acesso a domínio, hospedagem, ferramentas já contratadas, dependências internas e prazos comerciais. Isso evita surpresas no meio do desenvolvimento.",
          "A melhor relação com um desenvolvedor é colaborativa. Quanto mais contexto existe, melhores são as decisões de produto, arquitetura e experiência. O resultado final tende a ficar mais alinhado com a necessidade real do negócio.",
        ],
      },
    ],
    references: [
      {
        label: "Google Search Central: planejamento de conteúdo para busca",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    id: 6,
    slug: "seo-tecnico-o-basico-que-todo-site-moderno-precisa",
    tag: "Insight",
    date: "15 Mai 2026",
    dateTime: "2026-05-15",
    readTime: "9 min de leitura",
    title: "SEO técnico: o básico que todo site moderno precisa",
    description:
      "Fundamentos de metadados, semântica, velocidade e organização de conteúdo.",
    image: "/images/blog/blog-7.png",
    imageAlt:
      "Notebook com painel analítico e visualização de conexões em uma mesa de trabalho.",
    content: [
      {
        heading: "SEO técnico é fundação, não truque",
        paragraphs: [
          "SEO técnico não substitui conteúdo bom, mas ajuda esse conteúdo a ser encontrado, interpretado e exibido corretamente. Ele envolve estrutura de páginas, performance, links internos, metadados, semântica, indexação e acessibilidade básica.",
          "Um site moderno precisa ser útil para pessoas e compreensível para buscadores. Quando a base técnica é fraca, conteúdos relevantes podem ter dificuldade para performar porque a experiência, a estrutura ou os sinais da página atrapalham.",
        ],
      },
      {
        heading: "Títulos e descrições precisam ser únicos",
        paragraphs: [
          "A documentação do Google recomenda títulos claros e úteis para cada página. O título ajuda o usuário a decidir se aquele resultado responde à sua busca. A descrição também deve resumir a proposta da página com precisão, sem repetir textos genéricos em todo o site.",
          "Em páginas de serviço, títulos e descrições devem combinar intenção de busca e proposta comercial. Em artigos, devem deixar claro o tema e o benefício da leitura.",
        ],
      },
      {
        heading: "Semântica organiza a leitura",
        paragraphs: [
          "Headings não são apenas tamanho de fonte. Eles estruturam o documento. Um H1 claro, subtítulos coerentes e seções bem separadas ajudam leitores, tecnologias assistivas e mecanismos de busca a entenderem a hierarquia do conteúdo.",
          "A semântica também aparece em botões, links, listas, imagens e formulários. Um link chamado 'clique aqui' é menos informativo do que 'ver projetos de sites profissionais'. Pequenas decisões acumulam clareza.",
        ],
        bullets: [
          "Use um H1 principal por página.",
          "Organize H2 e H3 por hierarquia real de conteúdo.",
          "Escreva textos alternativos úteis para imagens relevantes.",
          "Crie URLs legíveis e relacionadas ao tema da página.",
        ],
      },
      {
        heading: "Performance e rastreamento caminham juntos",
        paragraphs: [
          "Páginas rápidas tendem a oferecer melhor experiência para usuários e facilitam navegação em dispositivos móveis. Core Web Vitals ajudam a observar carregamento, interação e estabilidade visual. Para SEO, isso não deve ser tratado como detalhe separado da experiência.",
          "Também é importante evitar páginas bloqueadas por engano, links quebrados, redirecionamentos desnecessários e conteúdo que só aparece depois de interações difíceis de rastrear. A base precisa ser simples de acessar.",
        ],
      },
      {
        heading: "Dados estruturados e consistência",
        paragraphs: [
          "Dados estruturados podem ajudar buscadores a entenderem melhor tipos específicos de conteúdo, como artigos, produtos, FAQs e organizações. Eles não garantem destaque, mas aumentam a clareza do documento quando usados corretamente.",
          "Mais importante ainda é manter consistência: nome da empresa, contatos, serviços, endereços, links internos e informações comerciais precisam estar alinhados. SEO técnico funciona melhor quando o site inteiro comunica uma mesma realidade.",
        ],
      },
    ],
    references: [
      {
        label: "Google Search Central: SEO Starter Guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        label: "web.dev: Core Web Vitals thresholds",
        href: "https://web.dev/articles/defining-core-web-vitals-thresholds",
      },
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getHomeFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.slice(0, 2);
}

export function getFeaturedBlogPosts(id: number): BlogPost[] {
  if (id === 6) {
    return blogPosts[0] ? [blogPosts[0]] : [];
  }
  return blogPosts.filter((post) => post.id === id + 1);
}

export function getMainBlogPost() {
  return blogPosts[0];
}

export function getSecondaryBlogPosts() {
  return blogPosts.slice(1);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs() {
  return blogPosts.map((post) => post.slug);
}
