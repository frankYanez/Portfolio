import { MotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 12 },
  down: { x: 0, y: -12 },
  left: { x: 12, y: 0 },
  right: { x: -12, y: 0 }
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
    duration: 0.9,
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
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};
