"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { SITE_NAV_ITEMS } from "./nav-items";
import { PillHeaderContact } from "./pill-header-contact";
import { PillNavLink } from "./pill-nav-link";
import { SiteHeaderAvatar } from "./site-header-avatar";

const navVariants = {
  open: {
    height: "auto",
    borderRadius: "25px",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  closed: {
    height: "45px",
    borderRadius: "30px",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export type MobileHeaderProps = {
  avaible?: boolean;
  className?: string;
};

export function MobileHeader({ avaible = true, className }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <motion.nav
      ref={headerRef}
      layout
      variants={navVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "relative flex h-12 w-57 flex-col items-center justify-start gap-2.5 rounded-full bg-card/95 px-3 pt-1 sm:gap-3",
        "pointer-events-auto cursor-pointer overflow-hidden",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="shrink-0">
          <SiteHeaderAvatar className="sm:size-9" />
        </div>
        <div className="flex items-center gap-2">
          <span className="truncate font-inter font-medium text-[0.9375rem] text-foreground tracking-tight">
            {avaible ? "Disponível" : "Ocupado"}
          </span>
          <div
            className="relative flex size-3 shrink-0 items-center justify-center"
            aria-hidden
          >
            <span
              className={cn(
                "relative size-2 rounded-full shadow-[0_0_10px_rgb(var(--accent-rgb)/0.55)] ring-2 ring-accent/35",
                avaible
                  ? "bg-accent"
                  : "bg-destructive ring-2 ring-destructive/35",
              )}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-8 cursor-pointer items-center justify-center rounded-full border bg-accent text-primary-foreground"
        >
          <AnimatePresence mode="popLayout">
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                key="open"
              >
                <X className="size-4" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                key="closed"
              >
                <Menu className="size-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="flex h-fit w-full flex-col gap-8 pb-3">
        <ul className="flex w-full min-w-0 flex-col items-center justify-center gap-4 px-1 py-2 sm:gap-7 sm:px-2">
          {SITE_NAV_ITEMS.map((item) => (
            <li key={item.href} className="shrink-0">
              <PillNavLink
                href={item.href}
                label={item.label}
                onNavigate={() => setIsOpen(false)}
              />
            </li>
          ))}
        </ul>
        <PillHeaderContact
          className="mx-auto w-fit bg-accent"
          onNavigate={() => setIsOpen(false)}
        />
      </div>
    </motion.nav>
  );
}
