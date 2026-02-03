import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test('login and save storage state', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open()
  await loginPage.fillForm('bambula.dimon23@gmail.com', 'QWE123qwe');
  await loginPage.submit()

  // перевірка що логін успішний
  //await page.waitForURL('/panel/garage');
  await expect(page).toHaveURL('panel/garage');
  console.log('new file must be added')
  await page.context().storageState({
    path: 'storage/user.json',
  });
});