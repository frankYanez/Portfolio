'use client';

import { motion } from 'framer-motion';
import { timeline, timelineIntro } from '@/content/timeline';
import { inOutViewport, reveal } from '@/lib/animations';

/**
 * TimelineSection ("Mi recorrido"): experiencia real (del CV) sobre una línea vertical,
 * sin tarjetas: tipografía, insignia del puesto actual y stack en chips.
 */
export function TimelineSection() {
  return (
    <section id="experiencia" aria-labelledby="timeline-title" className="relative isolate overflow-x-clip py-10 sm:py-12">
      <div
        className="section-glow"
        style={{ backgroundImage: 'radial-gradient(circle at 10% 40%, rgb(124 58 237 / 0.1), transparent 50%)' }}
        aria-hidden="true"
      />
      <div className="section-container">
        <motion.div {...reveal('up')} className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{timelineIntro.eyebrow}</span>
          <h2 id="timeline-title" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            {timelineIntro.title}
          </h2>
          <p className="text-muted">{timelineIntro.description}</p>
        </motion.div>

        <ol className="relative mt-10 space-y-12 border-l border-border/15 pl-6 sm:mt-14 sm:space-y-16 sm:pl-10">
          {timeline.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={inOutViewport}
              transition={{ duration: 0.7, delay: 0.06 * index, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              <span
                className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent shadow-glow sm:-left-[47px]"
                aria-hidden="true"
              >
                {item.current ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                ) : null}
              </span>

              <article className="max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  <span className="text-accent">{item.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.duration}</span>
                  {item.current ? (
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] text-accent">
                      Actual
                    </span>
                  ) : null}
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{item.role}</h3>
                  <p className="mt-1 text-base font-medium text-foreground/80">
                    {item.company}
                    {item.context ? <span className="text-muted"> — {item.context}</span> : null}
                  </p>
                </div>

                <p className="text-sm text-muted sm:text-base">{item.description}</p>

                <ul className="space-y-2 text-sm text-muted">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {item.stack.length ? (
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label={`Stack en ${item.company}`}>
                    {item.stack.map((tech) => (
                      <li key={tech} className="glass-chip rounded-full px-3 py-1 text-xs font-medium text-foreground">
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
