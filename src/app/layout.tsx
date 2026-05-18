import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Suspense } from "react";
import TVStaticCanvas from "@/components/canvas-rain";
import { SiteFooter } from "@/components/site-footer";
import { SiteFloatingHeader } from "@/components/site-header";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/seo";
import ClientSideScrollRestorer from "@/utils/scroll-restoration";
import { Providers } from "./providers";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  category: "technology",
  creator: siteConfig.creator,
  description: siteConfig.description,
  formatDetection: {
    email: false,
    telephone: false,
  },
  keywords: [
    "desenvolvedor full stack",
    "desenvolvimento web",
    "criação de sites",
    "webapps",
    "e-commerce",
    "Next.js",
    "React",
    "SEO técnico",
    "performance web",
  ],
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: "Henrique Albuquerque, desenvolvedor full stack",
        url: siteConfig.ogImage,
      },
    ],
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    type: "website",
    url: absoluteUrl(),
  },
  publisher: siteConfig.name,
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: [
      {
        alt: "Henrique Albuquerque, desenvolvedor full stack",
        url: siteConfig.ogImage,
      },
    ],
    title: siteConfig.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="relative antialiased">
        <Suspense>
          <Providers>
            <ClientSideScrollRestorer />
            <SiteFloatingHeader availabilityLabel="Disponível" />
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
            <ThemeSwitcher />
            <TVStaticCanvas animated />
            <SiteFooter />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
