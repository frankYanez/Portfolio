"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialContent } from "@/content/testimonials";

type AnimatedTestimonialsProps = {
  testimonials: TestimonialContent[];
  autoplay?: boolean;
};

const spring = { type: "spring", stiffness: 120, damping: 16 };

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(handleNext, 5500);
    return () => clearInterval(timer);
  }, [autoplay, active]);

  const activeItem = testimonials[active];

  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.04] px-6 py-12 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)] sm:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,0.2),transparent_25%)]" />
      <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 -rotate-6 rounded-3xl border border-white/5 bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-6 h-48 w-48 rotate-6 rounded-full bg-gradient-to-br from-primary/25 to-cyan-400/25 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(129,140,248,0.25)]" aria-hidden="true" />
            Testimonios
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Lo que dicen los equipos con los que construyo
            </h3>
            <p className="text-base text-white/70 sm:text-lg">
              Colaboraciones con foco en métricas, entregas rápidas y experiencias que se sienten pulidas en cualquier dispositivo.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/15"
              aria-label="Testimonio anterior"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/15"
              aria-label="Testimonio siguiente"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur">
              <span className="text-sm text-white">{active + 1}</span> / {testimonials.length}
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/70 via-indigo-400/70 to-cyan-300/70 transition-all duration-500"
              style={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-[4/3] w-full" style={{ perspective: "1400px" }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeItem.name}
                initial={{ opacity: 0, rotateY: direction === 1 ? -12 : 12, z: -80, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: direction === 1 ? 12 : -12, z: 80, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative h-full w-full origin-center rounded-3xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-2xl" aria-hidden="true" />
                <div className="absolute -left-6 -top-6 h-20 w-20 rounded-3xl border border-white/10 bg-white/10 blur-2xl" aria-hidden="true" />
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_35px_100px_-50px_rgba(0,0,0,1)]"
                  layout
                  transition={spring}
                >
                  <Image
                    src={activeItem.src}
                    alt={activeItem.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    Perfil verificado
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.25)]" aria-hidden="true" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={activeItem.quote}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white shadow-[0_20px_80px_-60px_rgba(0,0,0,1)] backdrop-blur"
            >
              <motion.div className="text-lg leading-relaxed text-white/80 sm:text-xl">
                {activeItem.quote.split(" ").map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.02 * index, duration: 0.18, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-cyan-400/70 text-sm font-bold text-white shadow-[0_10px_40px_-20px_rgba(129,140,248,1)]">
                  {activeItem.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{activeItem.name}</p>
                  <p className="text-sm text-white/60">{activeItem.designation}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
