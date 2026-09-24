'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { reveal } from '@/lib/animations';
import { skillGroups } from '@/content/skills';

type TechIcon = { name: string; icon: string };

/**
 * Aplana skillGroups y deduplica por nombre para armar la lista de íconos del carrusel.
 */
function getUniqueTechs(): TechIcon[] {
  const seen = new Map<string, TechIcon>();
  Object.values(skillGroups)
    .flat()
    .forEach((skill) => {
      if (!seen.has(skill.name)) {
        seen.set(skill.name, { name: skill.name, icon: skill.icon });
      }
    });
  return [...seen.values()];
}

const fadeMask = {
  maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
};

/**
 * TechCarousel muestra en loop infinito los íconos reales de las tecnologías que uso,
 * con difuminado en ambos extremos.
 */
export function TechCarousel() {
  const techs = getUniqueTechs();
  const track = [...techs, ...techs];

  return (
    <motion.div {...reveal('up')} className="group relative mt-6 overflow-hidden py-6 lg:-mt-16" style={fadeMask} aria-label="Tecnologías que utilizo">
      {/* Se mueve siempre (pedido explícito); se pausa con hover para quien quiera leerlo. */}
      <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
        {track.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="glass-chip flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full px-6 py-3.5"
            aria-hidden={index >= techs.length}
          >
            <Image src={tech.icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" aria-hidden="true" />
            <span className="text-base font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
