import { themeTokens, shadowTokens } from '@/lib/theme';

describe('theme tokens', () => {
  it('usa la paleta blanco + negro + violeta', () => {
    expect(themeTokens.light.background).toBe('255 255 255');
    expect(themeTokens.light.foreground).toBe('10 10 10');
    expect(themeTokens.light.accent).toBe('124 58 237');
  });

  it('define la variante oscura invirtiendo fondo/texto', () => {
    expect(themeTokens.dark.background).toBe('10 10 10');
    expect(themeTokens.dark.foreground).toBe('245 245 247');
  });

  it('expone sombras coherentes con el acento violeta', () => {
    expect(shadowTokens.glow).toContain('124 58 237');
    expect(shadowTokens.glowDark).toContain('167 139 250');
  });
});
