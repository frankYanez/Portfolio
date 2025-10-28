export type Skill = {
  name: string;
  category: string;
  description: string;
  level: 'Aprendiz' | 'Intermedio' | 'Experto';
};

export const skillGroups: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'TODO: React',
      category: 'Framework',
      description: 'TODO: Detalle breve de experiencia con React y ecosistema.',
      level: 'Experto'
    },
    {
      name: 'TODO: Next.js',
      category: 'SSR / SSG',
      description: 'TODO: Logros destacados con SSR, App Router y optimizaciones.',
      level: 'Experto'
    }
  ],
  Diseño: [
    {
      name: 'TODO: Figma',
      category: 'DesignOps',
      description: 'TODO: Capacidad para prototipar, sistemas de diseño y handoff.',
      level: 'Intermedio'
    }
  ],
  Backend: [
    {
      name: 'TODO: Node.js',
      category: 'APIs',
      description: 'TODO: Construcción de APIs escalables y serverless.',
      level: 'Intermedio'
    }
  ]
};

export type BadgeTone = 'primary' | 'accent' | 'neutral';

export const skillBadges: { label: string; tone: BadgeTone }[] = [
  { label: 'TODO: +8 años de experiencia', tone: 'primary' },
  { label: 'TODO: Mentor de equipos multidisciplinarios', tone: 'accent' },
  { label: 'TODO: Enfoque user-first', tone: 'neutral' }
];
