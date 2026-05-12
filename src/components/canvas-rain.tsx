"use client";

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let imageData: ImageData | null = null;
    let data: Uint8ClampedArray;

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    }

    function renderNoise() {
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
              data[index] = value; // R
              data[index + 1] = value; // G
              data[index + 2] = value; // B
              data[index + 3] = 255; // A
            }
          }
        }
      }

      if (imageData && ctx) {
        ctx.putImageData(imageData, 0, 0);
      }
    }

    function frame() {
      renderNoise();
      rafRef.current = requestAnimationFrame(() => {
        setTimeout(frame, 16 / speed);
      });
    }

    resize();

    if (animated) {
      frame();
    } else {
      renderNoise();
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, animated, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-9999 ${className}`}
      style={{ opacity }}
    />
  );
}
