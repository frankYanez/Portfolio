'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { reveal } from '@/lib/animations';
import { techStack } from '@/content/tech-stack';
import { cn } from '@/lib/utils';

const fadeMask = {
  maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
};

/**
 * TechCarousel muestra en loop infinito los íconos (SVG locales) de las tecnologías que uso,
 * con difuminado en ambos extremos. Los íconos monocromáticos se invierten en tema oscuro.
 */
export function TechCarousel() {
  const track = [...techStack, ...techStack];

  return (
    <motion.div {...reveal('up')} className="group relative mt-6 overflow-hidden py-6 lg:-mt-16" style={fadeMask} aria-label="Tecnologías que utilizo">
      {/* Se mueve siempre (pedido explícito); se pausa con hover para quien quiera leerlo. */}
      <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
        {track.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="glass-chip flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full px-6 py-3.5"
            aria-hidden={index >= techStack.length}
          >
            <Image
              src={tech.icon}
              alt=""
              width={32}
              height={32}
              unoptimized
              loading="eager"
              className={cn('h-8 w-8 object-contain', tech.mono && 'dark:invert')}
              aria-hidden="true"
            />
            <span className="text-base font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
