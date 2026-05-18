import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PillHeaderContactProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function PillHeaderContact({
  href = "/#contato",
  label = "Contato",
  className,
}: PillHeaderContactProps) {
  return (
    <Button
      asChild
      variant="default"
      size="sm"
      className={cn(
        "h-9 shrink-0 rounded-full px-4 font-inter font-semibold text-xs hover:bg-accent sm:h-10 sm:px-6 sm:text-sm",
        className,
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
