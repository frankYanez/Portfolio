'use client';

import { motion } from 'framer-motion';
import { skillBadges, skillGroups } from '@/content/skills';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fadeInUp, reveal, staggerChildren } from '@/lib/animations';

/**
 * SkillsSection muestra habilidades técnicas destacadas en una cuadrícula animada.
 * @returns Sección de habilidades con badges y categorías.
 */
export function SkillsSection() {
  return (
    <section id="habilidades" aria-labelledby="skills-title" className="py-24">
      <div className="section-container">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <motion.h2
            id="skills-title"
            className="text-3xl font-semibold"
            variants={fadeInUp}
          >
            Tecnologías que uso para escalar productos reales
          </motion.h2>
          <motion.p className="max-w-2xl text-white/70" variants={fadeInUp}>
            Cada herramienta responde a una métrica: tiempos de carga inferiores a un segundo, flujos automatizados que ahorran
            horas de operación y experiencias accesibles para todos los usuarios.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
            {skillBadges.map((badge) => (
              <Badge key={badge.label} tone={badge.tone}>
                {badge.label}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <motion.div key={group} {...reveal('up')} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{group}</h3>
              {skills.map((skill) => (
                <Card key={skill.name} className="transition hover:bg-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-medium text-white">{skill.name}</p>
                      <p className="text-sm text-white/60">{skill.description}</p>
                    </div>
                    <Badge tone="primary">{skill.level}</Badge>
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                    {skill.category}
                  </p>
                </Card>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
