'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useCallback, useEffect, useId, useRef, type MouseEvent } from 'react';
import { Button } from './button';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * Modal despliega información ampliada sobre proyectos utilizando portales animados.
 * @param props.open Controla la visibilidad del modal.
 */
export function Modal({ open, onClose, title, description, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<Element | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const descriptionId = description ? `${baseId}-description` : undefined;

  const trapFocus = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusable.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    lastFocusedRef.current = document.activeElement;
    const focusTarget = panelRef.current;
    requestAnimationFrame(() => {
      const focusable = focusTarget?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (focusable ?? focusTarget)?.focus();
    });

    document.addEventListener('keydown', trapFocus);
    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, [open, trapFocus]);

  useEffect(() => {
    if (!open && lastFocusedRef.current instanceof HTMLElement) {
      lastFocusedRef.current.focus();
    }
  }, [open]);

  const handleOverlayMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onMouseDown={handleOverlayMouseDown}
        >
          <motion.div
            ref={panelRef}
            className="glass-panel max-w-3xl overflow-hidden outline-none"
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 32, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: 24, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 200 }}
            tabIndex={-1}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 id={titleId} className="text-2xl font-semibold text-foreground">
                  {title}
                </h3>
                {description ? (
                  <p id={descriptionId} className="mt-2 text-sm text-white/70">
                    {description}
                  </p>
                ) : null}
              </div>
              <Button
                aria-label="Cerrar"
                variant="ghost"
                onClick={onClose}
                className="rounded-full p-2 text-white/70 hover:bg-surfaceAlt/60 hover:text-primary"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 space-y-4 text-sm text-white/80">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
