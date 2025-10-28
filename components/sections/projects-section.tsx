'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Cpu, ExternalLink, Orbit } from 'lucide-react';
import { projects } from '@/content/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { reveal } from '@/lib/animations';

const projectIcons = {
  cpu: Cpu,
  orbit: Orbit,
  'circuit-board': CircuitBoard
} as const;

/**
 * ProjectsSection destaca trabajos clave con tarjetas y modal descriptivo.
 * @returns Lista de proyectos con animaciones y CTA.
 */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProject = (index: number) => setSelectedProject(index);
  const closeProject = () => setSelectedProject(null);

  const project = typeof selectedProject === 'number' ? projects[selectedProject] : null;

  return (
    <section id="proyectos" aria-labelledby="projects-title" className="py-24">
      <div className="section-container">
        <motion.div {...reveal('up')} className="max-w-2xl">
          <h2 id="projects-title" className="text-3xl font-semibold text-white">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-white/70">
            TODO: Texto inspirador resaltando impacto, métricas y colaboración.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((item, index) => {
            const Icon = projectIcons[item.icon];

            return (
              <motion.div key={item.title} {...reveal('up')}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accentGradient} opacity-70`} />
                    <div className="relative flex h-full items-center justify-center">
                      <Icon className="h-16 w-16 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} tone="neutral">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-3">
                      <Button variant="primary" onClick={() => openProject(index)}>
                        Detalles
                      </Button>
                      {item.href ? (
                        <Button variant="ghost" asChild>
                          <a href={item.href} target="_blank" rel="noreferrer">
                            Visitar
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      {project ? (
        <Modal
          open={selectedProject !== null}
          onClose={closeProject}
          title={project.title}
          description={project.description}
        >
          <p>{project.modalContent}</p>
        </Modal>
      ) : null}
    </section>
  );
}
