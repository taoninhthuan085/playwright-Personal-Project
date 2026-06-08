import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/Log_in_Page';


test.describe('Parallel', () => { 

     test.describe.configure({ mode: 'parallel' });
    
    test('TC_LOGIN_001: Log in successfully', async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo02');
    await expect(page).toHaveURL('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/news');

    })
    test('TC_LOGIN_006: Log in with email and wrong password', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo0');
    await expect(page.getByText('Email hoặc mật khẩu không đúng. Vui lòng thử lại.')).toBeVisible();

    })
});
test('TC_LOGIN_001: Log in successfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo02');
    await expect(page).toHaveURL('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/news');

})
test('TC_LOGIN_006: Log in with email and wrong password', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo0');
    await expect(page.getByText('Email hoặc mật khẩu không đúng. Vui lòng thử lại.')).toBeVisible();

})

test('TC_LOGIN_009: Log out successfully', async({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await Promise.all([
        page.waitForNavigation(),
        await loginpage.login('quynhtvn11+11@gmail.com','Thaytoo02')
    ]);
    await page.goto('/my-profile');
    await page.getByText('Đăng xuất').click();
    await expect(page).toHaveURL('https://qc.atalink.com.vn/sign-in');
})

test('TC_LOGIN_010: Log in with empty email and password', async({page}) => {
    await page.goto('');
    await page.goto('/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/procurement-categories');
    await expect(page.url()).toContain('/sign-in'); 
})