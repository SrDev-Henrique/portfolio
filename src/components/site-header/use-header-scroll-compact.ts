"use client";

import { useLenis } from "lenis/react";
import { useCallback, useRef, useState } from "react";

const TOP_THRESHOLD_PX = 48;

/**
 * Compact header when scroll position increases (scroll down),
 * expanded when it decreases (scroll up). Near the top of the page, always expanded.
 */
export function useHeaderScrollCompact() {
  const [compact, setCompact] = useState(false);
  const prevScroll = useRef(0);
  const compactRef = useRef(false);

  const applyScroll = useCallback((scrollY: number) => {
    const prev = prevScroll.current;
    prevScroll.current = scrollY;

    let next = compactRef.current;
    if (scrollY <= TOP_THRESHOLD_PX) {
      next = false;
    } else if (scrollY > prev) {
      next = true;
    } else if (scrollY < prev) {
      next = false;
    }

    if (next !== compactRef.current) {
      compactRef.current = next;
      setCompact(next);
    }
  }, []);

  useLenis((lenis) => {
    applyScroll(lenis.animatedScroll);
  });

  return compact;
}
