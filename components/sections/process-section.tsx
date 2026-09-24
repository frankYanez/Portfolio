'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Code2, Lightbulb, Package, PenLine } from 'lucide-react';
import { processSteps } from '@/content/process';
import { reveal } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import mobileShowcase from '@/assets/showcase-mobile.png';
import webShowcase from '@/assets/showcase-web.png';

const stepIcons = { idea: Lightbulb, design: PenLine, code: Code2, product: Package } as const;

/**
 * ProcessSection ("De la idea a la pantalla"): stepper interactivo de 4 etapas
 * con una composición visual (wireframe → código → producto real).
 */
export function ProcessSection() {
  const [active, setActive] = useState(processSteps.length - 1);
  const current = processSteps[active];

  return (
    <section id="proceso" aria-labelledby="process-title" className="relative isolate overflow-x-clip py-10 sm:py-12">
      <div
        className="section-glow"
        style={{ backgroundImage: 'radial-gradient(circle at 15% 15%, rgb(167 139 250 / 0.12), transparent 55%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative flex flex-col gap-10">
        <motion.div {...reveal('up')} className="max-w-xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Mi proceso</span>
          <h2 id="process-title" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            De la idea a la pantalla
          </h2>
          <p className="text-muted">Así toma forma un producto digital.</p>
        </motion.div>

        <motion.div
          {...reveal('up')}
          transition={{ delay: 0.1 }}
          className="glass-panel grid grid-cols-2 gap-2 !p-2 sm:flex sm:flex-row"
        >
          {processSteps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            const isActive = index === active;
            return (
              <button
                key={step.index}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  'relative flex min-h-12 flex-1 items-center gap-3 rounded-2xl px-3 py-3 text-left transition sm:px-5 sm:py-3.5',
                  isActive ? 'text-primary-foreground' : 'text-foreground hover:bg-surfaceAlt/60'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="process-active-pill"
                    className="absolute inset-0 rounded-2xl bg-gradient-accent shadow-glow"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <span className="relative flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-widest opacity-70">{step.index}</span>
                    <span className="block text-sm font-semibold">{step.label}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <h3 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl">{current.title}</h3>
                <p className="mt-3 max-w-xl text-muted">{current.description}</p>
              </motion.div>
            </AnimatePresence>
            <Button variant="primary" asChild className="shrink-0 self-start lg:self-end">
              <a href="#proyectos" className="no-underline">
                Explorar el proceso
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Composición grande y centrada, sin inclinaciones: wireframe + código a los lados, producto al centro. */}
          <motion.div {...reveal('up')} transition={{ delay: 0.1 }} className="relative mx-auto w-full max-w-5xl" aria-hidden="true">
            <div className="relative pb-10 pt-4 sm:px-6 lg:pt-10">
              <div className="glass-panel absolute left-0 top-0 z-20 hidden w-52 space-y-2.5 !p-5 sm:block lg:w-64">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">Idea · Wireframe</span>
                <div className="space-y-2 pt-1">
                  <div className="h-2.5 w-3/4 rounded-full bg-surfaceAlt" />
                  <div className="h-2.5 w-full rounded-full bg-surfaceAlt" />
                  <div className="h-10 w-full rounded-lg bg-surfaceAlt" />
                  <div className="h-2.5 w-1/2 rounded-full bg-surfaceAlt" />
                </div>
              </div>

              <div className="absolute right-0 top-6 z-20 hidden w-52 space-y-1.5 rounded-2xl bg-[#0A0C07] p-5 font-mono text-xs shadow-glass sm:block lg:w-64">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-white/40">Desarrollo · Código</span>
                <p className="pt-2 text-white/70">const app = () =&gt; {'{'}</p>
                <p className="pl-4 text-accent-soft">return ship();</p>
                <p className="text-white/70">{'}'}</p>
              </div>

              <div className="relative z-10 mx-auto w-full sm:w-[80%]">
                <Image src={webShowcase} alt="" sizes="(max-width: 640px) 100vw, 820px" className="h-auto w-full drop-shadow-2xl" />
              </div>
              <div className="absolute bottom-6 right-[4%] z-20 w-28 sm:right-[8%] sm:w-44 lg:w-56">
                <Image src={mobileShowcase} alt="" sizes="(max-width: 640px) 30vw, 230px" className="h-auto w-full drop-shadow-2xl" />
              </div>
              <span className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Producto · En tus manos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
