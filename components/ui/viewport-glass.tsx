'use client';

import { useEffect } from 'react';

/** Masked native blur avoids full-width SVG refraction on every scroll frame. */
export function ViewportGlass() {
  useEffect(() => {
    const section = document.querySelector('[data-showcase-theme="dark"]');
    if (!section) return;
    const root = document.documentElement;
    let observers: IntersectionObserver[] = [];
    const observeEdges = () => {
      observers.forEach((observer) => observer.disconnect());
      const height = window.innerHeight;
      observers = [
        { key: 'glassTopDark', y: Math.min(40, height - 1) },
        { key: 'glassBottomDark', y: Math.max(0, height - 24) },
      ].map(({ key, y }) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            root.dataset[key] = String(entry.isIntersecting);
          },
          {
            rootMargin: `-${y}px 0px -${Math.max(0, height - y - 1)}px 0px`,
            threshold: 0,
          },
        );
        observer.observe(section);
        return observer;
      });
    };
    observeEdges();
    window.addEventListener('resize', observeEdges);
    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('resize', observeEdges);
      delete root.dataset.glassTopDark;
      delete root.dataset.glassBottomDark;
    };
  }, []);

  return (
    <div aria-hidden="true" className="viewport-glass">
      {(['top', 'bottom'] as const).map((edge) => (
        <div key={edge} className={`viewport-glass-band viewport-glass-band--${edge}`} />
      ))}
    </div>
  );
}
