export class RegistrationElements {
  constructor(page) {
    this.signUpBtn = page.locator('button:has-text("Sign up")');
    this.registerBtn = page.locator('button:has-text("Register")');

    this.nameInput = page.locator('#signupName');
    this.lastNameInput = page.locator('#signupLastName');
    this.emailInput = page.locator('#signupEmail');
    this.passwordInput = page.locator('#signupPassword');
    this.rePasswordInput = page.locator('#signupRepeatPassword');

    this.modalTitle = page.locator('.modal-title');
  }
}