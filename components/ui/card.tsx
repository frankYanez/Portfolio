import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Card aplica estilo de glassmorphism para agrupar contenido relacionado.
 * @param props.children Elementos renderizados dentro del card.
 */
export function Card({ className, ...props }: CardProps) {
  return <div className={cn('glass-panel', className)} {...props} />;
}
