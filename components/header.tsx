'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { heroContent } from '@/content/hero';
import { reveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Servicios', href: '#paquetes' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
];

/**
 * Header mobile-first: menú hamburguesa con panel glass en pantallas chicas y
 * navegación completa desde lg. Transparente sobre el hero, legible al hacer scroll.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    // Bloquea el scroll de la página y lleva el foco al panel; al cerrar lo devuelve al botón.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const toggle = toggleRef.current;
    window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = overflow;
      toggle?.focus();
    };
  }, [open]);

  const onHero = !scrolled && !open;
  const linkColor = onHero ? 'text-neutral-700 hover:text-neutral-950' : 'text-muted hover:text-foreground';

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <motion.div
        className="section-container flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4"
        {...reveal('down')}
      >
        <a
          href="#inicio"
          className={cn(
            'flex min-w-0 flex-col leading-tight no-underline',
            onHero ? 'text-neutral-900 hover:text-neutral-900' : 'text-foreground hover:text-foreground'
          )}
        >
          <span className="truncate text-sm font-semibold tracking-widest">{heroContent.name}</span>
          <span className="truncate text-[11px] font-bold uppercase tracking-[0.25em] text-gradient-accent">{heroContent.role}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn('no-underline transition', linkColor)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle forceLight={onHero} />
          <Button variant="primary" asChild className="hidden min-h-10 px-4 py-2 text-xs uppercase tracking-widest sm:inline-flex">
            <a href={heroContent.secondaryCta.href} className="no-underline">Contactar</a>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className={cn(
              'glass-chip flex h-11 w-11 items-center justify-center rounded-full transition active:scale-95 lg:hidden',
              onHero ? 'border-black/10 bg-white/50 text-neutral-900' : 'text-foreground'
            )}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <>
            {/* Fondo: difumina la página detrás del panel; tocarlo cierra el menú. */}
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              tabIndex={-1}
              className="fixed inset-0 z-10 cursor-default bg-background/30 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            {/* Panel lateral glass que entra desde la derecha. */}
            <motion.nav
              id="mobile-menu"
              aria-label="Menú móvil"
              className="fixed inset-y-0 right-0 z-20 flex w-[82vw] max-w-sm flex-col gap-1 rounded-l-[2rem] border-l border-border/10 bg-surface/80 p-4 pt-3 shadow-glass backdrop-blur-2xl lg:hidden"
              style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="mb-4 flex items-center justify-between pl-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Menú</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="glass-chip flex h-11 w-11 items-center justify-center rounded-full text-foreground transition active:scale-95"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.3 }}
                  className="flex min-h-14 items-center rounded-2xl px-4 text-lg font-semibold text-foreground no-underline transition hover:bg-surfaceAlt/70 hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button variant="primary" asChild className="mt-auto min-h-12 justify-center">
                <a href={heroContent.secondaryCta.href} className="no-underline" onClick={() => setOpen(false)}>
                  Contactar
                </a>
              </Button>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
