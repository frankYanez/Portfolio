'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type FocusCardMetric = {
  label: string;
  value: string;
};

export type FocusCardItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
  image: string;
  metrics: FocusCardMetric[];
};

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function FocusCards({ cards }: { cards: FocusCardItem[] }) {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
      {cards.map((card, index) => (
        <motion.article
          key={card.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-black/30 to-black/70 p-8 shadow-[0_40px_120px_-60px_rgba(56,189,248,0.55)] transition-all duration-500"
          initial="initial"
          whileInView="animate"
          variants={cardVariants}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -12, scale: 1.01 }}
        >
          <div className="absolute inset-0 opacity-40 transition duration-500 group-hover:opacity-60">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 90vw, 22rem"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-70">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.45),transparent_55%)]" />
          </div>
          <div className="relative flex h-full flex-col gap-6">
            <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              {card.badge}
            </span>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{card.description}</p>
            </div>
            <dl className="grid gap-3 text-sm text-white/60">
              {card.metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                  <dt className="text-xs uppercase tracking-widest text-white/50">{metric.label}</dt>
                  <dd className="text-sm font-semibold text-white">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={card.href}
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
            >
              Ver caso
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.22 5.22a.75.75 0 0 1 1.06 0L14 12.94V8.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h4.19L5.22 6.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
