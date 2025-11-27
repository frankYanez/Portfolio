export type TestimonialContent = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const testimonials: TestimonialContent[] = [
  {
    quote:
      'Francisco transformó nuestra operación de soporte: automatizó clasificación de tickets, documentó procesos y lanzó dashboards que nos permiten anticiparnos a los problemas. Su mezcla de diseño y código es difícil de encontrar.',
    name: 'Valeria Muñoz',
    designation: 'COO · RocketOps',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=900&auto=format&fit=crop',
  },
  {
    quote:
      'Trabajar con Francisco es garantía de foco en métricas. Entiende negocio, diseña experiencias claras y entrega código limpio. Nuestra conversión subió 40% después del rediseño del funnel.',
    name: 'Andrés Figueroa',
    designation: 'Director de Producto · Lunaris Lab',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop',
  },
  {
    quote:
      'Orquestó integraciones con CRM, automatizó seguimientos y nos dejó un sistema documentado. En dos sprints pasamos de caos a un proceso predecible.',
    name: 'Lucía Ortega',
    designation: 'Head of Growth · Bruma',
    src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop',
  },
];
