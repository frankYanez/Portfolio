export const themeTokens = {
  colors: {
    background: '#050505',
    surface: '#1a1a1a',
    surfaceAlt: '#222222',
    foreground: '#f5f2e8',
    muted: '#b1aca0',
    gold: '#f0c674',
    goldSoft: '#d3a94e'
  },
  shadows: {
    glow: '0 0 40px rgba(240, 198, 116, 0.35)',
    depth: '0 35px 120px rgba(0, 0, 0, 0.65)'
  },
  gradients: {
    backdrop:
      'radial-gradient(circle at 20% 20%, rgba(240,198,116,0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(211,169,78,0.16), transparent 60%)'
  }
} as const;

export type ThemeTokens = typeof themeTokens;
