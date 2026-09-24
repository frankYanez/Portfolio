'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Clock, Compass, Globe, Smartphone } from 'lucide-react';
import { packagesContent, servicePackages } from '@/content/packages';
import { CONTACT_TYPE_EVENT } from '@/content/contact';
import { Button } from '@/components/ui/button';
import { inOutViewport, reveal } from '@/lib/animations';

const packageIcons = { mobile: Smartphone, web: Globe, consulting: Compass } as const;

/**
 * PackagesSection ("Cómo puedo ayudarte"): tres tarjetas glass con qué incluye cada servicio,
 * stack, plazo estimado y un CTA que lleva al formulario con el tipo ya elegido.
 */
export function PackagesSection() {
  return (
    <section id="paquetes" aria-labelledby="packages-title" className="relative isolate overflow-x-clip py-10 sm:py-12">
      <div
        className="section-glow"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 55%, rgb(124 58 237 / 0.12), transparent 55%), radial-gradient(circle at 90% 20%, rgb(167 139 250 / 0.1), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container flex flex-col gap-12">
        <motion.div {...reveal('up')} className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{packagesContent.eyebrow}</span>
          <h2 id="packages-title" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            {packagesContent.title}
          </h2>
          <p className="text-muted">{packagesContent.description}</p>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 sm:[&>li:last-child]:col-span-2 lg:grid-cols-3 lg:[&>li:last-child]:col-span-1">
          {servicePackages.map((pkg, index) => {
            const Icon = packageIcons[pkg.icon];
            return (
              <motion.li
                key={pkg.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inOutViewport}
                transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 0.61, 0.36, 1] }}
                className="package-card group relative flex flex-col gap-6 p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-primary-foreground shadow-glow">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-muted/70">0{index + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>
                  <p className="text-sm text-muted">{pkg.pitch}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">Incluye</p>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-2" aria-label={`Stack de ${pkg.title}`}>
                  {pkg.stack.map((tech) => (
                    <li key={tech} className="glass-chip rounded-full px-3 py-1 text-xs font-medium text-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4 border-t border-border/10 pt-5">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                    Plazo estimado: <span className="font-semibold text-foreground">{pkg.timeline}</span>
                  </p>
                  <Button variant="primary" asChild className="justify-center">
                    <a
                      href="#contacto"
                      className="no-underline"
                      onClick={() =>
                        window.dispatchEvent(new CustomEvent(CONTACT_TYPE_EVENT, { detail: pkg.contactType }))
                      }
                    >
                      Pedir presupuesto
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.p {...reveal('up')} className="text-center text-xs text-muted">
          {packagesContent.note}
        </motion.p>
      </div>
    </section>
  );
}
