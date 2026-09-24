export type Tech = {
  name: string;
  /** SVG local en /public/icons (sin depender de un CDN externo). */
  icon: string;
  /** Ícono monocromático negro: se invierte en tema oscuro para que siga visible. */
  mono?: boolean;
};

/** Stack del carrusel, ordenado mobile-first según el CV. */
export const techStack: Tech[] = [
  { name: 'React Native', icon: '/icons/react.svg' },
  { name: 'Expo', icon: '/icons/expo.svg', mono: true },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Next.js', icon: '/icons/nextdotjs.svg', mono: true },
  { name: 'Supabase', icon: '/icons/supabase.svg' },
  { name: 'TanStack Query', icon: '/icons/reactquery.svg' },
  { name: 'Socket.io', icon: '/icons/socketdotio.svg', mono: true },
  { name: 'Tailwind / NativeWind', icon: '/icons/tailwindcss.svg' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
  { name: 'Claude API', icon: '/icons/claude.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Framer Motion', icon: '/icons/framer.svg' },
  { name: 'GSAP', icon: '/icons/greensock.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg', mono: true },
];
