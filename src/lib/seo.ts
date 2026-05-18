import type { Metadata } from "next";

export const siteConfig = {
  creator: "Henrique Albuquerque",
  description:
    "Desenvolvimento full stack para websites, webapps, e-commerce e APIs com foco em performance, SEO e resultado.",
  email: "contato@henriquealbuquerque.dev",
  locale: "pt_BR",
  name: "Henrique Albuquerque",
  ogImage: "/images/seo.jpeg",
  title: "Henrique Albuquerque | Desenvolvedor Full Stack",
  whatsapp: "https://wa.me/5519994012785",
};

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined) ??
    "http://localhost:3000";

  return siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function createPageMetadata({
  description,
  image = siteConfig.ogImage,
  imageAlt = "Henrique Albuquerque, desenvolvedor full stack",
  path = "/",
  title,
  type = "website",
}: {
  description: string;
  image?: string;
  imageAlt?: string;
  path?: string;
  title: string;
  type?: "article" | "profile" | "website";
}): Metadata {
  const url = absoluteUrl(path);

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      images: [
        {
          alt: imageAlt,
          url: image,
        },
      ],
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      type,
      url,
    },
    title: {
      absolute: title,
    },
    twitter: {
      card: "summary_large_image",
      description,
      images: [
        {
          alt: imageAlt,
          url: image,
        },
      ],
      title,
    },
  };
}
