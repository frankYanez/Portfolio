import { ProjectGallery } from '@/components/showcase/project-gallery';
import { mobileShowcase } from '@/content/showcase';

export function ServicesSection() {
  return <ProjectGallery id="servicios" label="APPS MÓVILES" title="Ideas que ya viven en tus manos." subtitle="Bosko, Línea BQ y Thora. Tres productos, tres formas de conectar a las personas." device="iphone" projects={mobileShowcase} />;
}
