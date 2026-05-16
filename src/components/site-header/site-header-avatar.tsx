"use client";

import { useTheme } from "@teispace/next-themes";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SiteHeaderAvatarProps = {
  href?: string;
  imageSrc?: string;
  imageSrcSecondary?: string;
  imageAlt?: string;
  className?: string;
};

export function SiteHeaderAvatar({
  href = "/",
  imageSrc = "/images/me.png",
  imageSrcSecondary = "/images/me-2.png",
  imageAlt = "Henrique Albuquerque",
  className,
}: SiteHeaderAvatarProps) {
  const { resolvedTheme } = useTheme<"light" | "dark">();
  const isLight = resolvedTheme === "light";

  return (
    <Link
      href={href}
      aria-label={`Ir para o início — ${imageAlt}`}
      className={cn(
        "relative block size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border transition-opacity hover:opacity-90 sm:size-10",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="70px"
        className="scale-140 object-cover object-[50%_1%]"
        aria-hidden
      />
      <motion.span
        className="absolute inset-0 overflow-hidden"
        initial={{
          clipPath: isLight
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        animate={{
          clipPath: isLight
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={imageSrcSecondary}
          alt={imageAlt}
          fill
          priority
          sizes="70px"
          className="scale-140 object-cover object-[50%_1%]"
          aria-hidden
        />
      </motion.span>
    </Link>
  );
}
