import { Page , Locator } from '@playwright/test';

export class LoginPage{
    readonly page : Page ;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameInput = page.locator('#SignIn_username');
        this.passwordInput = page.locator('#SignIn_password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async goto(){
        await this.page.goto('https://qc.atalink.com.vn/sign-in');
    }

    async login(UserName: string, PassWord: string){
        await this.usernameInput.fill(UserName);
        await this.passwordInput.fill(PassWord);
        await Promise.all([
            this.page.waitForNavigation(),
            this.loginButton.click(),
        ]);
    }
}