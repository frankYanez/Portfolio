'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { ReactbitsBackground } from 'reactbits';
import LiquidEther from '@/src/Backgrounds/LiquidEther/LiquidEther';

const LazyGlintCanvas = dynamic(
  () => import('./glint-canvas').then((mod) => mod.GlintCanvas),
  {
    ssr: false,
    loading: () => (
      <div
        data-testid="glint-loading"
        className="absolute inset-0 bg-gradient-to-br from-primary/60 via-transparent to-transparent"
        aria-hidden
      />
    ),
  },
);

/**
 * FuturisticBackground mezcla efectos inspirados en reactbits y un campo 3D ligero.
 */
export function FuturisticBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <ReactbitsBackground
        className="opacity-30"
        intensity={shouldReduceMotion ? 0.4 : 1}
      />

      <Suspense fallback={<div className="absolute inset-0" aria-hidden />}>
        {/* <LazyGlintCanvas  /> */}
        <LiquidEther
          colors={['#f0c674', '#d3a94e', '#FFF8E1']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </motion.div>
  );
}
