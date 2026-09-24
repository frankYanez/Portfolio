export type ShowcaseProject = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  tags: string[];
  details: string;
  href?: string;
};

export const mobileShowcase: ShowcaseProject[] = [
  {
    id: 'bosko-mobile', name: 'Bosko', category: 'SERVICIOS EN RED',
    headline: 'El talento encuentra su lugar.',
    description: 'Una app que conecta a quienes necesitan un servicio con quienes saben hacerlo.',
    image: '/images/work/bosko-mobile.webp', tags: ['React Native', 'Expo', 'Marketplace'],
    details: 'Perfiles de clientes y proveedores, publicación de servicios y conversaciones en una experiencia móvil. Una arquitectura organizada por funcionalidades para acompañar la evolución del producto.',
    href: 'https://boskoapp.com/',
  },
  {
    id: 'lineabq-mobile', name: 'Línea BQ', category: 'DEPORTE & COMUNIDAD',
    headline: 'El próximo partido empieza acá.',
    description: 'Equipos, rivales y canchas. El fútbol amateur de Barranquilla, conectado.',
    image: '/images/work/lineabq-mobile.webp', tags: ['React Native', 'Expo', 'Supabase'],
    details: 'Una experiencia para crear equipos, encontrar rivales y organizar retos de fútbol. Perfiles, invitaciones y gestión de canchas reunidos alrededor de la comunidad deportiva local.',
  },
  {
    id: 'thora-mobile', name: 'Thora', category: 'IDENTIDAD DIGITAL & NFC',
    headline: 'Una conexión. Un solo toque.',
    description: 'Tarjetas y pulseras NFC que conectan el mundo físico con tu identidad digital.',
    image: '/images/work/thora-mobile.webp', tags: ['React Native', 'NFC', 'Supabase'],
    details: 'Vinculación de dispositivos NFC, perfiles digitales y enlaces compartibles. Incluye lectura de etiquetas, información de emergencia y un servicio de redirección para conectar cada dispositivo con su destino.',
  },
];

export const webShowcase: ShowcaseProject[] = [
  {
    id: 'bosko-web', name: 'Bosko', category: 'LANDING DE PRODUCTO',
    headline: 'La primera conexión con la app.',
    description: 'Una landing que presenta Bosko y acerca su propuesta a clientes y profesionales.',
    image: '/images/work/bosko-web.webp', tags: ['Next.js', 'React', 'GSAP'],
    details: 'Presentación del marketplace de servicios, su funcionamiento y sus beneficios. Una experiencia web que extiende la identidad de la app y guía a las personas hacia el producto.',
    href: 'https://boskoapp.com/',
  },
  {
    id: 'crea-web', name: 'Crea', category: 'ESTUDIO CREATIVO',
    headline: 'Marcas que dejan huella.',
    description: 'Publicidad, tecnología y contenido en una experiencia con identidad propia.',
    image: '/images/work/crea-web.webp', tags: ['Next.js', 'React', 'Diseño responsive'],
    details: 'Un sitio para presentar servicios creativos y digitales, desde identidad de marca hasta desarrollo web. La composición visual pone en primer plano el trabajo y la personalidad del estudio.',
  },
  {
    id: 'luxe-web', name: 'Luxe', category: 'ECOMMERCE DE PERFUMERÍA',
    headline: 'Una experiencia que deja esencia.',
    description: 'Un catálogo de fragancias donde el producto y la experiencia de compra son protagonistas.',
    image: '/images/work/luxe-web.webp', tags: ['Next.js', 'Supabase', 'Ecommerce'],
    details: 'Catálogo, fichas de producto y recorrido de compra para una perfumería. Presentación visual de fragancias y decants, con una base en Supabase para gestionar el contenido del comercio.',
    href: 'https://luxefragancias.com/',
  },
  {
    id: 'brava-web', name: 'Brava', category: 'AGENCIA & CONTENIDO',
    headline: 'Hazte ver. Sé Brava.',
    description: 'Una presencia digital con carácter para una marca que ayuda a otras a hacerse visibles.',
    image: '/images/work/brava-web.webp', tags: ['React', 'Vite', 'Framer Motion'],
    details: 'Una web para una agencia de contenido y visibilidad digital. Servicios, proyectos y contacto en un recorrido que refleja su identidad directa, cercana y creativa.',
  },
];
