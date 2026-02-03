import { test, expect } from '../fixtures/apiAuth.fixture.js';

test('User opens garage page after api login', async ({ authPage }) => {
  await authPage.goto('/panel/garage');
  await expect(authPage).toHaveURL(/garage/);
});

test('Profile page with mocked user data', async ({ authPage }) => {
  await authPage.route('**/api/users/profile', route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        "data": {
            "userId": 1,
            "photoFilename": "default-user.png",
            "name": "John",
            "lastName": "Dou"
        }
      }),
    })
  );

  await authPage.goto('/panel/profile');

  await expect(authPage.getByText('John Dou')).toBeVisible();
});