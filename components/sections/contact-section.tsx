'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { CONTACT_TYPE_EVENT, contactContent, type ContactChannel } from '@/content/contact';
import { Button } from '@/components/ui/button';
import { inOutViewport, reveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

const channelIcons: Record<ContactChannel['icon'], typeof Mail> = {
  mail: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

const fieldClass =
  'w-full rounded-2xl border border-border/10 bg-surface/60 px-4 py-3 text-sm text-foreground shadow-[inset_0_1.5px_2px_rgb(10_10_10/0.06)] outline-none backdrop-blur-xl transition placeholder:text-muted/70 focus:border-accent/50 focus:ring-4 focus:ring-accent/15';

/**
 * ContactSection: canales directos (con copiar email) + formulario glass que arma
 * un correo pre-completado en el cliente del visitante (sin backend).
 */
export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState<string>(contactContent.projectTypes[0]);

  useEffect(() => {
    const onType = (event: Event) => {
      const type = (event as CustomEvent<string>).detail;
      if (contactContent.projectTypes.includes(type)) setProjectType(type);
    };
    window.addEventListener(CONTACT_TYPE_EVENT, onType);
    return () => window.removeEventListener(CONTACT_TYPE_EVENT, onType);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactContent.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactContent.email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const replyTo = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = `${projectType} · ${name}`;
    const body = `${message}\n\n—\n${name}\n${replyTo}`;
    window.location.href = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" aria-labelledby="contact-title" className="relative isolate overflow-x-clip py-10 sm:py-12">
      <div
        className="section-glow"
        style={{ backgroundImage: 'radial-gradient(circle at 12% 30%, rgb(167 139 250 / 0.12), transparent 50%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <motion.div {...reveal('up')} className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{contactContent.eyebrow}</span>
            <h2 id="contact-title" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              {contactContent.title}
            </h2>
            <p className="max-w-md text-muted">{contactContent.description}</p>
          </motion.div>

          <ul className="flex flex-col gap-3">
            {contactContent.channels.map((channel, index) => {
              const Icon = channelIcons[channel.icon];
              const isEmail = channel.icon === 'mail';
              return (
                <motion.li
                  key={channel.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inOutViewport}
                  transition={{ duration: 0.6, delay: 0.06 * index, ease: [0.22, 0.61, 0.36, 1] }}
                  className="glass-chip group relative flex items-center gap-4 rounded-2xl p-3 pr-4 transition hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href={channel.href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noreferrer'}
                    className="min-w-0 flex-1 text-foreground no-underline after:absolute after:inset-0 hover:text-foreground"
                  >
                    <span className="block text-sm font-semibold">{channel.label}</span>
                    <span className="block truncate text-xs text-muted">{channel.handle}</span>
                  </a>
                  {isEmail ? (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="relative z-10 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border/10 bg-surface/70 px-3.5 py-2 text-xs font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
                      aria-live="polite"
                    >
                      {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                      {copied ? 'Copiado' : 'Copiar'}
                    </button>
                  ) : (
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.form
          {...reveal('right')}
          onSubmit={handleSubmit}
          className="glass-panel flex flex-col gap-5 !p-6 sm:!p-8"
          aria-labelledby="contact-form-title"
        >
          <div className="space-y-1">
            <h3 id="contact-form-title" className="text-xl font-semibold text-foreground">
              Cuéntame tu idea
            </h3>
            <p className="text-sm text-muted">Tres datos y lo seguimos por correo.</p>
          </div>

          <fieldset className="space-y-2.5">
            <legend className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">¿Qué necesitas?</legend>
            <div className="flex flex-wrap gap-2">
              {contactContent.projectTypes.map((type) => {
                const selected = type === projectType;
                return (
                  <label
                    key={type}
                    className={cn(
                      'inline-flex min-h-10 cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-semibold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent',
                      selected
                        ? 'border-transparent bg-gradient-accent text-primary-foreground shadow-glow'
                        : 'border-border/10 bg-surfaceAlt/60 text-foreground hover:border-accent/40'
                    )}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={selected}
                      onChange={() => setProjectType(type)}
                      className="sr-only"
                    />
                    {type}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-foreground">Nombre</span>
              <input name="name" required autoComplete="name" placeholder="Tu nombre" className={fieldClass} />
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-semibold text-foreground">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@email.com"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="space-y-1.5">
            <span className="text-xs font-semibold text-foreground">Mensaje</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Objetivo, plazos, presupuesto aproximado…"
              className={cn(fieldClass, 'resize-none')}
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="primary" className="justify-center">
              Enviar mensaje
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-xs text-muted">Se abre tu correo con el mensaje listo.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
