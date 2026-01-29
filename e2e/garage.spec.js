import { test, expect } from '../fixtures/apiAuth.fixture.js';

test('user opens garage page after api login', async ({ authPage }) => {
  await authPage.goto('/panel/garage');
  await expect(authPage).toHaveURL(/garage/);
  await expect(authPage.getByRole('button', { name: 'Add car' })).toBeVisible();
});
