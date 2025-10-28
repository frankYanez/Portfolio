import { render, screen } from '@testing-library/react';
import { ContactSection } from '@/components/sections/contact-section';

describe('ContactSection', () => {
  it('contiene CTA de correo', () => {
    render(<ContactSection />);
    const button = screen.getByRole('link', { name: /Escríbeme/i });
    expect(button).toHaveAttribute('href');
  });
});
