'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroContent } from '@/content/hero';
import { Button } from '@/components/ui/button';
import { reveal } from '@/lib/animations';
import ProfileCard from '@/src/Components/ProfileCard/ProfileCard';
import { HeroParallax } from '@/src/Components/ui/hero-parallax';
import { heroParallaxProducts } from '@/content/hero-parallax';

/**
 * HeroSection presenta la introducción principal con CTA y fondo animado.
 * @returns Encabezado animado con nombre, título y acciones.
 */
export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-radial"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      </div>

      {/* Contenido principal */}
      <div
        className="
          py-28 sm:py-36
          flex flex-col-reverse md:flex-row
          items-center md:items-start
          justify-between
          gap-16 md:gap-20
          max-w-7xl mx-auto px-6 sm:px-12
        "
      >
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/70"
            {...reveal('up')}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Diseños futuristas personalizados
          </motion.span>

          <motion.h1
            id="hero-title"
            className="mt-8 text-4xl font-bold leading-tight text-white sm:text-6xl"
            {...reveal('up')}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-lg font-bold text-white/90 sm:text-xl"
            {...reveal('up')}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            {heroContent.title}
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-base text-white/60"
            {...reveal('up')}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
            {...reveal('up')}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <Button asChild>
              <a href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</a>
            </Button>
          </motion.div>
        </div>

        {/* Card del perfil */}
        <motion.div
          {...reveal('right')}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <ProfileCard avatarUrl="/assets/avatar.jpg" />
        </motion.div>
      </div>
      <div className="mx-auto mt-20 max-w-6xl px-6 sm:px-12">
        <HeroParallax products={heroParallaxProducts} />
      </div>
    </section>
  );
}
