import Link from "next/link";
import { cn } from "@/lib/utils";

export type PillNavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function PillNavLink({ href, label, className }: PillNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap font-inter font-medium text-foreground-muted text-xs transition-colors hover:text-accent sm:text-sm",
        "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        className,
      )}
    >
      {label}
    </Link>
  );
}
