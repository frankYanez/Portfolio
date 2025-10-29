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
        'bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_28px_rgba(240,198,116,0.45)] focus-visible:ring-2 focus-visible:ring-primary/70',
      secondary:
        'border border-accent/30 bg-surfaceAlt/60 text-foreground hover:bg-surfaceAlt/80',
      ghost: 'text-foreground hover:text-primary hover:bg-surfaceAlt/60'
    } satisfies Record<ButtonVariant, string>;

    const Component = asChild ? Slot : 'button';

    const componentProps = {
      className: cn(
        'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
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
