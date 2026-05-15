"use client";

import { useTheme } from "@teispace/next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme<"light" | "dark">();

  const isDark = resolvedTheme !== "light";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <div className="jutify-center fixed bottom-5 left-1/2 z-999 flex -translate-x-1/2 items-center rounded-full bg-accent p-0.5 text-accent-foreground shadow-[0_0_28px_rgb(var(--glow-rgb)/0.22)] ring-1 ring-accent-foreground/20">
      <button
        type="button"
        aria-label={`Ativar tema ${isDark ? "claro" : "escuro"}`}
        aria-pressed={isDark}
        className="relative h-4 w-9 rounded-full transition-colors duration-300 hover:bg-accent-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={() => setTheme(nextTheme)}
      >
        <motion.span
          className="absolute top-1/2 flex size-3.5 -translate-y-1/2 items-center justify-center rounded-full bg-background text-accent shadow-sm transition-transform duration-300 ease-out"
          initial={{ x: isDark ? 0.5 : 6 }}
          animate={{ x: isDark ? 0.5 : 21.5 }}
          transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
        >
          {isDark ? (
            <Moon
              className="size-2.5 stroke-[2.4] transition-all duration-300 ease-out"
              aria-hidden="true"
            />
          ) : (
            <Sun
              className="size-2.5 stroke-[2.4] transition-all duration-300 ease-out"
              aria-hidden="true"
            />
          )}
        </motion.span>
      </button>
    </div>
  );
}
