'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroContent } from '@/content/hero';
import { Button } from '@/components/ui/button';
import { reveal } from '@/lib/animations';
import ProfileCard from '@/src/Components/ProfileCard/ProfileCard';
import { HeroParallax } from '@/src/Components/ui/hero-parallax';
import { heroParallaxProducts } from '@/content/hero-parallax';

const stats = [
  { label: 'Proyectos lanzados', value: '+40' },
  { label: 'Automatizaciones en producción', value: '18' },
  { label: 'Tiempo promedio de entrega', value: '< 3 semanas' },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden "
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full"
          animate={{ y: [-20, 12, -12], rotate: [6, -4, 6] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -right-24 bottom-16 h-80 w-80 rounded-full"
          animate={{ y: [10, -18, 10], rotate: [-8, 5, -8] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-24 sm:px-10 sm:pt-28 lg:flex-row lg:items-start lg:gap-10 lg:px-12">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 shadow-[0_10px_40px_-30px_rgba(129,140,248,0.8)]"
            {...reveal('up')}
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Diseños futuristas y funcionales
          </motion.span>

          <motion.h1
            id="hero-title"
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            {...reveal('up')}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            className="text-lg font-semibold text-white/90 sm:text-xl"
            {...reveal('up')}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            {heroContent.title}
          </motion.p>

          <motion.p
            className="text-base text-white/70 sm:text-lg"
            {...reveal('up')}
            transition={{ delay: 0.26, duration: 0.7 }}
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start"
            {...reveal('up')}
            transition={{ delay: 0.34, duration: 0.7 }}
          >
            <Button
              asChild
              className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold shadow-[0_20px_80px_-50px_rgba(99,102,241,0.9)]"
            >
              <a
                href={heroContent.primaryCta.href}
                aria-label={heroContent.primaryCta.label}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {heroContent.primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-indigo-500/80 to-cyan-400/70 opacity-90 transition duration-300 group-hover:opacity-100" />
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="rounded-full border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              <a
                href={heroContent.secondaryCta.href}
                aria-label={heroContent.secondaryCta.label}
              >
                {heroContent.secondaryCta.label}
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 text-left shadow-[0_20px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur sm:grid-cols-3"
            {...reveal('up')}
            transition={{ delay: 0.42, duration: 0.7 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...reveal('right')}
          transition={{ delay: 0.38, duration: 0.8 }}
          className="relative flex flex-1 items-center justify-center lg:justify-end"
          style={{ perspective: '1400px' }}
        >
          <div
            className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl border border-white/10 bg-white/5 blur-3xl sm:-left-10 sm:-top-10"
            aria-hidden="true"
          />
          <div
            className="absolute -right-16 bottom-4 h-32 w-32 rotate-6 rounded-full bg-gradient-to-br from-primary/30 to-cyan-400/30 blur-2xl"
            aria-hidden="true"
          />
          <ProfileCard
            avatarUrl={require('/assets/avatar-profile.jpg')}
            miniAvatarUrl={require('/assets/avatar-profile.jpg')}
            name={heroContent.name}
            title={heroContent.title}
            handle="yanez.frank"
            status="Disponible · GMT-5"
            contactText="Conversemos"
            className="max-w-[420px]"
            enableMobileTilt
            // behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(265, 86%, 74%, var(--card-opacity)) 5%,hsla(221, 83%, 69%, calc(var(--card-opacity)*0.8)) 15%,hsla(200, 87%, 64%, calc(var(--card-opacity)*0.45)) 55%,hsla(200, 64%, 40%, 0) 100%),radial-gradient(40% 50% at 20% 20%, #7c3aedc7 0%, #00000000 100%),radial-gradient(70% 70% at 80% 60%, #22d3eecc 0%, #00000000 90%),conic-gradient(from 124deg at 50% 50%,#8b5cf6 0%,#22d3ee 40%,#22d3ee 60%,#ffff 100%)"
            // innerGradient="linear-gradient(140deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.75) 100%)"
          />
        </motion.div>
      </div>
    </section>
  );
}
