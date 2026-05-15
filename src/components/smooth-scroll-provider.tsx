"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { consumeLenisRouteReset } from "@/utils/lenis-route-reset";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        autoRaf: true,
        lerp: 0.08,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <LenisRouteReset />
      {children}
    </ReactLenis>
  );
}

function LenisRouteReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    void pathname;
    if (!consumeLenisRouteReset()) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;

    const scrollToTop = () => {
      lenis?.scrollTo(0, {
        force: true,
        immediate: true,
      });
      window.scrollTo(0, 0);
    };

    scrollToTop();
    firstFrame = window.requestAnimationFrame(() => {
      scrollToTop();
      secondFrame = window.requestAnimationFrame(scrollToTop);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [lenis, pathname]);

  return null;
}
