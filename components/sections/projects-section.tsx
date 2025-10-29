'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Cpu, Orbit } from 'lucide-react';
import { projects } from '@/content/projects';
import { reveal } from '@/lib/animations';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectModal } from '@/components/projects/project-modal';

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

  const project = useMemo(
    () => (typeof selectedProject === 'number' ? projects[selectedProject] : null),
    [selectedProject]
  );

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
          {/* Los datos provienen de content/projects.ts para actualizar tarjetas y modal en un solo lugar. */}
          {projects.map((item, index) => {
            const Icon = projectIcons[item.icon];

            return (
              <motion.div key={item.title} {...reveal('up')}>
                <ProjectCard project={item} Icon={Icon} onOpen={() => openProject(index)} />
              </motion.div>
            );
          })}
        </div>
      </div>
      {project ? (
        <ProjectModal project={project} open={selectedProject !== null} onClose={closeProject} />
      ) : null}
    </section>
  );
}
