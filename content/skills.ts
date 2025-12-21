export type Skill = {
  name: string;
  category: string;
  description: string;
  level: 'Aprendiz' | 'Intermedio' | 'Avanzado' | 'Experto';
  icon: string;
};

export const skillGroups: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'React',
      category: 'Framework',
      description:
        'Experto en React con enfoque en rendimiento, hooks avanzados, contextos globales y arquitectura escalable. Dominio de patrones modernos como Server Components, Suspense y optimización del renderizado.',
      level: 'Experto',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
    },
    {
      name: 'Next.js',
      category: 'SSR / SSG',
      description:
        'Experiencia con App Router, streaming en el edge, optimización SEO técnica, internacionalización y diseño de rutas para dashboards complejos.',
      level: 'Experto',
      icon: 'https://cdn.simpleicons.org/nextdotjs/000000',
    },
    {
      name: 'TypeScript',
      category: 'Lenguaje',
      description:
        'Uso avanzado de tipados genéricos, utilidades, contextos y validación de props para mejorar la mantenibilidad y escalabilidad de proyectos frontend grandes.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    },
    {
      name: 'React Native',
      category: 'Mobile',
      description:
        'Desarrollo de apps móviles con Expo y React Native, integrando autenticación biométrica, navegación avanzada, animaciones con Reanimated y sincronización con APIs REST y servicios en tiempo real.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
    },
  ],

  Diseño: [
    {
      name: 'Figma',
      category: 'DesignOps',
      description:
        'Prototipado de interfaces, definición de sistemas de diseño, documentación de componentes y handoff preciso a código.',
      level: 'Intermedio',
      icon: 'https://cdn.simpleicons.org/figma/F24E1E',
    },
    {
      name: 'UX/UI',
      category: 'Experiencia de Usuario',
      description:
        'Diseño centrado en el usuario: accesibilidad, microinteracciones, flujos intuitivos y coherencia visual respaldada por investigación.',
      level: 'Intermedio',
      icon: 'https://cdn.simpleicons.org/sketch/F7B500',
    },
  ],

  Backend: [
    {
      name: 'Node.js',
      category: 'APIs',
      description:
        'Diseño de APIs REST y GraphQL con autenticación JWT, colas de mensajería y despliegues serverless en Vercel/AWS. Observabilidad y pruebas contractuales para integraciones críticas.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    },
    {
      name: 'MongoDB / Firebase',
      category: 'Bases de datos',
      description:
        'Modelado de datos orientado a producto, triggers en tiempo real y reglas de seguridad para experiencias sincronizadas y escalables.',
      level: 'Intermedio',
      icon: 'https://cdn.simpleicons.org/mongodb/47A248',
    },
  ],

  Automatización: [
    {
      name: 'n8n / Make',
      category: 'Orquestación',
      description:
        'Automatización de procesos complejos con conectores personalizados, manejo de errores resiliente y dashboards de monitoreo para detectar cuellos de botella.',
      level: 'Experto',
      icon: 'https://cdn.simpleicons.org/n8n/EA4B71',
    },
    {
      name: 'Agentes IA',
      category: 'Inteligencia Artificial',
      description:
        'Diseño de agentes que combinan LLMs, embeddings y reglas de negocio para clasificar, resumir y ejecutar acciones con supervisión humana.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/openai/412991',
    },
  ],

  Animaciones: [
    {
      name: 'Framer Motion / Reanimated',
      category: 'Motion Design',
      description:
        'Creación de transiciones fluidas, microinteracciones y animaciones 3D reactivas que elevan la experiencia del usuario, siempre con foco en performance.',
      level: 'Experto',
      icon: 'https://cdn.simpleicons.org/framer/0055FF',
    },
  ],
};

export type BadgeTone = 'primary' | 'accent' | 'neutral';

export const skillBadges: { label: string; tone: BadgeTone }[] = [
  { label: '+7 años construyendo experiencias digitales en LatAm y Europa', tone: 'primary' },
  { label: 'Especialista en React, Next.js y automatizaciones con IA', tone: 'accent' },
  { label: 'Enfoque UI/UX accesible con métricas y experimentación continua', tone: 'neutral' },
];
