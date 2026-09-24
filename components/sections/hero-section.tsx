'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { heroContent } from '@/content/hero';
import { Button } from '@/components/ui/button';
import { reveal } from '@/lib/animations';
import heroImage from '@/assets/hero.png';

const stats = [
  { label: 'Proyectos lanzados', value: '+40' },
  { label: 'Automatizaciones en producción', value: '18' },
  { label: 'Tiempo promedio de entrega', value: '< 3 semanas' },
];

/** Funde los bordes de la foto (fondo gris claro) con el fondo de la página en ambos temas. */
const fadeY = 'linear-gradient(to bottom, transparent, #000 7%, #000 74%, transparent)';
const fadeX = 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)';
const heroFadeY = { maskImage: fadeY, WebkitMaskImage: fadeY };
const heroFadeX = { maskImage: fadeX, WebkitMaskImage: fadeX };

/**
 * HeroSection: retrato a pantalla completa con texto grande a los costados
 * (sin tapar el rostro) y un reflejo difuminado debajo, a modo de "piso" de vidrio.
 */
export function HeroSection() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Imagen real, borde a borde. Su propio fondo claro se funde con la página. */}
      <div className="relative aspect-[16/9] w-full max-h-[80vh] min-h-[420px] sm:min-h-[520px]" style={heroFadeY}>
        <div className="absolute inset-0" style={heroFadeX}>
          <Image src={heroImage} alt="Francisco Yáñez" fill priority sizes="100vw" className="object-cover object-center" />
        </div>

        {/* Overlay de texto en escritorio: costados libres, centro despejado sobre el rostro. */}
        <div className="absolute inset-0 hidden grid-cols-[1fr_minmax(240px,34%)_1fr] items-center px-10 pt-16 lg:grid xl:px-20">
          <motion.div className="flex flex-col items-start gap-5" {...reveal('left')}>
            <span className="glass-chip inline-flex items-center gap-2 rounded-full border-black/10 bg-white/50 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-neutral-800">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              Diseños futuristas
            </span>
            <h1
              id="hero-title"
              className="text-5xl font-bold leading-[0.95] tracking-tight text-neutral-900 xl:text-7xl"
            >
              {heroContent.name.split(' ')[0]}
              <br />
              {heroContent.name.split(' ').slice(1).join(' ')}
            </h1>
          </motion.div>

          <div aria-hidden="true" />

          <motion.div className="flex flex-col items-end gap-5 text-right" {...reveal('right')} transition={{ delay: 0.15 }}>
            <p className="max-w-xs text-xl font-semibold text-neutral-900">{heroContent.title}</p>
            <p className="max-w-xs text-sm text-neutral-600">{heroContent.subtitle}</p>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <Button asChild className="rounded-full px-5 py-2.5 text-sm font-semibold">
                <a href={heroContent.primaryCta.href} aria-label={heroContent.primaryCta.label}>
                  <span className="flex items-center gap-2">
                    {heroContent.primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </Button>
              <Button asChild className="rounded-full px-5 py-2.5 text-sm font-semibold">
                <a href={heroContent.secondaryCta.href} aria-label={heroContent.secondaryCta.label}>
                  {heroContent.secondaryCta.label}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reflejo infinito: copia invertida difuminada, como piso de vidrio. */}
      <div className="relative -mt-1 hidden h-40 w-full overflow-hidden lg:block" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, rgb(0 0 0 / 0.3) 30%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, rgb(0 0 0 / 0.3) 30%, transparent 90%)'
          }}
        >
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="100vw"
            className="scale-y-[-1] object-cover object-center opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Contenido apilado en mobile, donde no hay espacio a los costados del rostro. */}
      <div className="section-container flex flex-col items-center gap-6 pb-16 pt-4 text-center lg:hidden">
        <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground">
          <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
          Diseños futuristas
        </span>
        <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">{heroContent.name}</h1>
        <p className="text-lg font-semibold text-foreground/90">{heroContent.title}</p>
        <p className="max-w-xl text-base text-muted">{heroContent.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="rounded-full px-6 py-3 text-sm font-semibold">
            <a href={heroContent.primaryCta.href} aria-label={heroContent.primaryCta.label}>
              <span className="flex items-center gap-2">
                {heroContent.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </Button>
          <Button asChild className="rounded-full px-6 py-3 text-sm font-semibold">
            <a href={heroContent.secondaryCta.href} aria-label={heroContent.secondaryCta.label}>
              {heroContent.secondaryCta.label}
            </a>
          </Button>
        </div>
      </div>


    </section>
  );
}
