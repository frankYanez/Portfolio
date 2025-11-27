'use client';

import { motion } from 'framer-motion';
import { FocusCards } from '@/src/Components/ui/focus-cards';
import { services } from '@/content/services';
import { reveal } from '@/lib/animations';
import { ThreeDCardDemo } from '@/src/Components/ui/Card3Demo';

export function ServicesSection() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="py-24">
      <div className="section-container flex flex-col gap-16">
        <motion.div {...reveal('up')} className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
            Qué construyo
          </span>
          <h2
            id="services-title"
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Automatizaciones, productos web y apps que sostienen operaciones reales
          </h2>
          <p className="text-white/70">
            Acompaño a startups y equipos internos en todo el ciclo: ideación,
            prototipado, desarrollo y escalado. Cada servicio combina estrategia de
            producto, diseño centrado en el usuario y la ingeniería necesaria para lanzar
            rápido con calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ThreeDCardDemo key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
