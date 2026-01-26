import { test, expect } from '@playwright/test';

test('save authorized storage state', async ({ page }) => {
  await page.goto('/panel/garage');

  // переконуємось, що доступ є
  await expect(page.locator('h1')).toHaveText('Garage');

  await page.context().storageState({
    path: 'storage/user.json',
  });
});