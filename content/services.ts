export type BuildShowcase = {
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  image: 'mobile' | 'web';
};

export const buildShowcases: BuildShowcase[] = [
  {
    kicker: '01 / MOBILE',
    title: 'Apps que van',
    highlight: 'contigo.',
    description:
      'Experiencias móviles fluidas, offline-first y pensadas para el uso diario: navegación cuidada, animaciones nativas y sincronización en tiempo real.',
    tags: ['React Native', 'Expo', 'Multiplataforma'],
    ctaLabel: 'Ver proyectos mobile',
    ctaHref: '#proyectos',
    image: 'mobile'
  },
  {
    kicker: '02 / WEB',
    title: 'Webs que hacen',
    highlight: 'la diferencia.',
    description:
      'Sitios y plataformas rápidas, accesibles y hechas para convertir: SEO técnico, Core Web Vitals altos y despliegues continuos sin fricción.',
    tags: ['Next.js', 'Responsive', 'Alto rendimiento'],
    ctaLabel: 'Ver proyectos web',
    ctaHref: '#proyectos',
    image: 'web'
  }
];
