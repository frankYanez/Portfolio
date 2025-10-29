import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectsSection } from '@/components/sections/projects-section';

describe('ProjectsSection modal flow', () => {
  it('abre el modal desde la tarjeta y restaura el foco al cerrar', async () => {
    const user = userEvent.setup();
    render(<ProjectsSection />);

    const trigger = screen.getByRole('button', { name: /Plataforma Holo-Commerce/i });
    await user.click(trigger);

    const dialog = await screen.findByRole('dialog', { name: /Plataforma Holo-Commerce/i });
    expect(dialog).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /Cerrar/i });
    expect(document.activeElement).toBe(closeButton);

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(trigger);
  });
});
