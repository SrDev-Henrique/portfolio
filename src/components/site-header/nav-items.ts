export type SiteNavItem = {
  href: string;
  label: string;
};

/** Anchors must match section `id`s on the home page */
export const SITE_NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
] as const satisfies readonly SiteNavItem[];
