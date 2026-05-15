"use client";

import { useEffect, useState } from "react";

/** True after mount on the client (`window` is available). */
export function useHasWindow() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  return hasWindow;
}
