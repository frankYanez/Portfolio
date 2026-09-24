import { ProjectGallery } from '@/components/showcase/project-gallery';
import { webShowcase } from '@/content/showcase';

export function ProjectsSection() {
  return <ProjectGallery id="webs" label="EXPERIENCIAS WEB" title="Una ventana a cada marca." subtitle="Webs que construí para presentar productos, contar historias y hacer crecer negocios." device="mac" projects={webShowcase} />;
}
