import { themeTokens } from '@/lib/theme';

describe('theme tokens', () => {
  it('usa la paleta dorado + negro', () => {
    expect(themeTokens.colors.background).toBe('#050505');
    expect(themeTokens.colors.surfaceAlt).toBe('#222222');
    expect(themeTokens.colors.gold).toBe('#f0c674');
  });

  it('expone sombras coherentes', () => {
    expect(themeTokens.shadows.glow).toContain('rgba(240, 198, 116');
  });
});
