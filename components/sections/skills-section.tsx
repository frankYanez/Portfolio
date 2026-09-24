'use client';

import { motion } from 'framer-motion';
import { skillBadges, skillGroups } from '@/content/skills';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fadeInUp, reveal, staggerChildren } from '@/lib/animations';
import Image from 'next/image';

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
          <motion.p className="max-w-2xl text-muted" variants={fadeInUp}>
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 ">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <motion.div key={group} {...reveal('up')} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{group}</h3>
              <div className="grid grid-cols-1 gap-4 ">
                {skills.map((skill) => (
                  <Card key={skill.name} className="flex min-h-[12rem] flex-col transition hover:bg-surfaceAlt/40">
                    <div className="flex items-start justify-between gap-4 flex-1">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="glass-chip flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:border-accent/30">
                          <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-7 h-7 object-contain"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-medium text-foreground">{skill.name}</p>
                          <p className="text-sm text-muted">{skill.description}</p>
                        </div>
                      </div>
                      <Badge tone="primary">{skill.level}</Badge>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                      {skill.category}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
