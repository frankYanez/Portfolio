'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { heroContent } from '@/content/hero';
import { reveal } from '@/lib/animations';

/**
 * Header renderiza la navegación principal con CTA persistente.
 * @returns Barra fija semitransparente.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur">
      <motion.div
        className="section-container flex items-center justify-between rounded-b-3xl border border-white/10 bg-black/40 px-6 py-4"
        {...reveal('down')}
      >
        <a href="#inicio" className="text-sm font-semibold tracking-widest text-white">
          {heroContent.name}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#proyectos" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#experiencia" className="transition hover:text-white">
            Experiencia
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
        <Button variant="ghost" asChild className="text-xs uppercase tracking-widest">
          <a href={heroContent.secondaryCta.href}>Contactar</a>
        </Button>
      </motion.div>
    </header>
  );
}
