'use client';
import { Header } from '@/components/header';
import { ViewportGlass } from '@/components/ui/viewport-glass';
import { Footer } from '@/components/footer';
import { TechCarousel } from '@/components/sections/tech-carousel';
import { HeroSection } from '@/components/sections/hero-section';
import { EducationSection } from '@/components/sections/education-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ServicesSection } from '@/components/sections/services-section';
import { HireCtaSection } from '@/components/sections/hire-cta-section';
import { PackagesSection } from '@/components/sections/packages-section';

/**
 * Página principal que compone todas las secciones del landing futurista.
 * @returns Landing page completa.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <ViewportGlass />
      <main className="flex flex-col gap-6 sm:gap-8">
        <HeroSection />
        <TechCarousel />
        <div id="proyectos">
          <ServicesSection />
          <ProjectsSection />
        </div>
        <ProcessSection />
        <PackagesSection />
        <EducationSection />
        <TimelineSection />
        <HireCtaSection />
        <ContactSection />
      </main>
      <div className="pb-16 sm:pb-20"><Footer /></div>
    </div>
  );
}
