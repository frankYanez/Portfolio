export type Study = {
  title: string;
  institution: string;
  period: string;
  status: 'En curso' | 'Finalizado';
  description: string;
  kind: 'degree' | 'certification';
  highlights: string[];
};

export const education: Study[] = [
  {
    title: 'Tecnicatura en Desarrollo de Aplicaciones Web',
    institution: 'Universidad Nacional del Centro de la Prov. de Buenos Aires (UNICEN)',
    period: '2023 — Actualidad',
    status: 'En curso',
    description: 'Formación universitaria en desarrollo web: arquitectura de software, bases de datos y programación aplicada.',
    kind: 'degree',
    highlights: ['Arquitectura de software', 'Bases de datos', 'Programación aplicada']
  },
  {
    title: 'Capacitación QA Automation',
    institution: 'Globant',
    period: '2023',
    status: 'Finalizado',
    description: 'Automatización de pruebas y control de calidad en ciclos de desarrollo ágil.',
    kind: 'certification',
    highlights: ['Testing automatizado', 'Agile']
  },
  {
    title: 'Desarrollador Web',
    institution: 'CoderHouse',
    period: '2022',
    status: 'Finalizado',
    description: 'Fundamentos de desarrollo web full stack: JavaScript, bases de datos y APIs REST.',
    kind: 'certification',
    highlights: ['JavaScript', 'APIs REST']
  },
  {
    title: 'Licenciatura en Turismo',
    institution: 'UNICEN',
    period: '2014',
    status: 'Finalizado',
    description: 'Formación en gestión de proyectos, análisis de mercado y trato con clientes.',
    kind: 'degree',
    highlights: ['Gestión de proyectos', 'Trato con clientes']
  }
];
