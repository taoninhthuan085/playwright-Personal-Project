import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Log_in_Page';

test('Log in successfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo02');
    await expect(page).toHaveURL('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/news');

})
test('Log in unsuccessfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo0');
    await expect(page.getByText('Email hoặc mật khẩu không đúng. Vui lòng thử lại.')).toBeVisible();

})