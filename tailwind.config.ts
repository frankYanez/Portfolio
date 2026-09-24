import type { Config } from 'tailwindcss';

const withOpacity = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: withOpacity('--color-background'),
        surface: withOpacity('--color-surface'),
        surfaceAlt: withOpacity('--color-surface-alt'),
        foreground: withOpacity('--color-foreground'),
        muted: withOpacity('--color-muted'),
        border: withOpacity('--color-border'),
        primary: {
          DEFAULT: withOpacity('--color-accent'),
          foreground: withOpacity('--color-accent-foreground')
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          soft: withOpacity('--color-accent-soft')
        }
      },
      backgroundImage: {
        'gradient-radial': 'var(--gradient-backdrop)',
        'gradient-accent': 'var(--gradient-accent)'
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        glass: 'var(--shadow-glass-lg)',
        glassSm: 'var(--shadow-glass-sm)'
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 48s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
