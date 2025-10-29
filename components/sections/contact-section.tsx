'use client';

import { motion } from 'framer-motion';
import { contactContent } from '@/content/contact';
import { Button } from '@/components/ui/button';
import { reveal } from '@/lib/animations';

/**
 * ContactSection ofrece CTA final con métodos de contacto.
 * @returns Bloque con correo y enlaces sociales.
 */
export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="py-24">
      <div className="section-container">
        <motion.div {...reveal('up')} className="glass-panel flex flex-col gap-6 text-center">
          <h2 id="contact-title" className="text-3xl font-semibold text-white">
            {contactContent.title}
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">{contactContent.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" asChild>
              <a href={contactContent.email}>Escríbeme</a>
            </Button>
            {contactContent.socialButtons.map((button) => (
              <Button key={button.label} variant="secondary" asChild>
                <a href={button.href} target="_blank" rel="noreferrer">
                  {button.label}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
