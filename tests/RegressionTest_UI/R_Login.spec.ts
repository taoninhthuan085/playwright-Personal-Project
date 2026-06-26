import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/Log_in_Page';


//storageState is off
test.use({
  storageState: { cookies: [], origins: [] }
});

test('TC_LOGIN_002: Log in successfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login(process.env.ADMIN_USER!,process.env.ADMIN_PASS!);
    await expect(page).toHaveURL(
        /.*news$/,
        { timeout: 30000 }
    );

})
test('TC_LOGIN_004: Log in with email and wrong password', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11@gmail.com','bbbbbbb');
    await expect(page.getByText('Email hoặc mật khẩu không đúng. Vui lòng thử lại.')).toBeVisible();

})

test('TC_LOGIN_009: Log out successfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await Promise.all([
        page.waitForNavigation(),
        loginpage.login('quynhtvn11+11@gmail.com','Thaytoo02')
    ]);
    await page.goto('/my-profile');
    await page.getByText('Đăng xuất').click();
    await expect(page).toHaveURL(/.*sign-in$/);
})
