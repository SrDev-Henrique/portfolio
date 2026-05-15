"use client";

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const isMobileDevice = isMobile as boolean;

export function useDesktopHeaderEnabled() {
  const [isLargeViewport, setIsLargeViewport] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsLargeViewport(window.innerWidth >= 1124);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return !isMobileDevice && isLargeViewport;
}
