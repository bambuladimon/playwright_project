import { test as base } from '@playwright/test';
import { GaragePage } from '../pages/GaragePage.js';

export const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'storage/user.json',
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);

    await page.goto('/panel/garage');

    await use(garagePage);
  },
});

export { expect } from '@playwright/test';