import { cn } from '@/lib/utils';

export type BadgeTone = 'primary' | 'accent' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/**
 * Badge muestra un resaltado compacto para etiquetas o logros.
 * @param props.tone Define el color del badge.
 */
export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  const tones: Record<BadgeTone, string> = {
    primary: 'bg-primary/15 text-primary shadow-glow',
    accent: 'bg-accent/15 text-accent shadow-glow',
    neutral: 'bg-surfaceAlt text-foreground/90'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors',
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
