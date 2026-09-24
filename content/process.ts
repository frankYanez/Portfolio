export type ProcessStep = {
  index: string;
  label: string;
  title: string;
  description: string;
  icon: 'idea' | 'design' | 'code' | 'product';
};

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    label: 'Idea',
    title: 'Todo empieza con una pregunta.',
    description: 'Entiendo el problema real: objetivos de negocio, usuarios y restricciones técnicas antes de escribir una línea de código.',
    icon: 'idea'
  },
  {
    index: '02',
    label: 'Diseño',
    title: 'La forma sigue al objetivo.',
    description: 'Wireframes y sistema visual: jerarquía, flujos y componentes reutilizables pensados para escalar.',
    icon: 'design'
  },
  {
    index: '03',
    label: 'Desarrollo',
    title: 'El código que sostiene todo.',
    description: 'Arquitectura mantenible, integraciones reales y despliegues continuos, sin atajos.',
    icon: 'code'
  },
  {
    index: '04',
    label: 'Producto',
    title: 'Una idea, lista para usarse.',
    description: 'Cada decisión conecta la experiencia, el diseño y el código en un producto que usuarios reales usan hoy.',
    icon: 'product'
  }
];
