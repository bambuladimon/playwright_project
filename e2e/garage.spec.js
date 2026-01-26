import { test, expect } from '../fixtures/userGaragePage.fixture';

test('User can see Add car button in garage', async ({ userGaragePage }) => {
  await expect(userGaragePage.addCarButton).toBeVisible();
});