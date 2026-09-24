import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LiquidTileProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-14 w-14 rounded-2xl [&_svg]:h-6 [&_svg]:w-6',
  md: 'h-20 w-20 rounded-3xl [&_svg]:h-8 [&_svg]:w-8',
  lg: 'h-28 w-28 rounded-[2rem] [&_svg]:h-11 [&_svg]:w-11',
} as const;

/**
 * LiquidTile: cuadrado de vidrio líquido (asset decorativo del sistema) con ícono en acento.
 * Decorativo: siempre aria-hidden.
 */
export function LiquidTile({ icon: Icon, size = 'md', className }: LiquidTileProps) {
  return (
    <span aria-hidden="true" className={cn('liquid-tile', sizes[size], className)}>
      <Icon className="text-accent" strokeWidth={1.75} />
    </span>
  );
}
