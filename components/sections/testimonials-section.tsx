'use client';

import { testimonials } from '@/content/testimonials';
import { AnimatedTestimonials } from '@/src/Components/ui/animated-testimonials';

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 sm:py-24">
      <div className="section-container">
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
