'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Rocket, Users } from 'lucide-react';
import { hireContent } from '@/content/contact';
import { Button } from '@/components/ui/button';
import { inOutViewport, reveal } from '@/lib/animations';

const modeIcons = { rocket: Rocket, users: Users, compass: Compass } as const;

/**
 * HireCtaSection: panel oscuro de vidrio líquido (siempre en tema dark vía `.dark`)
 * que invita a trabajar juntos con tres modalidades y CTA directo.
 */
export function HireCtaSection() {
  return (
    <section aria-labelledby="hire-title" className="py-8 sm:py-12">
      <div className="section-container">
        <motion.div {...reveal('up')} className="dark hire-cta relative isolate overflow-hidden rounded-[2rem] text-foreground">
          <div className="hire-cta-orb hire-cta-orb--a" aria-hidden="true" />
          <div className="hire-cta-orb hire-cta-orb--b" aria-hidden="true" />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:p-14">
            <div className="space-y-6">
              <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {hireContent.availability}
              </span>

              <h2 id="hire-title" className="text-4xl font-bold leading-[1.05] sm:text-5xl">
                {hireContent.title}{' '}
                <span className="text-gradient-accent">{hireContent.titleAccent}</span>
              </h2>
              <p className="max-w-md text-muted">{hireContent.description}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" asChild>
                  <a href={hireContent.primaryCta.href} target="_blank" rel="noreferrer" className="no-underline">
                    {hireContent.primaryCta.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="primary" asChild>
                  <a href={hireContent.secondaryCta.href} className="no-underline">
                    {hireContent.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </div>

            <ul className="grid gap-3">
              {hireContent.modes.map((mode, index) => {
                const Icon = modeIcons[mode.icon];
                return (
                  <motion.li
                    key={mode.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={inOutViewport}
                    transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 0.61, 0.36, 1] }}
                    className="hire-cta-mode flex items-start gap-4 rounded-2xl p-4 sm:p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{mode.title}</h3>
                      <p className="text-sm text-muted">{mode.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
