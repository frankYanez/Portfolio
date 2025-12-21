import { motion } from 'framer-motion';
import { TestimonialsContent } from '@/content/testimonials';
import { AnimatedTestimonials } from '@/src/Components/ui/modern-testimonials-slider';
import { fadeInUp, staggerChildren } from '@/lib/animations';

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="show"
          variants={staggerChildren}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-center">
            <motion.h2
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
              variants={fadeInUp}
            >
              Lo que dicen mis aliados
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-white/70"
              variants={fadeInUp}
            >
              Resultados reales y colaboraciones éxitosa. La confianza se construye con código de calidad.
            </motion.p>
          </div>

          <AnimatedTestimonials testimonials={TestimonialsContent} autoplay />
        </motion.div>
      </div>
    </section>
  );
}
