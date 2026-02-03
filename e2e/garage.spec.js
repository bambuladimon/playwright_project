import { test, expect } from '../fixtures/userGaragePage.fixture';

test('user can see garage page', async ({ userGaragePage }) => {
  await userGaragePage.isOpened();
});