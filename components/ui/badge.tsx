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
    primary: 'border-accent/20 bg-primary/15 text-primary shadow-glow',
    accent: 'border-accent/20 bg-accent/15 text-accent shadow-glow',
    neutral: 'border-border/10 bg-surfaceAlt/60 text-foreground/90 shadow-glassSm'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-xl transition-colors',
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
