import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const statVariants = cva("group min-w-0 text-zinc-100", {
  variants: {
    variant: {
      feature: "flex flex-col items-center justify-center text-center",
      metric: "flex items-center gap-5",
    },
    iconPosition: {
      left: "flex-row text-left",
      right: "flex-row-reverse text-right",
      top: "flex-col text-center",
      bottom: "flex-col-reverse text-center",
    },
  },
  compoundVariants: [
    {
      variant: "feature",
      iconPosition: ["left", "right"],
      className: "items-center gap-4",
    },
    {
      variant: "feature",
      iconPosition: ["top", "bottom"],
      className: "gap-4",
    },
    {
      variant: "metric",
      iconPosition: ["top", "bottom"],
      className: "items-start gap-4",
    },
  ],
  defaultVariants: {
    iconPosition: "top",
    variant: "feature",
  },
});

const iconWrapVariants = cva(
  "grid shrink-0 place-items-center text-accent transition duration-300 group-hover:scale-105",
  {
    variants: {
      variant: {
        feature:
          "size-12 rounded-full bg-transparent drop-shadow-[0_0_14px_rgba(190,242,100,0.55)]",
        metric:
          "size-14 rounded-xl border border-white/10 bg-zinc-950/70 shadow-[inset_0_0_18px_rgba(255,255,255,0.04),0_0_26px_rgba(190,242,100,0.12)]",
      },
    },
    defaultVariants: {
      variant: "feature",
    },
  },
);

type PortfolioStatProps = VariantProps<typeof statVariants> & {
  className?: string;
  description?: string;
  icon: LucideIcon;
  label: string;
  value?: string;
};

export function PortfolioStat({
  className,
  description,
  icon: Icon,
  iconPosition = "top",
  label,
  value,
  variant = "feature",
}: PortfolioStatProps) {
  const hasValue = Boolean(value);

  return (
    <div className={cn(statVariants({ variant, iconPosition, className }))}>
      <span className={cn(iconWrapVariants({ variant }))} aria-hidden="true">
        <Icon
          className={cn(
            variant === "metric" ? "size-7" : "size-10",
            "stroke-[1.8]",
          )}
        />
      </span>

      <div className="min-w-0">
        {hasValue ? (
          <strong className="block font-bebas-neue text-6xl text-accent leading-none tracking-normal sm:text-7xl">
            {value}
          </strong>
        ) : null}
        <p
          className={cn(
            "font-inter text-zinc-100",
            hasValue
              ? "mt-2 max-w-48 text-base leading-6"
              : "max-w-32 text-lg leading-6",
          )}
        >
          {label}
        </p>
        {description ? (
          <p className="mt-1 max-w-48 font-inter text-sm text-zinc-400 leading-5">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
