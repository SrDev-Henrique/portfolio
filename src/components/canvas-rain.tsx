"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useRef } from "react";

/**
 * TVStaticCanvas
 * --------------
 * Analog TV "no signal" noise effect (chuvisco retrô).
 * - Uses pure canvas pixel manipulation
 * - Supports intensity control
 * - Optional subtle flicker animation
 * - pointer-events: none (does not block UI)
 *
 * Usage:
 * <TVStaticCanvas intensity={0.8} animated />
 */

export default function TVStaticCanvas({
  intensity = 0.7, // 0..1 (amount of noise)
  animated = true,
  speed = 0.15, // animation speed multiplier
  opacity = 0.07, // overlay opacity
  className = "",
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const { resolvedTheme } = useTheme<"light" | "dark">();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    if (isLight) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let imageData: ImageData | null = null;
    let cancelled = false;

    function viewportSize() {
      return {
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      };
    }

    function resize() {
      if (!canvas || !ctx || cancelled) return;
      const { width: nextW, height: nextH } = viewportSize();
      if (nextW < 1 || nextH < 1) return;
      width = nextW;
      height = nextH;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      imageData = ctx.createImageData(width, height);
    }

    function renderNoise() {
      if (!imageData || !ctx || width < 1 || height < 1) return;
      const d = imageData.data;
      const grain = Math.max(1, Math.floor(4 - intensity * 3));

      for (let y = 0; y < height; y += grain) {
        for (let x = 0; x < width; x += grain) {
          const value = Math.random() * 255;

          for (let gy = 0; gy < grain; gy++) {
            for (let gx = 0; gx < grain; gx++) {
              const px = x + gx;
              const py = y + gy;
              if (px >= width || py >= height) continue;

              const index = (py * width + px) * 4;
              d[index] = value; // R
              d[index + 1] = value; // G
              d[index + 2] = value; // B
              d[index + 3] = 255; // A
            }
          }
        }
      }

      if (imageData && ctx) {
        ctx.putImageData(imageData, 0, 0);
      }
    }

    function frame() {
      if (cancelled) return;
      renderNoise();
      rafRef.current = requestAnimationFrame(() => {
        if (cancelled) return;
        timeoutRef.current = window.setTimeout(frame, 16 / speed);
      });
    }

    resize();

    if (animated) {
      frame();
    } else {
      renderNoise();
    }

    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("scroll", resize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("scroll", resize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [intensity, animated, speed, isLight]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-999 ${isLight ? "hidden" : className}`}
      style={{ opacity }}
    />
  );
}
