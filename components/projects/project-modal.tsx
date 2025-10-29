'use client';

import type { Project } from '@/content/projects';
import { Modal } from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectVideo } from './project-video';

export interface ProjectModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

/**
 * ProjectModal amplía la información de un proyecto con video, tech stack y enlaces clave.
 */
export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={project.title} description={project.description}>
      <div className="space-y-6 text-sm text-white/80">
        <ProjectVideo video={project.video} title={project.title} />
        <p>{project.modalContent}</p>
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Tech stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} tone="neutral">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        {project.links.length ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.href} variant="secondary" asChild>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
