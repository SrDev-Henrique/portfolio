import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import TVStaticCanvas from "@/components/canvas-rain";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Providers } from "./providers";

export const metadata: Metadata = {
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
        <Providers>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <ThemeSwitcher />
          <TVStaticCanvas animated />
        </Providers>
      </body>
    </html>
  );
}
