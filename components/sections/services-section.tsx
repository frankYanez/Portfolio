'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/content/services';
import { reveal } from '@/lib/animations';

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);
  const gradients = [
    'linear-gradient(135deg, rgba(255,214,102,0.22), rgba(10,10,10,0.78))',
    'linear-gradient(135deg, rgba(241,191,88,0.24), rgba(15,15,15,0.8))',
    'linear-gradient(135deg, rgba(224,170,72,0.22), rgba(12,12,12,0.76))',
    'linear-gradient(135deg, rgba(255,228,141,0.2), rgba(8,8,8,0.78))',
  ];

  return (
    <section id="servicios" aria-labelledby="services-title" className="py-20 sm:py-24">
      <div className="section-container flex flex-col gap-14">
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

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {services.map((service, index) => {
            const isActive = active === index;
            const isDimmed = active !== null && !isActive;
            const flexValue = active === null ? 1 : isActive ? 1.3 : 0.85;

            return (
              <motion.article
                key={service.title}
                layout
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-70px_rgba(56,189,248,0.65)] backdrop-blur"
                style={{
                  flex: flexValue,
                  minWidth: '0px',
                  backgroundImage: gradients[index % gradients.length],
                }}
                animate={{ opacity: isDimmed ? 0.7 : 1, scale: isActive ? 1.01 : 1 }}
                transition={{
                  duration: isActive ? 0.5 : 0.8,
                  ease: [0.32, 0.72, 0, 1],
                  scale: {
                    duration: isActive ? 0.5 : 0.8,
                    ease: [0.32, 0.72, 0, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70"
                  animate={{ scale: isActive ? 1.01 : 1 }}
                >
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.25),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(45,212,191,0.2),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,0.2),transparent_35%)]" />
                </motion.div>
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"
                  aria-hidden="true"
                />

                <div className="relative flex h-full flex-col gap-6 p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="self-start rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                      {service.badge}
                    </span>
                    {/* <motion.div
                      className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 2 }}
                    >
                      {isActive ? 'Detalle' : 'Hover'}
                    </motion.div> */}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {service.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.07]"
                      >
                        <dt className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                          {metric.label}
                        </dt>
                        <dd className="text-sm font-semibold text-white">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 text-sm font-semibold text-primary">
                    <span className="inline-flex items-center gap-2 transition group-hover:translate-x-1">
                      Ver más
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5.22 5.22a.75.75 0 0 1 1.06 0L14 12.94V8.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h4.19L5.22 6.28a.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </span>
                    <span
                      className="h-px flex-1 bg-gradient-to-r from-primary/70 via-cyan-400/60 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
