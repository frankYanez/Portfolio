import type { FocusCardItem } from '@/src/Components/ui/focus-cards';

export const services: FocusCardItem[] = [
  {
    title: 'Automatizaciones inteligentes end-to-end',
    description:
      'Diseño flujos con n8n, Make y agentes personalizados que conectan CRMs, ERPs y herramientas internas. Orquesto datos, disparo notificaciones contextuales y elimino tareas manuales repetitivas.',
    href: '#contacto',
    badge: 'Automatizaciones',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Procesos robotizados', value: '+45' },
      { label: 'Reducción de tiempo operativo', value: '-68%' },
      { label: 'Integraciones activas', value: 'HubSpot · Notion · Slack' },
    ],
  },
  {
    title: 'Experiencias web de alto rendimiento',
    description:
      'Creo productos en Next.js 14 con SEO técnico impecable, accesibilidad AA y despliegues edge. Diseño sistemas de diseño escalables y microinteracciones que refuerzan la narrativa de la marca.',
    href: '#proyectos',
    badge: 'Desarrollo web',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Core Web Vitals', value: '> 92/100' },
      { label: 'Tiempo de salida a producción', value: '2-3 semanas' },
      { label: 'Stack', value: 'Next.js · Tailwind · Vercel' },
    ],
  },
  {
    title: 'Aplicaciones móviles y multiplataforma',
    description:
      'Construyo apps con React Native y Expo enfocadas en escalabilidad, analítica y experiencias fluidas online/offline. Diseño arquitectura modular, autenticación biométrica y despliegues continuos.',
    href: '#proyectos',
    badge: 'Apps',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Usuarios activos mensuales', value: '+30K' },
      { label: 'Lanzamientos en tiendas', value: '6 apps' },
      { label: 'Tecnologías', value: 'React Native · Expo · Supabase' },
    ],
  },
];
