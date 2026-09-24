import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

/**
 * Button renderiza un botón accesible con variantes estilizadas para CTAs.
 * @param props.variant Variante visual.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, ...props }, ref) => {
    const styles = {
      primary:
        'bg-gradient-accent text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-primary/70',
      secondary:
        'border border-border/10 bg-surfaceAlt/60 text-foreground shadow-glassSm backdrop-blur-xl hover:-translate-y-0.5 hover:bg-surfaceAlt/90 hover:shadow-glass active:translate-y-0 active:scale-[0.97]',
      ghost:
        'border border-transparent text-foreground hover:-translate-y-0.5 hover:border-border/10 hover:bg-surfaceAlt/60 hover:shadow-glassSm hover:backdrop-blur-xl active:translate-y-0 active:scale-[0.97]'
    } satisfies Record<ButtonVariant, string>;

    const Component = asChild ? Slot : 'button';

    const componentProps = {
      className: cn(
        // Sheen de vidrio: highlight superior duro (::before) + transform para la sensación de "flotar" al hover/press.
        'relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:rounded-t-full before:bg-gradient-to-b before:from-white/35 before:to-transparent before:content-[\'\'] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        styles[variant],
        className
      ),
      ...props
    } as React.ComponentPropsWithoutRef<typeof Component>;

    if (!asChild && !('type' in componentProps)) {
      (componentProps as React.ButtonHTMLAttributes<HTMLButtonElement>).type = 'button';
    }

    return <Component ref={ref} {...componentProps} />;
  }
);

Button.displayName = 'Button';
