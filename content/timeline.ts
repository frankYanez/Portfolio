export type TimelineItem = {
  period: string;
  duration: string;
  role: string;
  company: string;
  context?: string;
  current?: boolean;
  description: string;
  achievements: string[];
  stack: string[];
};

export const timelineIntro = {
  eyebrow: 'Experiencia',
  title: 'Mi recorrido',
  description:
    'Más de 4 años construyendo productos digitales con React Native, Expo y Next.js: del freelance para clientes de Colombia y Argentina al frontend de una plataforma en producción.',
};

export const timeline: TimelineItem[] = [
  {
    period: '2024 — Actualidad',
    duration: '2 años',
    role: 'Frontend Developer',
    company: 'Chabit',
    context: 'Ticketera Blockchain',
    current: true,
    description:
      'Desarrollo el frontend mobile de una plataforma de ticketing basada en blockchain con React Native 0.81, Expo SDK 54 y TypeScript strict.',
    achievements: [
      'Arquitectura modular con NativeWind 4, Reanimated 4, TanStack Query v5 y Zustand v5 para el estado global.',
      'Autenticación JWT con refresh token rotation y manejo seguro de sesiones.',
      'Publiqué y mantengo el paquete NPM @chabit-ecosystem/ui-components, librería de componentes reutilizables.',
      'Testing E2E con Maestro y funcionalidades en tiempo real con Socket.io.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Reanimated', 'TanStack Query', 'Zustand', 'Socket.io', 'Maestro'],
  },
  {
    period: '2023 — 2024',
    duration: '6 meses',
    role: 'Frontend Developer',
    company: 'Footalent',
    description: 'Desarrollo frontend en un entorno de producto con metodologías ágiles.',
    achievements: ['Colaboración con un equipo multidisciplinario en ciclos de desarrollo iterativos.'],
    stack: [],
  },
  {
    period: '2021 — 2023',
    duration: '2 años',
    role: 'Desarrollador Freelance',
    company: 'Proyectos independientes',
    description: 'Sitios web y aplicaciones móviles para clientes de Colombia y Argentina, con gestión completa: relevamiento, diseño, desarrollo y entrega.',
    achievements: [
      'Sitio corporativo para INGEOTEL S.A.S. (Bucaramanga) con mapa SVG animado de proyectos y animaciones con Framer Motion.',
      'Formulario interactivo para UNIMINUTO con carrusel de cards y firma digital (Next.js + Framer Motion).',
    ],
    stack: ['Next.js', 'Framer Motion', 'React Native'],
  },
];
