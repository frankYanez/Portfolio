'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { SoftSkillsSection } from '@/components/sections/soft-skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ServicesSection } from '@/components/sections/services-section';

/**
 * Página principal que compone todas las secciones del landing futurista.
 * @returns Landing page completa.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex flex-col gap-24">
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <SoftSkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
