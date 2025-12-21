export type Project = {
  title: string;
  description: string;
  tags: string[];
  /**
   * Clases de Tailwind para el gradiente de fondo.
   */
  accentGradient: string;
  /**
   * Icono lucide que representa el proyecto.
   */
  icon: 'cpu' | 'orbit' | 'circuit-board';
  href?: string;
  modalContent: string;
  techStack: string[];
  links: { label: string; href: string }[];
  video: {
    src: string;
    type: string;
    poster: string;
  };
};

export const projects: Project[] = [
  {
    title: 'Suelto y Confio',
    description:
      'Ecommerce para comercio de articulos de limpieza. Cuenta con pagos online y carrito de compras',
    tags: ['React', 'Next.js', 'Stripe'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'cpu',
    href: 'https://sueltoyconfio.com/',
    modalContent:
      'Diseñé la arquitectura de orquestación usando n8n, colas resilientes y agentes GPT para clasificar tickets. Implementé dashboards de observabilidad, alertas proactivas y un portal en Next.js para visualizar KPIs en tiempo real.',
    techStack: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'OpenAI'],
    links: [
      { label: 'Ver sitio', href: 'https://sueltoyconfio.com/' },
      { label: 'Ver codigo', href: 'https://github.com/franciscoyanez/orion-automations' },
    ],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    title: 'Nebula Commerce Platform',
    description:
      'E-commerce headless con catálogos 3D, pruebas A/B automatizadas y contenidos personalizados por IA. Incrementó la conversión un 38% en 3 meses.',
    tags: ['Next.js 14', 'Edge Functions', 'A/B Testing'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'orbit',
    href: 'https://franciscoyanez.dev/nebula',
    modalContent:
      'Lideré el diseño UX/UI, desarrollé el storefront con App Router, integré Stripe, CMS headless y WebGL para visualizar productos interactivos. Automatizamos campañas en función de datos reales y se implementó SEO técnico avanzado.',
    techStack: ['Next.js 14', 'Stripe', 'Three.js', 'Sanity CMS'],
    links: [{ label: 'Ver prototipo', href: 'https://franciscoyanez.dev/nebula' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    title: 'Bouquet Limpieza',
    description:
      'Ecommerce para comercio de articulos de limpieza. Cuenta con pagos online y carrito de compras',
    tags: ['React Native', 'Supabase', 'Realtime Analytics'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    href: 'https://franciscoyanez.dev/pulseops',
    modalContent:
      'Diseñé una arquitectura modular con React Native y Expo, sincronización offline-first y panel administrativo en Next.js. El motor analítico predice desvíos de ruta usando datos históricos y notifica automáticamente a los equipos.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Framer Motion'],
    links: [{ label: 'Descargar documentación', href: 'https://github.com/franciscoyanez/pulseops' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    title: 'Luxe Fragancias',
    description:
      'Ecommerce para comercio de perfumeria Arabe. Cuenta con pagos online y carrito de compras',
    tags: ['React Native', 'Supabase', 'Realtime Analytics'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    href: 'https://luxefragancias.com/',
    modalContent:
      'Diseñé una arquitectura modular con React Native y Expo, sincronización offline-first y panel administrativo en Next.js. El motor analítico predice desvíos de ruta usando datos históricos y notifica automáticamente a los equipos.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Framer Motion'],
    links: [{ label: 'Ver sitio', href: 'https://luxefragancias.com/' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    title: 'Luxe Fragancias Automatizacion',
    description:
      'Automatizaciones para comercio de perfumeria Arabe. Cuenta con pagos online y carrito de compras',
    tags: ['React Native', 'Supabase', 'Realtime Analytics'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    href: 'https://luxefragancias.com/',
    modalContent:
      'Diseñé una arquitectura modular con React Native y Expo, sincronización offline-first y panel administrativo en Next.js. El motor analítico predice desvíos de ruta usando datos históricos y notifica automáticamente a los equipos.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Framer Motion'],
    links: [{ label: 'Ver sitio', href: 'https://luxefragancias.com/' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    title: 'Bosko App',
    description:
      'Aplicacion para la busqueda de empleo en la ciudad de Tandil',
    tags: ['React Native', 'Supabase', 'Realtime Analytics'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    href: 'https://boskoapp.com/',
    modalContent:
      'Diseñé una arquitectura modular con React Native y Expo, sincronización offline-first y panel administrativo en Next.js. El motor analítico predice desvíos de ruta usando datos históricos y notifica automáticamente a los equipos.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Framer Motion'],
    links: [{ label: 'Ver codigo', href: 'https://github.com/frankYanez/frontend-bosko' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
  },
];
