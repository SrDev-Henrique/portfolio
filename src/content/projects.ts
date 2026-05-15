export type Project = {
  description: string;
  image: string;
  name: string;
  slug: string;
  tag: string;
};

export const projects: Project[] = [
  {
    slug: "coimcamp",
    name: "Coimcamp",
    tag: "Marketing e automacao",
    description:
      "Site comercial para empresa de seguranca e automacao, com conteudo estruturado, formularios integrados e suporte a arquivos.",
    image: "/images/projects/coimcamp/coimcamp-main.webp",
  },
  {
    slug: "jaber-seguros",
    name: "Jaber Seguros",
    tag: "Site institucional",
    description:
      "Site para corretora de seguros e consorcios, com paginas comerciais, conteudo legal e formulario de contato por e-mail.",
    image: "/images/projects/jaber-seguros/jaber-main.webp",
  },
  {
    slug: "achadinho-preferido",
    name: "Achadinho Preferido",
    tag: "Afiliados e painel admin",
    description:
      "Curadoria de achadinhos com links de afiliado, painel administrativo e integracao com API REST.",
    image: "/images/projects/achadinho-preferido/achadinho-main.webp",
  },
  {
    slug: "arcane",
    name: "Arcane",
    tag: "Frontend interativo",
    description:
      "Experiencia visual rica em animacoes e UX para explorar o universo de Arcane, demonstrando frontend moderno e responsivo.",
    image: "/images/projects/arcane/arcane-main.webp",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
