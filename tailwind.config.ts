import type { Config } from 'tailwindcss';
import { themeTokens } from './lib/theme';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: themeTokens.colors.background,
        surface: themeTokens.colors.surface,
        surfaceAlt: themeTokens.colors.surfaceAlt,
        foreground: themeTokens.colors.foreground,
        muted: themeTokens.colors.muted,
        primary: {
          DEFAULT: themeTokens.colors.gold,
          foreground: themeTokens.colors.background
        },
        accent: themeTokens.colors.goldSoft
      },
      backgroundImage: {
        'gradient-radial': themeTokens.gradients.backdrop,
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, rgba(80,60,20,0.3), transparent 65%)'
      },
      boxShadow: {
        glow: themeTokens.shadows.glow,
        frosted: themeTokens.shadows.depth
      }
    }
  },
  plugins: []
};

export default config;
