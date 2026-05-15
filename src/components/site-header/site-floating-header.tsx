"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { MobileHeader } from "./mobile-header";
import { SITE_NAV_ITEMS } from "./nav-items";
import { PillHeaderAvailability } from "./pill-header-availability";
import { PillHeaderContact } from "./pill-header-contact";
import { PillNavLink } from "./pill-nav-link";
import { SiteHeaderAvatar } from "./site-header-avatar";
import { useHeaderScrollCompact } from "./use-header-scroll-compact";
import { useDesktopHeaderEnabled } from "./use-show-desktop-header";

export type SiteFloatingHeaderProps = {
  className?: string;
  /** Shown in the compact (scrolled-down) state */
  availabilityLabel?: string;
};

const navTransition = {
  layout: { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.7 },
};

export function SiteFloatingHeader({
  className,
  availabilityLabel,
}: SiteFloatingHeaderProps) {
  const compact = useHeaderScrollCompact();
  const showDesktopHeader = useDesktopHeaderEnabled();

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-4 z-950 flex justify-center px-3 sm:top-6 sm:px-4",
        className,
      )}
    >
      {showDesktopHeader ? (
        <motion.nav
          layout
          transition={navTransition.layout}
          className={cn(
            "pointer-events-auto flex items-center gap-2 overflow-hidden rounded-full border border-border shadow-lg backdrop-blur-md",
            "bg-card/95 text-card-foreground",
            compact
              ? "w-42 max-w-md py-1.5 pr-3 pl-2"
              : "w-full max-w-120 py-1.5 pr-2 pl-2 sm:gap-4 sm:px-4",
          )}
          aria-label="Navegação principal"
        >
          <motion.div layout className="shrink-0">
            <SiteHeaderAvatar />
          </motion.div>

          <AnimatePresence initial={false} mode="popLayout">
            {compact ? (
              <PillHeaderAvailability
                key="availability"
                avaible={availabilityLabel === "Disponível"}
              />
            ) : (
              <motion.div
                key="nav-expanded"
                layout
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="flex min-w-98 flex-1 shrink-0 items-center gap-2 sm:gap-4"
              >
                <ul className="flex min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto overscroll-x-contain px-1 py-0.5 sm:gap-7 sm:px-2">
                  {SITE_NAV_ITEMS.map((item) => (
                    <li key={item.href} className="shrink-0">
                      <PillNavLink href={item.href} label={item.label} />
                    </li>
                  ))}
                </ul>
                <PillHeaderContact />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      ) : (
        <MobileHeader />
      )}
    </header>
  );
}
