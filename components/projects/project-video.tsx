'use client';

import { memo } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { Project } from '@/content/projects';

export interface ProjectVideoProps {
  video: Project['video'];
  title: string;
}

/**
 * ProjectVideo incorpora un video corto en loop dentro del modal del proyecto.
 */
export const ProjectVideo = memo(function ProjectVideo({ video, title }: ProjectVideoProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      <video
        className="h-full w-full"
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        controls
        preload={shouldReduceMotion ? 'none' : 'metadata'}
        poster={video.poster}
        aria-label={`Demo en video de ${title}`}
      >
        <source src={video.src} type={video.type} />
        Tu navegador no soporta el video HTML5. TODO: Proporcionar enlace alternativo.
      </video>
      {shouldReduceMotion ? (
        <p className="absolute inset-x-4 bottom-4 rounded-full bg-black/70 px-4 py-2 text-center text-xs text-white/70">
          Reproducción pausada por preferencias de movimiento. TODO: Pulsa play para ver el video.
        </p>
      ) : null}
    </div>
  );
});
