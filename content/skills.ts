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
        'Desarrollo de apps móviles con Expo y React Native, integrando autenticación con Google Sign-In, navegación avanzada, animaciones con Reanimated/Moti y eventos en tiempo real con Socket.io.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/expo/FFFFFF',
    },
    {
      name: 'Tailwind CSS',
      category: 'Estilos',
      description:
        'Sistemas de diseño utility-first con tokens, dark mode y componentes accesibles, combinado con Radix UI y shadcn/ui en proyectos productivos.',
      level: 'Experto',
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    },
    {
      name: 'Vite',
      category: 'Build tool',
      description:
        'Configuración de proyectos React con Vite para builds rápidos, HMR instantáneo y despliegues optimizados.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/vite/646CFF',
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
        'Diseño de APIs REST con autenticación, colas de mensajería y despliegues serverless en Vercel. Observabilidad y pruebas contractuales para integraciones críticas.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    },
    {
      name: 'Supabase',
      category: 'Backend as a Service',
      description:
        'Auth, base de datos Postgres, storage y suscripciones en tiempo real como backend principal en ecommerce y apps móviles productivas.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/supabase/3ECF8E',
    },
    {
      name: 'Firebase',
      category: 'Bases de datos',
      description:
        'Autenticación, Firestore y hosting para experiencias sincronizadas en tiempo real con reglas de seguridad a medida.',
      level: 'Intermedio',
      icon: 'https://cdn.simpleicons.org/firebase/FFCA28',
    },
    {
      name: 'Vercel',
      category: 'Deploy / Infra',
      description:
        'Despliegue continuo, preview deployments y edge functions para todos mis proyectos web en producción.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/vercel/FFFFFF',
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
      icon: 'https://cdn.simpleicons.org/langchain/1C3C3C',
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
    {
      name: 'GSAP',
      category: 'Motion Design',
      description:
        'Animaciones de scroll, timelines complejas y transiciones cinemáticas en landings y sitios de producto de alto impacto visual.',
      level: 'Avanzado',
      icon: 'https://cdn.simpleicons.org/greensock/88CE02',
    },
  ],
};

export type BadgeTone = 'primary' | 'accent' | 'neutral';

export const skillBadges: { label: string; tone: BadgeTone }[] = [
  { label: '+7 años construyendo experiencias digitales en LatAm y Europa', tone: 'primary' },
  { label: 'Especialista en React, Next.js y automatizaciones con IA', tone: 'accent' },
  { label: 'Enfoque UI/UX accesible con métricas y experimentación continua', tone: 'neutral' },
];
