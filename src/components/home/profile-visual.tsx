import { Code2, MessageCircle, Sparkles } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ProfileVisualVariant = "code" | "message" | "caption";

type ProfileVisualProps = {
  className?: string;
  imageSrc?: string | StaticImageData;
  variant?: ProfileVisualVariant;
  text?: string;
  contato?: boolean;
};

const variantConfig = {
  code: {
    Icon: Code2,
    badgeClass: "left-0 bottom-5 -translate-x-5",
    cardClass: "hidden",
    tiltClass: "rotate-0",
  },
  message: {
    Icon: Code2,
    badgeClass: "left-0 top-1/2 -translate-x-8 -translate-y-1/2",
    cardClass: "bottom-10 left-6 right-6",
    tiltClass: "rotate-0",
  },
  caption: {
    Icon: Sparkles,
    badgeClass: "hidden",
    cardClass: "bottom-12 left-6 right-auto w-[min(78%,21rem)]",
    tiltClass: "-rotate-3",
  },
} satisfies Record<
  ProfileVisualVariant,
  {
    Icon: typeof Code2;
    badgeClass: string;
    cardClass: string;
    tiltClass: string;
  }
>;

export function ProfileVisual({
  className,
  imageSrc = "/images/me.png",
  variant = "message",
  text = "WEB",
  contato = false,
}: ProfileVisualProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={cn(
        "relative isolate mx-auto w-full max-w-124 px-8 py-7 sm:px-10",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_48%,rgba(201,255,63,0.22),transparent_21%),radial-gradient(circle_at_80%_96%,rgba(201,255,63,0.18),transparent_19%)] blur-md" />
      <div className="absolute top-[48%] left-0 h-24 w-28 -translate-x-3 bg-[radial-gradient(circle,rgba(201,255,63,0.75)_1px,transparent_1.8px)] opacity-50 bg-size:[12px_12px]" />

      <div
        className={cn(
          "relative aspect-[0.74] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-200 shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition-transform duration-500",
          config.tiltClass,
        )}
      >
        <Image
          src={imageSrc}
          alt="Retrato de Henrique Albuquerque"
          fill
          priority
          sizes="(min-width: 1024px) 31rem, 86vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <AnimatedRoundBadge
        className={config.badgeClass}
        icon={contato ? MessageCircle : config.Icon}
        text={text}
      />

      <div
        className={cn(
          "absolute rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-4 text-sm shadow-2xl shadow-black/35 backdrop-blur-md",
          config.cardClass,
        )}
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 size-4 rounded-full border border-lime-200/70 bg-accent shadow-[0_0_18px_rgba(201,255,63,0.8)]" />
          <div className="space-y-1.5">
            <p className="font-semibold text-accent">Desenvolvedor Fullstack</p>
            <p className="max-w-[16rem] text-zinc-100/85 leading-6">
              Transformo ideias em produtos digitais com performance e código
              limpo.
            </p>
          </div>
        </div>
      </div>

      <span className="absolute right-8 bottom-7 size-5 rounded-full bg-accent shadow-[0_0_22px_rgba(201,255,63,0.85)]" />
    </div>
  );
}

function AnimatedRoundBadge({
  className,
  icon: Icon,
  text,
}: {
  className?: string;
  icon: typeof Code2;
  text: string;
}) {
  return (
    <div
      className={cn(
        "absolute grid size-28 place-items-center overflow-hidden rounded-full bg-accent text-zinc-950 shadow-[0_0_48px_rgba(201,255,63,0.55)] sm:size-32",
        className,
      )}
    >
      <h6 className="profile-badge-copy absolute font-semibold text-3xl uppercase tracking-normal">
        {text}
      </h6>
      <Icon className="profile-badge-icon absolute size-10 stroke-[2.6]" />
    </div>
  );
}
