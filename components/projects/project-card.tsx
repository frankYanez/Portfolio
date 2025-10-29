'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useCallback, useRef, type PointerEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { Project } from '@/content/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ProjectCardProps {
  project: Project;
  Icon: LucideIcon;
  onOpen: () => void;
}

/**
 * ProjectCard muestra un resumen clickable con inclinación 3D y gradiente dinámico.
 */
export function ProjectCard({ project, Icon, onOpen }: ProjectCardProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 120, damping: 14 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 14 });
  const tilt = useMotionValue(0);
  const glintScale = useTransform(tilt, (value) => 1 + value * 0.02);
  const primaryLink = project.links.find((link) => /demo/i.test(link.label)) ?? project.links[0];

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLButtonElement>) => {
      if (shouldReduceMotion) return;
      const bounds = buttonRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      const relativeY = (event.clientY - bounds.top) / bounds.height;
      rotateX.set((0.5 - relativeY) * 14);
      rotateY.set((relativeX - 0.5) * 20);
      tilt.set(1);
    },
    [rotateX, rotateY, tilt, shouldReduceMotion]
  );

  const resetTilt = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    tilt.set(0);
  }, [rotateX, rotateY, tilt]);

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={onOpen}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      className="group block w-full text-left focus:outline-none"
      aria-label={`Abrir detalles de ${project.title}`}
      style={{
        transformStyle: 'preserve-3d'
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
      whileFocus={shouldReduceMotion ? undefined : { scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 900
              }
        }
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      >
        <Card className="flex h-full flex-col gap-5 bg-surface/90 p-6 transition-all duration-300 group-hover:border-accent/40 group-focus-visible:border-accent">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accentGradient} opacity-70`} />
          <motion.div
            className="relative flex h-full items-center justify-center"
            style={shouldReduceMotion ? undefined : { scale: glintScale }}
          >
            <Icon className="h-16 w-16 text-primary drop-shadow-[0_0_25px_rgba(240,198,116,0.5)]" aria-hidden="true" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-white/60">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} tone="accent">
                {tag}
              </Badge>
            ))}
          </div>
          {primaryLink ? (
            <span className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent/80">
              <span>{primaryLink.label}</span>
              <span aria-hidden>↗</span>
            </span>
          ) : null}
        </div>
        </Card>
      </motion.div>
    </motion.button>
  );
}
