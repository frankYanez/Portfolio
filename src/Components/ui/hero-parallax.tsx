'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

export type HeroParallaxItem = {
  title: string;
  href: string;
  category?: string;
  description?: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: HeroParallaxItem[];
  className?: string;
};

const rowVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function ParallaxCard({
  item,
  priority,
}: {
  item: HeroParallaxItem;
  priority?: boolean;
}) {
  return (
    <Link
      href={item.thumbnail}
      className="group relative flex h-72 w-72 flex-none flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 shadow-[0_20px_60px_-40px_rgba(56,189,248,0.35)] backdrop-blur transition-transform duration-500 hover:-translate-y-6 hover:border-primary/60 hover:shadow-[0_30px_80px_-40px_rgba(129,140,248,0.65)]"
      aria-label={`${item.title} — ${item.category}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02]"
        aria-hidden="true"
      />
      <div className="relative h-40 w-full overflow-hidden rounded-2xl">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 80vw, 18rem"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-lg ring-1 ring-white/10">
          {item.category}
        </span>
      </div>
      <div className="relative mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-white/60">{item.description}</p>
      </div>
      <span className="relative mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
        Explorar
        <svg
          className="h-3 w-3 transition-transform group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5 10.75a.75.75 0 0 1 0-1.5h7.19l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5Z" />
        </svg>
      </span>
    </Link>
  );
}

export function HeroParallax({ products, className }: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const firstRowX = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);
  const secondRowX = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const thirdRowX = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  const rows = useMemo(() => {
    const first: HeroParallaxItem[] = [];
    const second: HeroParallaxItem[] = [];
    const third: HeroParallaxItem[] = [];

    products.forEach((item, index) => {
      if (index % 3 === 0) first.push(item);
      else if (index % 3 === 1) second.push(item);
      else third.push(item);
    });

    return { first, second, third };
  }, [products]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative isolate overflow-hidden rounded-[3rem] border border-white/10 bg-black/30 px-4 py-16 backdrop-blur-xl sm:px-10',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-12 -top-32 h-56 rounded-full bg-gradient-to-b from-primary/30 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.5em] text-primary/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Portafolio inmersivo
        </motion.p>
        <motion.h2
          className="text-3xl font-semibold text-white sm:text-4xl"
          initial="initial"
          whileInView="animate"
          variants={rowVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Casos donde la automatización, el desarrollo web y las apps se conectan
        </motion.h2>
        <motion.p
          className="text-base text-white/60"
          initial="initial"
          whileInView="animate"
          variants={rowVariants}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Cada pieza acelera flujos, reduce errores manuales y crea experiencias digitales
          que evolucionan con el negocio.
        </motion.p>
      </div>
      <div className="mt-14 space-y-8 overflow-hidden">
        <motion.div
          style={{ x: firstRowX }}
          className="flex min-w-max gap-6"
          initial="initial"
          whileInView="animate"
          variants={rowVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        ></motion.div>
        <motion.div
          style={{ x: secondRowX }}
          className="flex min-w-max gap-6"
          initial="initial"
          whileInView="animate"
          variants={rowVariants}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
        >
          {rows.second.map((item, index) => (
            <ParallaxCard key={`${item.title}-${index}`} item={item} />
          ))}
        </motion.div>
        <motion.div
          style={{ x: thirdRowX }}
          className="flex min-w-max gap-6"
          initial="initial"
          whileInView="animate"
          variants={rowVariants}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          {rows.third.map((item, index) => (
            <ParallaxCard key={`${item.title}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
