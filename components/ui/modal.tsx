'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
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
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="glass-panel max-w-2xl overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 200 }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 id="modal-title" className="text-2xl font-semibold">
                  {title}
                </h3>
                {description ? (
                  <p className="mt-2 text-sm text-white/70">{description}</p>
                ) : null}
              </div>
              <Button
                aria-label="Cerrar"
                variant="ghost"
                onClick={onClose}
                className="rounded-full p-2 text-white/70 hover:text-white"
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
