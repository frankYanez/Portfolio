export type ServicePackage = {
  id: string;
  icon: 'mobile' | 'web' | 'consulting';
  title: string;
  pitch: string;
  includes: string[];
  stack: string[];
  timeline: string;
  /** Debe coincidir con un valor de contactContent.projectTypes para preseleccionarlo en el formulario. */
  contactType: string;
};

export const packagesContent = {
  eyebrow: 'Servicios',
  title: 'Cómo puedo ayudarte',
  description: 'Tres formas de llevar tu idea a producción. Cada proyecto se cotiza a medida.',
  note: 'Plazos estimados; se ajustan al alcance de cada proyecto.',
};

export const servicePackages: ServicePackage[] = [
  {
    id: 'app-movil',
    icon: 'mobile',
    title: 'App móvil',
    pitch: 'De la idea a la tienda: apps iOS y Android con una sola base de código.',
    includes: [
      'Diseño de flujos y UI en Figma',
      'Desarrollo con React Native + Expo',
      'Backend, auth y datos con Supabase',
      'Publicación en App Store y Google Play',
    ],
    stack: ['React Native', 'Expo', 'Supabase'],
    timeline: '6–10 semanas',
    contactType: 'App móvil',
  },
  {
    id: 'web',
    icon: 'web',
    title: 'Sitio / app web',
    pitch: 'Landings, sitios de marca y plataformas rápidas, accesibles y listas para convertir.',
    includes: [
      'Diseño responsive a medida',
      'Desarrollo con Next.js y React',
      'SEO técnico y Core Web Vitals',
      'Deploy y dominio configurados',
    ],
    stack: ['Next.js', 'React', 'GSAP'],
    timeline: '3–6 semanas',
    contactType: 'Sitio / app web',
  },
  {
    id: 'consultoria',
    icon: 'consulting',
    title: 'Consultoría',
    pitch: 'Una mirada externa sobre tu producto actual para saber qué mejorar primero.',
    includes: [
      'Auditoría de UX y accesibilidad',
      'Revisión de performance y código',
      'Informe con hallazgos priorizados',
      'Plan de acción y acompañamiento',
    ],
    stack: ['UX', 'Performance', 'Automatización'],
    timeline: '1–2 semanas',
    contactType: 'Consultoría',
  },
];
