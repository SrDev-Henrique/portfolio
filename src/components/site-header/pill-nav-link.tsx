import Link from "next/link";
import { cn } from "@/lib/utils";

export type PillNavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export function PillNavLink({
  href,
  label,
  className,
  onNavigate,
}: PillNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "whitespace-nowrap font-inter font-medium text-foreground-muted text-sm transition-colors hover:text-accent",
        "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        className,
      )}
    >
      {label}
    </Link>
  );
}
