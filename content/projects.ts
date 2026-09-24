export type Project = {
  title: string;
  description: string;
  tags: string[];
  /**
   * Clases de Tailwind para el gradiente de fondo (fallback si la imagen no carga).
   */
  accentGradient: string;
  /**
   * Icono lucide que representa el proyecto.
   */
  icon: 'cpu' | 'orbit' | 'circuit-board';
  /**
   * Screenshot real del proyecto (sitio en vivo u OpenGraph del repo).
   */
  image: string;
  /**
   * Showcase custom en el modal (reemplaza el video). Por ahora solo el mockup de Mac de Thora.
   */
  customShowcase?: 'thora-mac';
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

const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

export const projects: Project[] = [
  {
    title: 'Suelto y Confío',
    description:
      'Ecommerce para comercio de artículos de limpieza. Catálogo, carrito de compras y notificaciones vía Twilio.',
    tags: ['React', 'Vite', 'Firebase'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'cpu',
    image: shot('https://sueltoyconfio.com/'),
    href: 'https://sueltoyconfio.com/',
    modalContent:
      'Construí el storefront con React y Vite, autenticación y datos en tiempo real con Firebase, estilos con styled-components y Tailwind, y notificaciones automáticas al cliente con Twilio.',
    techStack: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'styled-components', 'Twilio'],
    links: [
      { label: 'Ver sitio', href: 'https://sueltoyconfio.com/' },
      { label: 'Ver código', href: 'https://github.com/frankYanez/suelto-y-confio-page' },
    ],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
      type: 'video/mp4',
      poster: shot('https://sueltoyconfio.com/'),
    },
  },
  {
    title: 'Zync',
    description:
      'App móvil social para descubrir y compartir planes de noche en tiempo real, con perfiles, QR y notificaciones push.',
    tags: ['React Native', 'Expo', 'Socket.io'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'orbit',
    image: 'https://opengraph.githubassets.com/1/frankYanez/Zync',
    href: 'https://github.com/frankYanez/Zync',
    modalContent:
      'Desarrollo con Expo y Expo Router, navegación con React Navigation, eventos en tiempo real con Socket.io, autenticación con Google Sign-In, animaciones con Moti y Reanimated, cámara, QR y notificaciones push nativas.',
    techStack: ['React Native', 'Expo', 'Expo Router', 'Socket.io', 'Google Sign-In', 'Moti', 'Reanimated'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/Zync' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/Zync',
    },
  },
  {
    title: 'Bouquet Esencias',
    description:
      'Ecommerce para comercio de artículos de limpieza y esencias. Catálogo de productos y experiencia de compra en Next.js.',
    tags: ['Next.js', 'React', 'TypeScript'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    image: shot('https://bouquet-pgfb.vercel.app/'),
    href: 'https://bouquet-pgfb.vercel.app/',
    modalContent:
      'Storefront construido con Next.js 15 (App Router) y React 19, tipado end-to-end con TypeScript y despliegue continuo en Vercel.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    links: [
      { label: 'Ver sitio', href: 'https://bouquet-pgfb.vercel.app/' },
      { label: 'Ver código', href: 'https://github.com/frankYanez/Bouquet' },
    ],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: shot('https://bouquet-pgfb.vercel.app/'),
    },
  },
  {
    title: 'Luxe Fragancias',
    description:
      'Ecommerce para comercio de perfumería árabe. Catálogo 3D, pagos online y panel administrativo con Supabase.',
    tags: ['Next.js', 'Supabase', 'GSAP'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    image: shot('https://luxefragancias.com/'),
    href: 'https://luxefragancias.com/',
    modalContent:
      'Storefront en Next.js con backend Supabase (auth, base de datos y storage), animaciones con GSAP y Framer Motion, componentes accesibles con Radix UI + shadcn, y escenas 3D con Three.js para presentar los productos.',
    techStack: ['Next.js', 'Supabase', 'GSAP', 'Framer Motion', 'Radix UI', 'Three.js', 'Tailwind CSS'],
    links: [
      { label: 'Ver sitio', href: 'https://luxefragancias.com/' },
      { label: 'Ver código', href: 'https://github.com/frankYanez/Luxe' },
    ],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: shot('https://luxefragancias.com/'),
    },
  },
  {
    title: 'Romana Club',
    description:
      'Sitio web de experiencia inmersiva para Romana Club, con animaciones cinemáticas y transiciones fluidas en cada sección.',
    tags: ['Next.js', 'GSAP', 'TypeScript'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    image: shot('https://romana-xi.vercel.app/'),
    href: 'https://romana-xi.vercel.app/',
    modalContent:
      'Landing construida con Next.js y TypeScript, animaciones de scroll y transiciones con GSAP, estilos con Tailwind CSS y despliegue en Vercel.',
    techStack: ['Next.js', 'GSAP', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Ver sitio', href: 'https://romana-xi.vercel.app/' },
      { label: 'Ver código', href: 'https://github.com/frankYanez/Romana' },
    ],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: shot('https://romana-xi.vercel.app/'),
    },
  },
  {
    title: 'Bosko App',
    description: 'Aplicación para la búsqueda de empleo en la ciudad de Tandil.',
    tags: ['React Native', 'Supabase', 'Realtime Analytics'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    image: shot('https://boskoapp.com/'),
    href: 'https://boskoapp.com/',
    modalContent:
      'Arquitectura modular con React Native y Expo, sincronización offline-first y backend en Supabase. El sistema de matching conecta ofertas de empleo locales con perfiles de candidatos en tiempo real.',
    techStack: ['React Native', 'Expo', 'Supabase', 'Framer Motion'],
    links: [{ label: 'Ver sitio', href: 'https://boskoapp.com/' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: shot('https://boskoapp.com/'),
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Poky',
    description: 'Plataforma de conocimiento descentralizado con escenas 3D y animaciones cinemáticas.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'orbit',
    image: 'https://opengraph.githubassets.com/1/frankYanez/Poky',
    href: 'https://github.com/frankYanez/Poky',
    modalContent:
      'Construido con Next.js y TypeScript, escenas 3D con Three.js y animaciones de scroll con GSAP para presentar el concepto de conocimiento descentralizado.',
    techStack: ['Next.js', 'Three.js', 'GSAP', 'TypeScript'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/Poky' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/Poky',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Banot',
    description: 'Sitio web para agencia de soluciones digitales con IA.',
    tags: ['Next.js', 'React', 'Framer Motion'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'cpu',
    image: 'https://opengraph.githubassets.com/1/frankYanez/Banot',
    href: 'https://github.com/frankYanez/Banot',
    modalContent:
      'Landing construida con Next.js, componentes accesibles y animaciones con Framer Motion para presentar servicios de soluciones digitales con IA.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'TypeScript'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/Banot' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/Banot',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Fluxe',
    description: 'Sitio con globo 3D interactivo y visualizaciones de datos animadas.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'orbit',
    image: 'https://opengraph.githubassets.com/1/frankYanez/Fluxe',
    href: 'https://github.com/frankYanez/Fluxe',
    modalContent:
      'Construido con Next.js, react-three-fiber y drei para el globo 3D interactivo, ruido simplex para efectos orgánicos y animaciones con GSAP y Framer Motion.',
    techStack: ['Next.js', 'React Three Fiber', 'Three.js', 'GSAP', 'Framer Motion'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/Fluxe' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/Fluxe',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Las Letras de Maju',
    description: 'Sitio web para clienta escritora: portfolio literario y presentación de sus obras.',
    tags: ['React', 'Vite', 'TypeScript'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'cpu',
    image: 'https://opengraph.githubassets.com/1/frankYanez/las_letras',
    href: 'https://github.com/frankYanez/las_letras',
    modalContent:
      'Sitio a medida para una clienta escritora, construido con React, Vite y TypeScript, enfocado en presentar sus libros y su biografía de forma editorial.',
    techStack: ['React', 'Vite', 'TypeScript'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/las_letras' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/las_letras',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio/store en vivo cuando esté disponible.
  {
    title: 'Línea BQ',
    description: 'App móvil para retos de fútbol en Barranquilla, con perfiles y sincronización en tiempo real.',
    tags: ['React Native', 'Expo', 'Supabase'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'circuit-board',
    image: 'https://opengraph.githubassets.com/1/frankYanez/linea-bq',
    href: 'https://github.com/frankYanez/linea-bq',
    modalContent:
      'App móvil desarrollada con Expo y React Native, backend en Supabase, pensada para organizar y participar en retos de fútbol en Barranquilla.',
    techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/linea-bq' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/linea-bq',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio/store en vivo cuando esté disponible.
  {
    title: 'Thora',
    description: 'App móvil con Expo Router y servicio de redirección propio.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    image: 'https://opengraph.githubassets.com/1/frankYanez/thora',
    customShowcase: 'thora-mac',
    href: 'https://github.com/frankYanez/thora',
    modalContent:
      'App desarrollada con Expo y React Native, con un servicio de redirección propio desplegado en Vercel para deep links y onboarding.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Vercel'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/thora' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/thora',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Threads Scheduler',
    description: 'Herramienta para programar y automatizar publicaciones en Threads.',
    tags: ['Next.js', 'React', 'TypeScript'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'cpu',
    image: 'https://opengraph.githubassets.com/1/frankYanez/threads-scheduler',
    href: 'https://github.com/frankYanez/threads-scheduler',
    modalContent:
      'Herramienta construida con Next.js para planificar, programar y automatizar publicaciones en Threads, con panel propio y despliegue en Vercel.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/threads-scheduler' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/threads-scheduler',
    },
  },
  // TODO: cambiar href/links por la URL real del sitio en vivo cuando esté disponible.
  {
    title: 'Zync Nightlife Hub',
    description: 'Panel web complementario a Zync para gestionar eventos y vida nocturna.',
    tags: ['React', 'Vite', 'TypeScript'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'orbit',
    image: 'https://opengraph.githubassets.com/1/frankYanez/zync-nightlife-hub',
    href: 'https://github.com/frankYanez/zync-nightlife-hub',
    modalContent:
      'Panel web construido con React, Vite y TypeScript, pensado como complemento de escritorio a la app móvil Zync para gestionar eventos.',
    techStack: ['React', 'Vite', 'TypeScript'],
    links: [{ label: 'Ver código', href: 'https://github.com/frankYanez/zync-nightlife-hub' }],
    video: {
      src: 'https://storage.googleapis.com/coverr-main/mp4/Gas_Plant.mp4',
      type: 'video/mp4',
      poster: 'https://opengraph.githubassets.com/1/frankYanez/zync-nightlife-hub',
    },
  },
];
