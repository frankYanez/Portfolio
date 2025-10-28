'use client';

import { footerLinks } from '@/content/footer';
import { reveal } from '@/lib/animations';
import { motion } from 'framer-motion';

/**
 * Footer muestra navegación secundaria y enlaces sociales con estilo compacto.
 * @returns Pie de página accesible.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container flex flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <motion.nav aria-label="Navegación secundaria" className="flex flex-wrap gap-4" {...reveal('up')}>
          {footerLinks.nav.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </motion.nav>
        <motion.div className="flex flex-wrap gap-4" {...reveal('up')}>
          {footerLinks.socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
              {link.label}
            </a>
          ))}
        </motion.div>
        <motion.p {...reveal('up')} className="text-xs text-white/40">
          {footerLinks.legal}
        </motion.p>
      </div>
    </footer>
  );
}
