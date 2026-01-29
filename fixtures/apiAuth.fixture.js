import { test as base, expect, request } from '@playwright/test';

export const test = base.extend({
  apiContext: async ({}, use) => {
    // 1️⃣ створюємо APIRequestContext
    const apiContext = await request.newContext({
      baseURL: 'https://qauto.forstudy.space',
    });

    // 2️⃣ API login
    const response = await apiContext.post('/api/auth/signin', {
      data: {
        email: 'bambula.dimon23@gmail.com',
        password: 'QWE123qwe',
      },
    });

    expect(response.ok()).toBeTruthy();

    await use(apiContext);

    await apiContext.dispose();
  },

  authPage: async ({ apiContext, browser }, use) => {
    // 3️⃣ беремо storageState з API
    const storageState = await apiContext.storageState();

    // 4️⃣ створюємо browser context
    const context = await browser.newContext({ storageState });
    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect };