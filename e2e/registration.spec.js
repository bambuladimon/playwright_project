import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage.js';
import { randomEmail } from '../utils/random.js';
import { validUser } from '../fixtures/testData.js';

test.describe('Registration form', () => {

  test.beforeEach(async ({ page }) => {
    const regPage = new RegistrationPage(page);
    await regPage.open();
  });

  test('Successful registration with valid data', async ({ page }) => {
    const regPage = new RegistrationPage(page);

    await regPage.fillForm({
      ...validUser,
      rePassword: validUser.password,
    });

    await regPage.submit();

    await expect(page.locator('h1')).toHaveText('Garage');;
  });

  test('Empty Name field', async ({ page }) => {
    const regPage = new RegistrationPage(page);

    await regPage.fillForm({
        lastName: 'Doe',
        email: randomEmail(),
        password: 'Test1234',
        rePassword: 'Test1234',
    });

    await regPage.disabledSubmit();
  });

  test('Name shorter than 2 characters', async ({ page }) => {
    const regPage = new RegistrationPage(page);

    await regPage.fillForm({
      name: 'A',
      lastName: 'Doe',
      email: randomEmail(),
      password: 'Test1234',
      rePassword: 'Test1234',
    });

    await regPage.disabledSubmit();
  });

  test('Invalid Email format', async ({ page }) => {
    const regPage = new RegistrationPage(page);

    await regPage.fillForm({
      name: 'John',
      lastName: 'Doe',
      email: 'wrong-email',
      password: 'Test1234',
      rePassword: 'Test1234',
    });

    await regPage.disabledSubmit();
  });

  test('Negative: passwords do not match', async ({ page }) => {
    const regPage = new RegistrationPage(page);

    await regPage.fillForm({
      name: 'John',
      lastName: 'Doe',
      email: randomEmail(),
      password: 'Test1234',
      rePassword: 'Test12345',
    });

    await regPage.disabledSubmit();
  });

});