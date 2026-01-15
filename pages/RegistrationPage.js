import { expect } from '@playwright/test';
import { RegistrationElements } from '../elements/RegistrationElements.js';

export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.el = new RegistrationElements(page);
  }

  async open() {
    await this.page.goto('/');
    await this.el.signUpBtn.click();
    await expect(this.el.modalTitle).toHaveText('Registration');
  }

  async fillForm({ name, lastName, email, password, rePassword }) {
    if (name !== undefined) await this.el.nameInput.fill(name);
    if (lastName !== undefined) await this.el.lastNameInput.fill(lastName);
    if (email !== undefined) await this.el.emailInput.fill(email);
    if (password !== undefined) await this.el.passwordInput.fill(password);
    if (rePassword !== undefined) await this.el.rePasswordInput.fill(rePassword);
  }

  async submit() {
    await this.el.registerBtn.click();
  }

  async disabledSubmit() {
    await expect(this.el.registerBtn).toBeDisabled()
  }

  async expectError(text) {
    await expect(this.page.locator(`text=${text}`)).toBeVisible();
  }
}