export type ContactChannel = {
  label: string;
  handle: string;
  href: string;
  icon: 'mail' | 'whatsapp' | 'linkedin' | 'github' | 'instagram';
};

const email = 'frankyanez9413@gmail.com';

/** Evento global para preseleccionar el tipo de proyecto del formulario (lo emiten los CTA de Servicios). */
export const CONTACT_TYPE_EVENT = 'contact:type';
const whatsapp = 'https://wa.link/haiipp';

export const hireContent = {
  availability: 'Disponible para nuevos proyectos',
  title: '¿Tienes una idea?',
  titleAccent: 'Llevémosla a producción.',
  description:
    'Diseño y desarrollo productos web y móviles de punta a punta. Elige cómo quieres trabajar conmigo y arrancamos.',
  modes: [
    {
      title: 'Proyecto freelance',
      description: 'Apps web y móviles llave en mano: del prototipo a la tienda.',
      icon: 'rocket',
    },
    {
      title: 'Posición en tu equipo',
      description: 'Full-time o part-time remoto, sumando frontend y mobile a tu squad.',
      icon: 'users',
    },
    {
      title: 'Consultoría',
      description: 'Auditoría de UX, performance y automatización sobre tu producto actual.',
      icon: 'compass',
    },
  ],
  primaryCta: { label: 'Agendar una llamada', href: whatsapp },
  secondaryCta: { label: 'Enviar un mensaje', href: '#contacto' },
} as const;

export const contactContent = {
  eyebrow: 'Contacto',
  title: 'Hablemos de tu próximo proyecto',
  description:
    'Consultorías, proyectos llave en mano o acompañamiento de equipos internos. Si buscas automatizar operaciones, lanzar un producto digital o iterar sobre tu app actual, conversemos.',
  email,
  projectTypes: ['App móvil', 'Sitio / app web', 'Consultoría', 'Oferta laboral', 'Otro'],
  channels: [
    { label: 'Email', handle: email, href: `mailto:${email}`, icon: 'mail' },
    { label: 'WhatsApp', handle: 'Respuesta directa', href: whatsapp, icon: 'whatsapp' },
    {
      label: 'LinkedIn',
      handle: 'frank-yanez-developer',
      href: 'https://www.linkedin.com/in/frank-yanez-developer',
      icon: 'linkedin',
    },
    { label: 'GitHub', handle: 'frankYanez', href: 'https://github.com/frankYanez', icon: 'github' },
    { label: 'Instagram', handle: '@yanez.frank', href: 'https://www.instagram.com/yanez.frank', icon: 'instagram' },
  ] satisfies ContactChannel[],
};
