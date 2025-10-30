export type Skill = {
  name: string;
  category: string;
  description: string;
  level: 'Aprendiz' | 'Intermedio' | 'Experto'| "Avanzado" ;
};

export const skillGroups: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'React',
      category: 'Framework',
      description:
        'Experto en React con enfoque en rendimiento, hooks avanzados, contextos globales y arquitectura escalable. Dominio de patrones modernos como Server Components, Suspense y optimización del renderizado.',
      level: 'Experto',
    },
    {
      name: 'Next.js',
      category: 'SSR / SSG',
      description:
        'Amplia experiencia con App Router, optimización SEO, renderizado híbrido (SSR/SSG) y estrategias de cacheo. Integraciones complejas con APIs, animaciones y arquitectura limpia orientada al rendimiento.',
      level: 'Intermedio',
    },
    {
      name: 'TypeScript',
      category: 'Lenguaje',
      description:
        'Uso avanzado de tipados genéricos, interfaces, contextos y validación de props para mejorar la mantenibilidad y escalabilidad de proyectos frontend grandes.',
      level: 'Avanzado',
    },
    {
      name: 'React Native',
      category: 'Mobile',
      description:
        'Desarrollo de apps móviles modernas con Expo y React Native, integrando autenticación, navegación avanzada, animaciones con Reanimated y sincronización con APIs REST y blockchain.',
      level: 'Avanzado',
    },
  ],

  Diseño: [
    {
      name: 'Figma',
      category: 'DesignOps',
      description:
        'Capacidad para prototipar interfaces, definir sistemas de diseño, documentar componentes y mantener coherencia visual en el desarrollo con handoff preciso a código.',
      level: 'Intermedio',
    },
    {
      name: 'UX/UI',
      category: 'Experiencia de Usuario',
      description:
        'Diseño centrado en el usuario: accesibilidad, microinteracciones, flujos intuitivos y coherencia visual. Capacidad para transformar conceptos en experiencias funcionales.',
      level: 'Intermedio',
    },
  ],

  Backend: [
    {
      name: 'Node.js',
      category: 'APIs',
      description:
        'Construcción de APIs REST seguras y eficientes. Experiencia con Express, autenticación JWT, middleware personalizado y manejo de entornos serverless en Vercel o AWS.',
      level: 'Intermedio',
    },
    {
      name: 'MongoDB / Firebase',
      category: 'Bases de datos',
      description:
        'Diseño y consumo de bases de datos NoSQL optimizadas para rendimiento, escalabilidad y sincronización en tiempo real.',
      level: 'Intermedio',
    },
  ],
  NoCode: [
    {
      name: 'N8N',
      category: 'AI',
      description:
        'Construcción de APIs REST seguras y eficientes. Experiencia con Express, autenticación JWT, middleware personalizado y manejo de entornos serverless en Vercel o AWS.',
      level: 'Intermedio',
    },
    {
      name: 'Agentes IA',
      category: 'AI',
      description:
        'Diseño y consumo de bases de datos NoSQL optimizadas para rendimiento, escalabilidad y sincronización en tiempo real.',
      level: 'Intermedio',
    },

],
  Animaciones: [
    {
      name: 'Framer Motion / Reanimated',
      category: 'Motion Design',
      description:
        'Creación de transiciones fluidas, microinteracciones y animaciones 3D reactivas que elevan la experiencia del usuario. Enfoque en performance y naturalidad visual.',
      level: 'Experto',
    },
  ],
};

export type BadgeTone = 'primary' | 'accent' | 'neutral';

export const skillBadges: { label: string; tone: BadgeTone }[] = [
  { label: '+4 años de experiencia profesional en desarrollo frontend', tone: 'primary' },
  { label: 'Especialista en React, Next.js y experiencias inmersivas', tone: 'accent' },
  { label: 'Visión UI/UX centrada en el usuario y el rendimiento', tone: 'neutral' },
];
