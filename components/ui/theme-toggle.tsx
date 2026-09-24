'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export interface ThemeToggleProps {
  className?: string;
  /** Fuerza estilo claro (texto/borde oscuros) para cuando flota sobre una imagen clara fija, sin importar el tema activo. */
  forceLight?: boolean;
}

/**
 * ThemeToggle alterna entre modo claro y oscuro. Evita mismatch de hidratación
 * renderizando un placeholder hasta montar en cliente.
 */
export function ThemeToggle({ className, forceLight }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn('h-10 w-10 rounded-full', className)} aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={cn(
        'glass-chip flex h-10 w-10 items-center justify-center rounded-full transition hover:border-accent/40 hover:text-primary active:scale-[0.96]',
        forceLight ? 'border-black/10 bg-white/50 text-neutral-900' : 'text-foreground',
        className
      )}
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}
