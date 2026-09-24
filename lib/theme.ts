/**
 * Design tokens — fuente única de verdad para el tema claro/oscuro.
 * Los valores son triples RGB (sin `rgb()`) para poder usarlos en Tailwind
 * con el patrón `rgb(var(--token) / <alpha-value>)` y así soportar opacidad.
 */
export const themeTokens = {
  light: {
    background: '255 255 255',
    surface: '255 255 255',
    surfaceAlt: '246 246 248',
    foreground: '10 10 10',
    muted: '110 110 118',
    border: '10 10 10',
    accent: '124 58 237',
    accentSoft: '167 139 250',
    accentForeground: '255 255 255'
  },
  dark: {
    background: '10 10 10',
    surface: '20 20 20',
    surfaceAlt: '30 30 32',
    foreground: '245 245 247',
    muted: '154 154 162',
    border: '255 255 255',
    accent: '167 139 250',
    accentSoft: '196 181 253',
    accentForeground: '10 10 10'
  }
} as const;

export const shadowTokens = {
  glow: '0 0 40px rgb(124 58 237 / 0.25)',
  glowDark: '0 0 40px rgb(167 139 250 / 0.3)',
  glass: '0 8px 32px rgb(10 10 10 / 0.06)',
  glassDark: '0 8px 32px rgb(0 0 0 / 0.5)'
} as const;

export const gradientTokens = {
  backdrop:
    'radial-gradient(circle at 15% 10%, rgb(124 58 237 / 0.10), transparent 55%), radial-gradient(circle at 85% 25%, rgb(167 139 250 / 0.10), transparent 55%)',
  backdropDark:
    'radial-gradient(circle at 15% 10%, rgb(167 139 250 / 0.16), transparent 55%), radial-gradient(circle at 85% 25%, rgb(124 58 237 / 0.14), transparent 55%)',
  accent: 'linear-gradient(135deg, rgb(124 58 237), rgb(167 139 250))'
} as const;

export type ThemeTokens = typeof themeTokens;
