import { MotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 }
};

/** Viewport compartido: anima al entrar y revierte al salir (once: false) para tener entrada y salida. */
export const inOutViewport = { once: false, amount: 0.2, margin: '0px 0px -60px' } as const;

export const reveal = (direction: Direction = 'up'): MotionProps => ({
  initial: {
    opacity: 0,
    x: offsets[direction].x,
    y: offsets[direction].y,
    scale: 0.98,
    filter: 'blur(6px)'
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  viewport: inOutViewport,
  transition: {
    duration: 0.8,
    ease: [0.22, 0.61, 0.36, 1]
  }
});

export const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};
