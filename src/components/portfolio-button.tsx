"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { requestLenisRouteReset } from "@/utils/lenis-route-reset";

const portfolioButtonVariants = cva(
  "group inline-flex h-16 items-center justify-center gap-4 rounded-full px-8 font-semibold text-base leading-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground shadow-[0_0_34px_rgb(var(--accent-rgb)/0.2)] hover:bg-accent-hover",
        outline:
          "border border-foreground/25 bg-transparent text-foreground-soft hover:border-accent/70 hover:text-accent-hover",
        "outline-green":
          "border border-accent/70 bg-transparent text-accent hover:bg-accent/10 hover:text-accent-hover",
      },
      size: {
        default: "h-16 px-8 text-base",
        sm: "h-12 gap-3 px-6 text-sm",
        lg: "h-18 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const portfolioButtonIconVariants = cva(
  "grid shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary: "size-11 bg-background text-accent",
        outline: "size-5 text-accent",
        "outline-green": "size-5 text-accent",
      },
      size: {
        default: "",
        sm: "group-data-[variant=primary]:size-9",
        lg: "group-data-[variant=primary]:size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type PortfolioButtonProps = Omit<React.ComponentProps<"button">, "type"> &
  Omit<React.ComponentProps<"a">, "type"> &
  VariantProps<typeof portfolioButtonVariants> & {
    href?: string;
    icon?: React.ReactNode;
    resetScroll?: boolean;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };

export function PortfolioButton({
  children,
  className,
  href,
  icon,
  onClick,
  resetScroll = false,
  size = "default",
  type = "button",
  variant = "primary",
  ...props
}: PortfolioButtonProps) {
  const iconContent = icon ?? <ArrowUpRight className="size-5 stroke-[2.6]" />;
  const classNameValue = cn(
    portfolioButtonVariants({ variant, size, className }),
  );
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !resetScroll) {
      return;
    }

    requestLenisRouteReset();
  };
  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(portfolioButtonIconVariants({ variant, size }))}
      >
        {iconContent}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        className={classNameValue}
        data-size={size}
        data-variant={variant}
        href={href}
        onClick={handleLinkClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classNameValue}
      data-size={size}
      data-variant={variant}
      onClick={onClick}
      type={type}
      {...props}
    >
      {content}
    </button>
  );
}
