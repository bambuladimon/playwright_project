import { expect,  } from '@playwright/test';
import { LoginElements } from '../elements/LoginElements.js';
import config from '../playwright.config.js';
const baseURL = config.use.baseURL;

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginEl = new LoginElements(page);
  }

  async open() {
    console.log(baseURL)
    await this.page.goto(baseURL);
    console.log(this.loginEl.signInBtn)
    await this.loginEl.signInBtn.click();
    await expect(this.loginEl.modalTitle).toHaveText('Log in');
  }

  async fillForm(email, password ) {
    console.log('Login fill')
    await this.loginEl.emailInput.fill(email);
    await this.loginEl.passwordInput.fill(password);
  }

  async submit() {
    await this.loginEl.loginBtn.click();
  }

}