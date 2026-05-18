/** biome-ignore-all lint/a11y/noStaticElementInteractions: <because> */
"use client";

import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { isMobile as isMobileDevice } from "react-device-detect";
import { cn } from "@/lib/utils";

export type CursorMode = "arrow" | "default" | "logo" | "media";

export type CursorState = {
  imageSrc?: string;
  label?: string;
  mode: CursorMode;
};

type CursorTrackerContextValue = {
  isEnabled: boolean;
  resetCursorState: () => void;
  setCursorState: (state: CursorState) => void;
};

const defaultCursorState: CursorState = {
  mode: "default",
};

const CursorTrackerContext = React.createContext<CursorTrackerContextValue>({
  isEnabled: false,
  resetCursorState: () => {},
  setCursorState: () => {},
});

export function CursorTrackerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEnabled = useDesktopCursorEnabled();
  const [cursorState, setCursorState] =
    React.useState<CursorState>(defaultCursorState);
  const [hasPointer, setHasPointer] = React.useState(false);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const cursorX = useSpring(motionX, {
    damping: 24,
    mass: 0.4,
    stiffness: 220,
  });
  const cursorY = useSpring(motionY, {
    damping: 24,
    mass: 0.4,
    stiffness: 220,
  });

  const resetCursorState = React.useCallback(() => {
    setCursorState(defaultCursorState);
  }, []);

  React.useEffect(() => {
    void pathname;
    resetCursorState();
  }, [pathname, resetCursorState]);

  React.useEffect(() => {
    if (!isEnabled) {
      setHasPointer(false);
      resetCursorState();
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      motionX.set(event.clientX + 30);
      motionY.set(event.clientY + 30);
      setHasPointer(true);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isEnabled, motionX, motionY, resetCursorState]);

  return (
    <CursorTrackerContext.Provider
      value={{ isEnabled, resetCursorState, setCursorState }}
    >
      {children}
      {isEnabled ? (
        <motion.div
          aria-hidden="true"
          style={{ x: cursorX, y: cursorY }}
          className={cn(
            "pointer-events-none fixed top-0 left-0 z-1000",
            hasPointer ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <CursorTrackerVisual
              state={cursorState}
              onMediaError={resetCursorState}
            />
          </div>
        </motion.div>
      ) : null}
    </CursorTrackerContext.Provider>
  );
}

export function useCursorTracker() {
  return React.useContext(CursorTrackerContext);
}

export function CursorTarget({
  children,
  className,
  cursorState,
}: {
  children: React.ReactNode;
  className?: string;
  cursorState: CursorState;
}) {
  const { isEnabled, resetCursorState, setCursorState } = useCursorTracker();

  const activate = React.useCallback(() => {
    if (!isEnabled) return;
    setCursorState(cursorState);
  }, [cursorState, isEnabled, setCursorState]);

  const deactivate = React.useCallback(
    (
      container: HTMLDivElement | null,
      nextFocusedTarget?: EventTarget | null,
    ) => {
      if (!isEnabled) return;
      if (
        container &&
        nextFocusedTarget instanceof Node &&
        container.contains(nextFocusedTarget)
      ) {
        return;
      }
      resetCursorState();
    },
    [isEnabled, resetCursorState],
  );

  return (
    <div
      className={className}
      onMouseEnter={activate}
      onMouseLeave={(event) =>
        deactivate(event.currentTarget, event.relatedTarget)
      }
      onFocusCapture={activate}
      onBlurCapture={(event) =>
        deactivate(event.currentTarget, event.relatedTarget)
      }
    >
      {children}
    </div>
  );
}

export function CursorTrackerVisual({
  className,
  onMediaError,
  state,
}: {
  className?: string;
  onMediaError?: () => void;
  state: CursorState;
}) {
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    void state.imageSrc;
    setFailedSrc(null);
  }, [state.imageSrc]);

  const isMedia =
    state.mode === "media" && state.imageSrc && failedSrc !== state.imageSrc;
  const isLogo =
    state.mode === "logo" && state.imageSrc && failedSrc !== state.imageSrc;
  const mediaSrc = isMedia ? state.imageSrc : null;
  const logoSrc = isLogo ? state.imageSrc : null;
  const imageSrc = mediaSrc ?? logoSrc;

  return (
    <motion.div
      animate={{
        borderRadius: isMedia ? 28 : isLogo ? 24 : 999,
        height: isMedia
          ? 276
          : isLogo
            ? 104
            : state.mode === "arrow"
              ? 112
              : 20,
        width: isMedia ? 276 : isLogo ? 104 : state.mode === "arrow" ? 112 : 20,
        x: isMedia ? 120 : state.mode === "arrow" ? 25 : isLogo ? 38 : 0,
        y: isMedia ? 120 : state.mode === "arrow" ? 20 : isLogo ? 34 : 0,
      }}
      transition={{ damping: 24, mass: 0.4, stiffness: 280, type: "spring" }}
      className={cn(
        "relative overflow-hidden border border-accent/20 shadow-[0_0_34px_rgb(var(--glow-rgb)/0.18)]",
        isMedia || isLogo ? "bg-surface-elevated" : "bg-accent",
        className,
      )}
    >
      <AnimatePresence mode="popLayout">
        {state.mode === "arrow" ? (
          <motion.div
            key="arrow"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center text-accent-foreground"
          >
            <ArrowUpRight className="size-10 stroke-2" />
          </motion.div>
        ) : null}

        {imageSrc ? (
          <motion.div
            key={`${state.mode}-${imageSrc}`}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] },
            }}
            exit={{
              opacity: 0,
              filter: "blur(4px)",
              transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] },
            }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt={state.label ?? ""}
              fill
              sizes={isLogo ? "104px" : "176px"}
              className={cn(isLogo ? "object-contain p-5" : "object-cover")}
              onError={() => {
                setFailedSrc(imageSrc);
                onMediaError?.();
              }}
            />
            {isMedia ? (
              <div className="absolute inset-0 bg-linear-to-t from-overlay-strong via-transparent to-transparent" />
            ) : null}
            {isMedia && state.label ? (
              <span className="absolute inset-x-0 bottom-0 px-3 pb-3 font-inter font-semibold text-[11px] text-foreground uppercase leading-4 tracking-normal">
                {state.label}
              </span>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

function useDesktopCursorEnabled() {
  const [isLargeViewport, setIsLargeViewport] = React.useState(false);

  React.useEffect(() => {
    const updateViewport = () => setIsLargeViewport(window.innerWidth >= 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return !isMobileDevice && isLargeViewport;
}
