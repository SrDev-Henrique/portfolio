"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type PillHeaderAvailabilityProps = {
  avaible?: boolean;
  className?: string;
};

export function PillHeaderAvailability({
  avaible = true,
  className,
}: PillHeaderAvailabilityProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
      }}
      exit={{
        opacity: 0,
        filter: "blur(4px)",
        transition: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
      }}
      className={cn(
        "absolute inset-0 flex min-w-0 flex-1 items-center justify-end gap-2.5 px-3 sm:gap-3",
        className,
      )}
    >
      <span className="truncate font-inter font-medium text-foreground text-sm tracking-tight sm:text-[0.9375rem]">
        {avaible ? "Disponível" : "Ocupado"}
      </span>
      <div
        className="relative flex size-3 shrink-0 items-center justify-center"
        aria-hidden
      >
        <span
          className={cn(
            "relative size-2 rounded-full shadow-[0_0_10px_rgb(var(--accent-rgb)/0.55)] ring-2 ring-accent/35",
            avaible ? "bg-accent" : "bg-destructive ring-2 ring-destructive/35",
          )}
        />
      </div>
    </motion.div>
  );
}
