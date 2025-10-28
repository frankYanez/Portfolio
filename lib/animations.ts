import { MotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 }
};

export const reveal = (direction: Direction = 'up'): MotionProps => ({
  initial: {
    opacity: 0,
    x: offsets[direction].x,
    y: offsets[direction].y
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0
  },
  viewport: { once: true, margin: '0px 0px -100px' },
  transition: {
    duration: 0.7,
    ease: [0.25, 0.1, 0.25, 1]
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
