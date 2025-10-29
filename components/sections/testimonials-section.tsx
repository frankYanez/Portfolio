'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/content/testimonials';
import { Button } from '@/components/ui/button';

/**
 * TestimonialsSection muestra comentarios destacados con navegación accesible.
 * @returns Carrusel animado de testimonios.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section aria-labelledby="testimonials-title" className="py-24">
      <div className="section-container">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="testimonials-title" className="text-3xl font-semibold text-white">
              Testimonios
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              TODO: Invitación a explorar feedback de colaboradores y clientes.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={prev} aria-label="Testimonio anterior">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="ghost" onClick={next} aria-label="Testimonio siguiente">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="glass-panel relative overflow-hidden"
            >
              <Quote className="absolute -top-4 -left-2 h-20 w-20 text-primary/30" aria-hidden="true" />
              <blockquote className="relative text-lg text-white/80">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/60">
                <span className="font-semibold text-white">{testimonial.name}</span> — {testimonial.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
