import { render, screen } from '@testing-library/react';
import { FuturisticBackground } from '@/components/backgrounds/futuristic-background';

describe('FuturisticBackground', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('respeta prefers-reduced-motion', () => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: query.includes('prefers-reduced-motion'),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }));

    render(<FuturisticBackground />);
    expect(screen.getByTestId('reduced-motion-overlay')).toBeInTheDocument();
  });
});
