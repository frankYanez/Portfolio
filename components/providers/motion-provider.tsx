'use client';

import { MotionConfig } from 'framer-motion';

/**
 * MotionProvider aplica configuración global de animaciones respetando preferencias del usuario.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
