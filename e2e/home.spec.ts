import { test, expect } from '@playwright/test';

test.describe('Landing futurista', () => {
  test('navega por anclas y secciones visibles', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await page.locator('a[href="#proyectos"]').first().click();
    await expect(page.locator('#proyectos')).toBeVisible();
    await page.locator('a[href="#contacto"]').first().click();
    await expect(page.locator('#contacto')).toBeVisible();
  });
});
