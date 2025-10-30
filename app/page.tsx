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
import FlowingMenu from '@/src/Components/FlowingMenu/FlowingMenu';
import GridMotion from '@/src/Backgrounds/GridMotion/GridMotion';
import { FocusCards } from '@/src/Components/ui/focus-cards';

// note: you'll need to make sure the parent container of this component is sized properly
const cards = [
  {
    title: 'Forest Adventure',
    src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Valley of life',
    src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sala behta hi jayega',
    src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Camping is for pros',
    src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The road not taken',
    src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
/**
 * Página principal que compone todas las secciones del landing futurista.
 * @returns Landing page completa.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col gap-24">
      <Header />
      <main className="flex flex-col gap-24">
        <HeroSection />
        <FocusCards cards={cards} />;
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
