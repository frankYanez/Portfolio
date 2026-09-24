'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Monitor, Pause, Play, Smartphone, Sparkles } from 'lucide-react';
import type { ShowcaseProject } from '@/content/showcase';
import { Button } from '@/components/ui/button';
import { LiquidTile } from '@/components/ui/liquid-tile';
import { inOutViewport, reveal } from '@/lib/animations';
import styles from './project-gallery.module.css';

type Props = { id: string; title: string; subtitle: string; label: string; device: 'iphone' | 'mac'; projects: ShowcaseProject[] };

const AUTOPLAY_MS = 4500;

export function ProjectGallery({ id, title, subtitle, label, device, projects }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [end, setEnd] = useState(false);
  const [thumb, setThumb] = useState({ size: 1, offset: 0 });
  const scrollable = thumb.size < 0.99;
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const state = useRef({ active: 0, end: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const sync = () => {
      const cards = Array.from(element.children) as HTMLElement[];
      const left = element.getBoundingClientRect().left + parseFloat(getComputedStyle(element).paddingLeft);
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, index) => {
        const current = Math.abs(card.getBoundingClientRect().left - left);
        if (current < distance) { distance = current; nearest = index; }
      });
      const max = element.scrollWidth - element.clientWidth;
      const atEnd = element.scrollLeft >= max - 8;
      state.current = { active: nearest, end: atEnd };
      setActive(nearest);
      setEnd(atEnd);
      const size = Math.min(1, element.clientWidth / element.scrollWidth);
      setThumb({ size, offset: max > 0 ? (element.scrollLeft / max) * (1 - size) : 0 });
    };
    const resize = new ResizeObserver(sync);
    resize.observe(element);
    element.addEventListener('scroll', sync, { passive: true });
    const visibility = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    visibility.observe(element);
    sync();
    return () => {
      resize.disconnect();
      visibility.disconnect();
      element.removeEventListener('scroll', sync);
    };
  }, []);

  const go = useCallback((index: number) => {
    const element = track.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    element.scrollTo({ left: element.scrollLeft + card.getBoundingClientRect().left - element.getBoundingClientRect().left - parseFloat(getComputedStyle(element).paddingLeft), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, []);

  // Avance automático: se pausa con hover/foco, fuera de pantalla o con un detalle abierto. Con movimiento
  // reducido sigue avanzando (pedido explícito) pero salta sin scroll suave; el botón de pausa lo detiene.
  const autoplay = scrollable && playing && !hovered && inView;
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element || element.querySelector('details[open]')) return;
      const { active: current, end: atEnd } = state.current;
      if (atEnd) element.scrollTo({ left: 0, behavior: 'smooth' });
      else go(current + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, go]);

  // Scrollbar propio: click o arrastre sobre la barra mueve la galería.
  const scrubTo = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = track.current;
    const rail = bar.current;
    if (!element || !rail) return;
    const rect = rail.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    element.scrollTo({ left: ratio * (element.scrollWidth - element.clientWidth) });
  };

  const Tile = device === 'mac' ? Monitor : Smartphone;

  return (
    <section id={id} className={`${styles.section} ${device === 'mac' ? styles.webSection : styles.mobileSection}`} aria-labelledby={`${id}-title`}>
      <div className={styles.liquid} aria-hidden="true">
        <LiquidTile icon={Tile} size="lg" className={styles.tileLg} />
        <LiquidTile icon={device === 'mac' ? Code2 : Sparkles} size="sm" className={styles.tileSm} />
      </div>
      <motion.div {...reveal('up')} className={styles.heading}>
        <p className={styles.eyebrow}>{label}</p>
        <div className={styles.headingRow}>
          <div><h2 id={`${id}-title`}>{title}</h2><p className={styles.subtitle}>{subtitle}</p></div>
          <Button variant="primary" asChild className="shrink-0">
            <a href="#contacto" className="no-underline">Creemos el próximo <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </Button>
        </div>
      </motion.div>
      <div
        id={`${id}-gallery`} ref={track} className={`${styles.track} ${device === 'mac' ? styles.webTrack : styles.mobileTrack}`}
        role="region" aria-label={`Galería de ${device === 'mac' ? 'sitios web' : 'apps móviles'}`} tabIndex={0}
        onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault(); go(Math.max(0, Math.min(projects.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1))));
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.article
            className={styles.card} key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={inOutViewport}
            transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className={styles.cardHeading}><span>{project.category}</span><span className={styles.number}>0{index + 1}</span></div>
            <h3>{project.name}</h3>
            <p className={styles.headline}>{project.headline}</p>
            <div className={`${device === 'iphone' ? styles.phoneStage : styles.macStage} ${styles.stageGlow}`}>
              {device === 'iphone' ? (
                <Image src={project.image} alt={`Mockup de iPhone con la identidad de ${project.name}`} width={1280} height={1280} sizes="(max-width: 640px) 80vw, 340px" className={styles.phoneImage} />
              ) : (
                <div className={styles.mac}>
                  <div className={styles.macLid}>
                    <span className={styles.camera} aria-hidden="true" />
                    <Image src={project.image} alt={`Captura de la web de ${project.name} en un mockup de MacBook`} width={1440} height={900} sizes="(max-width: 640px) 80vw, 480px" className={styles.macScreen} />
                    <span className={styles.macLabel} aria-hidden="true">MacBook Pro</span>
                  </div>
                  <div className={styles.macBase} aria-hidden="true"><span /></div>
                </div>
              )}
            </div>
            <div className={styles.cardBody}>
              <p>{project.description}</p>
              <ul className={styles.tags} aria-label={`Tecnologías de ${project.name}`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <details className={styles.details}>
                <summary>Sobre el proyecto <span aria-hidden="true">+</span></summary>
                <p>{project.details}</p>
                {project.href && (
                  <Button variant="primary" asChild className="mt-4 min-h-10 px-4 py-2 text-xs">
                    <a href={project.href} target="_blank" rel="noreferrer" className="no-underline">Visitar sitio <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
                  </Button>
                )}
              </details>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div {...reveal('up')} className={styles.controls} hidden={!scrollable}>
        <div className={styles.progress}>
          <button
            type="button" className={styles.playToggle} onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? `Pausar avance automático: ${label}` : `Reanudar avance automático: ${label}`} aria-pressed={!playing}
          >
            {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
          </button>
          <div
            ref={bar} className={styles.scrollbar} aria-hidden="true"
            onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); scrubTo(event); }}
            onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) scrubTo(event); }}
          >
            <span
              className={`${styles.thumb} ${autoplay ? styles.thumbLive : ''}`}
              style={{ width: `${thumb.size * 100}%`, left: `${thumb.offset * 100}%` }}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" aria-label={`Anterior: ${label}`} aria-controls={`${id}-gallery`} disabled={active === 0} onClick={() => go(active - 1)}><ArrowLeft size={19} /></button>
          <button type="button" aria-label={`Siguiente: ${label}`} aria-controls={`${id}-gallery`} disabled={end} onClick={() => go(Math.min(active + 1, projects.length - 1))}><ArrowRight size={19} /></button>
        </div>
      </motion.div>
    </section>
  );
}
