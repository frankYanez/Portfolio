'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Award, GraduationCap, Sparkles } from 'lucide-react';
import { education } from '@/content/education';
import { reveal } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const featured = education.find((study) => study.status === 'En curso') ?? education[0];
const rest = education.filter((study) => study !== featured);
const degrees = education.filter((study) => study.kind === 'degree').length;
const certifications = education.length - degrees;

const stats = [
  { value: String(degrees), label: 'Títulos universitarios' },
  { value: String(certifications), label: 'Certificaciones' },
  { value: '1', label: 'Carrera en curso' },
];

/**
 * EducationSection ("Lo que respalda mi trabajo"): bento glass con la carrera en curso destacada
 * y el resto de la formación en una línea de tiempo compacta.
 */
export function EducationSection() {
  return (
    <section id="estudios" aria-labelledby="education-title" className="relative isolate overflow-x-clip py-10 sm:py-12">
      <div
        className="section-glow"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgb(124 58 237 / 0.12), transparent 55%), radial-gradient(circle at 8% 90%, rgb(167 139 250 / 0.1), transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative flex flex-col gap-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div {...reveal('up')} className="max-w-xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Formación</span>
            <h2 id="education-title" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              Lo que respalda mi trabajo
            </h2>
            <p className="text-muted">
              Base universitaria, práctica constante y una mirada de negocio que viene de antes del código.
            </p>
          </motion.div>

          <motion.dl {...reveal('right')} className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-chip flex flex-col gap-1 rounded-2xl px-4 py-3 sm:min-w-[120px]">
                <dt className="order-2 text-[11px] leading-tight text-muted">{stat.label}</dt>
                <dd className="order-1 text-2xl font-bold text-gradient-accent">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.article
            {...reveal('up')}
            className="education-feature relative flex flex-col gap-6 overflow-hidden p-6 sm:p-8 lg:col-span-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="glass-chip flex h-14 w-14 items-center justify-center rounded-2xl">
                <GraduationCap className="h-7 w-7 text-accent" aria-hidden="true" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {featured.status}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">{featured.period}</p>
              <h3 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{featured.title}</h3>
              <p className="text-sm font-medium text-foreground/80">{featured.institution}</p>
              <p className="max-w-lg text-muted">{featured.description}</p>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label="Ejes de la carrera">
              {featured.highlights.map((item) => (
                <li key={item} className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-foreground">
                  {item}
                </li>
              ))}
            </ul>

            <div className="education-certificate mt-auto" aria-hidden="true">
              <div className="education-certificate-sheet">
                <GraduationCap className="mx-auto h-9 w-9 text-accent/60" />
                <span className="certificate-line certificate-line--title" />
                <span className="certificate-line" />
                <span className="certificate-line" />
                <span className="certificate-line certificate-line--short" />
                <Award className="absolute bottom-3 right-3 h-9 w-9 text-accent/60" />
              </div>
            </div>
          </motion.article>

          <ol className="relative flex flex-col gap-5 lg:col-span-5">
            {rest.map((study, index) => {
              const Icon = study.kind === 'degree' ? GraduationCap : Award;
              return (
                <motion.li
                  key={study.title}
                  {...reveal('left')}
                  transition={{ duration: 0.9, delay: 0.08 * index, ease: [0.22, 0.61, 0.36, 1] }}
                  className="glass-panel group flex flex-1 gap-4 !p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <span className="glass-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-semibold leading-snug text-foreground">{study.title}</h3>
                      <span className="text-xs font-semibold text-accent">{study.period}</span>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">{study.institution}</p>
                    <p className="text-sm text-muted">{study.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div
          {...reveal('up')}
          className="glass-chip flex flex-col items-start gap-4 rounded-3xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-start gap-3 text-sm text-foreground sm:items-center">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:mt-0" aria-hidden="true" />
            <span>
              Turismo + desarrollo: entiendo al usuario y al negocio antes de escribir la primera línea.
            </span>
          </p>
          <Button variant="primary" asChild className="shrink-0">
            <a href="#proyectos" className="no-underline">
              Ver cómo lo aplico
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
