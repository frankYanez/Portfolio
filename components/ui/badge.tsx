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
    primary: 'bg-primary/20 text-primary shadow-glow',
    accent: 'bg-accent/20 text-accent shadow-glow',
    neutral: 'bg-white/10 text-foreground'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
