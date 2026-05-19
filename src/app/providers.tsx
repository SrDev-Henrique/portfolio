"use client";

import { ThemeProvider } from "@teispace/next-themes";
import type { ReactNode } from "react";
import { CursorTrackerProvider } from "@/components/cursor-tracker";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storage="local"
    >
      <CursorTrackerProvider>{children}</CursorTrackerProvider>
    </ThemeProvider>
  );
}
