'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/content/timeline';
import { reveal } from '@/lib/animations';

/**
 * TimelineSection muestra la trayectoria profesional en una línea vertical.
 * @returns Lista cronológica con logros.
 */
export function TimelineSection() {
  return (
    <section id="experiencia" aria-labelledby="timeline-title" className="py-24">
      <div className="section-container">
        <motion.div {...reveal('up')} className="max-w-2xl">
          <h2 id="timeline-title" className="text-3xl font-semibold text-white">
            Experiencia
          </h2>
          <p className="mt-4 text-white/70">
            Trayectoria construyendo productos digitales de punta a punta: desde startups que buscan validar rápido hasta
            corporativos que necesitan automatizar operaciones complejas.
          </p>
        </motion.div>
        <div className="mt-12 border-l border-white/20 pl-6">
          <ol className="space-y-12">
            {timeline.map((item) => (
              <motion.li key={item.title} {...reveal('up')} className="relative pl-6">
                <span
                  className="absolute -left-[35px] top-1 h-3 w-3 rounded-full bg-accent shadow-glow"
                  aria-hidden="true"
                />
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wider text-white/50">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/60">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
