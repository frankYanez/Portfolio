'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ReactbitsBackgroundProps {
  className?: string;
  intensity?: number;
}

/**
 * ReactbitsBackground replica un fondo animado inspirado en los efectos de reactbits
 * cuando la dependencia real no está disponible en el entorno.
 */
export const ReactbitsBackground = memo(function ReactbitsBackground({
  className,
  intensity = 1
}: ReactbitsBackgroundProps) {
  const baseOpacity = 0.25 * intensity;

  const shapes = [
    { size: 'h-[520px] w-[520px]', x: '-20%', y: '-10%', delay: 0 },
    { size: 'h-[420px] w-[420px]', x: '60%', y: '10%', delay: 0.5 },
    { size: 'h-[380px] w-[380px]', x: '10%', y: '55%', delay: 0.8 }
  ];

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {shapes.map((shape, index) => (
        <motion.span
          key={index}
          className={cn(
            'absolute rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-3xl',
            shape.size
          )}
          style={{ left: shape.x, top: shape.y, opacity: baseOpacity }}
          animate={{
            rotate: [0, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay
          }}
        />
      ))}
    </div>
  );
});
