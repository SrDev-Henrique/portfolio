"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "motion/react";
import {
  useRef,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealElement =
  | "article"
  | "div"
  | "footer"
  | "h1"
  | "h2"
  | "h3"
  | "header"
  | "p"
  | "span";
type RevealDirection = "down" | "left" | "none" | "right" | "up";

type RevealProps = {
  as?: RevealElement;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  staggerIndex?: number;
  style?: CSSProperties;
  visibleOpacity?: number;
  viewportMargin?: `${number}px ${number}px ${number}px ${number}px`;
};

const motionElement = {
  article: motion.article,
  div: motion.div,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  header: motion.header,
  p: motion.p,
  span: motion.span,
};

const ease = [0.22, 1, 0.36, 1] as const;

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "up":
      return { x: 0, y: distance };
    case "none":
      return { x: 0, y: 0 };
  }
}

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.72,
  onClick,
  onMouseEnter,
  onMouseLeave,
  staggerIndex = 0,
  style,
  visibleOpacity = 1,
  viewportMargin = "0px 0px -80px 0px",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: viewportMargin, once: true });
  const shouldReduceMotion = useReducedMotion();
  const Component = motionElement[as];
  const offset = getOffset(direction, shouldReduceMotion ? 0 : distance);
  const transition: Transition = {
    delay: shouldReduceMotion ? 0 : delay + staggerIndex * 0.07,
    duration: shouldReduceMotion ? 0.01 : duration,
    ease,
  };

  return (
    <Component
      ref={ref}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
        ...offset,
      }}
      animate={
        isInView
          ? { opacity: visibleOpacity, x: 0, y: 0, filter: "blur(0px)" }
          : undefined
      }
      transition={transition}
      className={cn(className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
    </Component>
  );
}
