import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Suspense } from "react";
import TVStaticCanvas from "@/components/canvas-rain";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import ClientSideScrollRestorer from "@/utils/scroll-restoration";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Henrique Albuquerque",
  description:
    "Especialista em desenvolvimento web. Websites, webapps e e-commerce.",
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
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
            <ThemeSwitcher />
            <TVStaticCanvas animated />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
