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
    title: 'TODO: Plataforma Holo-Commerce',
    description:
      'TODO: Resumen del proyecto estrella con enfoque en conversión, animaciones y performance.',
    tags: ['TODO: Next.js', 'TODO: Edge', 'TODO: A/B Testing'],
    accentGradient: 'from-cyan-400 via-fuchsia-500 to-violet-600',
    icon: 'cpu',
    href: 'https://todo-proyecto-1.dev',
    modalContent:
      'TODO: Detalles ampliados del proyecto, métricas clave, aprendizajes y desafíos superados.',
    techStack: ['TODO: Next.js', 'TODO: Stripe', 'TODO: WebGL'],
    links: [
      { label: 'Repositorio', href: 'https://github.com/todo/holo-commerce' },
      { label: 'Demo', href: 'https://todo-proyecto-1.dev' }
    ],
    video: {
      src: '/media/todo-holo-commerce.mp4',
      type: 'video/mp4',
      poster:
        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22 viewBox=%220 0 640 360%22%3E%3Crect width=%22640%22 height=%22360%22 fill=%22%23000000%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23f0c674%22 font-size=%2224%22 font-family=%22sans-serif%22 text-anchor=%22middle%22%3ETODO:%20Video%20proyecto%201%3C/text%3E%3C/svg%3E'
    }
  },
  {
    title: 'TODO: Experiencia XR educativa',
    description: 'TODO: Cómo se diseñó una interfaz inmersiva para educación y accesibilidad.',
    tags: ['TODO: React', 'TODO: WebXR', 'TODO: Inclusión'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'orbit',
    modalContent:
      'TODO: Historia del producto, rol desempeñado, tecnologías clave y resultados cuantificables.',
    techStack: ['TODO: React Three Fiber', 'TODO: GraphQL', 'TODO: Figma'],
    links: [
      { label: 'Repositorio', href: 'https://github.com/todo/experiencia-xr' }
    ],
    video: {
      src: '/media/todo-experiencia-xr.mp4',
      type: 'video/mp4',
      poster:
        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22 viewBox=%220 0 640 360%22%3E%3Crect width=%22640%22 height=%22360%22 fill=%22%23000000%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23f0c674%22 font-size=%2224%22 font-family=%22sans-serif%22 text-anchor=%22middle%22%3ETODO:%20Video%20proyecto%202%3C/text%3E%3C/svg%3E'
    }
  },
  {
    title: 'TODO: Dashboard cuántico',
    description: 'TODO: Observabilidad avanzada para flotas de dispositivos inteligentes.',
    tags: ['TODO: TypeScript', 'TODO: D3.js', 'TODO: UX Research'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    modalContent:
      'TODO: Profundiza en decisiones de diseño, arquitectura técnica y feedback de usuarios.',
    techStack: ['TODO: Next.js', 'TODO: d3', 'TODO: Storybook'],
    links: [
      { label: 'Repositorio', href: 'https://github.com/todo/dashboard-cuantico' }
    ],
    video: {
      src: '/media/todo-dashboard-cuantico.mp4',
      type: 'video/mp4',
      poster:
        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%23360%22 viewBox=%220 0 640 360%22%3E%3Crect width=%22640%22 height=%22360%22 fill=%22%23000000%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23f0c674%22 font-size=%2224%22 font-family=%22sans-serif%22 text-anchor=%22middle%22%3ETODO:%20Video%20proyecto%203%3C/text%3E%3C/svg%3E'
    }
  }
];
