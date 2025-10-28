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
      'TODO: Detalles ampliados del proyecto, métricas clave, aprendizajes y desafíos superados.'
  },
  {
    title: 'TODO: Experiencia XR educativa',
    description: 'TODO: Cómo se diseñó una interfaz inmersiva para educación y accesibilidad.',
    tags: ['TODO: React', 'TODO: WebXR', 'TODO: Inclusión'],
    accentGradient: 'from-sky-400 via-purple-500 to-rose-500',
    icon: 'orbit',
    modalContent:
      'TODO: Historia del producto, rol desempeñado, tecnologías clave y resultados cuantificables.'
  },
  {
    title: 'TODO: Dashboard cuántico',
    description: 'TODO: Observabilidad avanzada para flotas de dispositivos inteligentes.',
    tags: ['TODO: TypeScript', 'TODO: D3.js', 'TODO: UX Research'],
    accentGradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    icon: 'circuit-board',
    modalContent:
      'TODO: Profundiza en decisiones de diseño, arquitectura técnica y feedback de usuarios.'
  }
];
