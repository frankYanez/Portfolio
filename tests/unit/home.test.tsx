import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { heroContent } from '@/content/hero';

describe('HomePage', () => {
  it('renderiza headings principales', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: heroContent.name })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Proyectos destacados/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Experiencia/i })).toBeInTheDocument();
  });
});
