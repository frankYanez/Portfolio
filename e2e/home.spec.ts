import { test, expect } from '@playwright/test';

test.describe('Landing futurista', () => {
  test('navega por anclas y secciones visibles', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await page.locator('a[href="#proyectos"]').first().click();
    await expect(page.locator('#proyectos')).toBeVisible();
    await page.locator('a[href="#contacto"]').first().click();
    await expect(page.locator('#contacto')).toBeVisible();
    await page.locator('button[aria-label*="Plataforma Holo-Commerce"]').first().click();
    await expect(page.getByRole('dialog', { name: /Plataforma Holo-Commerce/i })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('[role="dialog"]')).toHaveCount(0);
  });
});
