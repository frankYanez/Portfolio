import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#05060d',
        foreground: '#f4f6ff',
        primary: {
          DEFAULT: '#7c5cff',
          foreground: '#0b0d1a'
        },
        accent: '#24e1ff'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, rgba(124,92,255,0.35), transparent)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, rgba(36,225,255,0.45), transparent)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,92,255,0.35)',
        frosted: '0 25px 80px rgba(9, 10, 25, 0.65)'
      }
    }
  },
  plugins: []
};

export default config;
