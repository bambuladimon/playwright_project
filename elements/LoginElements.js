export class LoginElements {
  constructor(page) {
    this.signInBtn = page.locator('.header_signin');

    this.emailInput = page.locator('#signinEmail');
    this.passwordInput = page.locator('#signinPassword');

    this.loginBtn = page.locator('.modal-footer .btn-primary');
    this.modalTitle = page.locator('.modal-title');
  }
}