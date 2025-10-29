'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { ReactbitsBackground } from 'reactbits';

const LazyGlintCanvas = dynamic(() => import('./glint-canvas').then((mod) => mod.GlintCanvas), {
  ssr: false,
  loading: () => (
    <div
      data-testid="glint-loading"
      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
      aria-hidden
    />
  )
});

/**
 * FuturisticBackground mezcla efectos inspirados en reactbits y un campo 3D ligero.
 */
export function FuturisticBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <ReactbitsBackground className="opacity-70" intensity={shouldReduceMotion ? 0.4 : 1} />
      {shouldReduceMotion ? (
        <div
          data-testid="reduced-motion-overlay"
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,198,116,0.18),transparent_55%)]"
        />
      ) : (
        <Suspense fallback={<div className="absolute inset-0" aria-hidden />}>
          <LazyGlintCanvas />
        </Suspense>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </motion.div>
  );
}
