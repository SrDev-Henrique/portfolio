import type { Metadata } from "next";
import "./globals.css";
import TVStaticCanvas from "@/components/canvas-rain";

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
    <html lang="pt-BR">
      <body className="dark relative antialiased">
        <TVStaticCanvas animated />
        {children}
      </body>
    </html>
  );
}
