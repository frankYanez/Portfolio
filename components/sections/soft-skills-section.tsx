'use client';

import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { Brain, MessageCircle, Users } from 'lucide-react';
import { softSkills } from '@/content/soft-skills';
import { Card } from '@/components/ui/card';
import { reveal } from '@/lib/animations';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  users: Users,
  cpu: Brain,
  'message-circle': MessageCircle
};

/**
 * SoftSkillsSection destaca valores y habilidades humanas clave.
 * @returns Tarjetas animadas con iconografía.
 */
export function SoftSkillsSection() {
  return (
    <section aria-labelledby="soft-skills-title" className="py-24">
      <div className="section-container">
        <motion.div {...reveal('up')} className="max-w-2xl">
          <h2 id="soft-skills-title" className="text-3xl font-semibold text-white">
            Forma de trabajar
          </h2>
          <p className="mt-4 text-white/70">
            TODO: Mensaje sobre cultura de colaboración, liderazgo y delivery continuo.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {softSkills.map((item) => {
            const Icon = iconMap[item.icon] ?? Users;
            return (
              <motion.div key={item.title} {...reveal('up')}>
                <Card className="flex h-full flex-col gap-4">
                  <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
