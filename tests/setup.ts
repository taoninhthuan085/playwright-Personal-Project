import { test as setup } from '@playwright/test';

const ADauthFile = 'playwright/.auth/AdminMNM.json';

setup('Logged in', async ({ page }) => {
  await page.goto('https://qc.atalink.com.vn/sign-in');
  await page.fill('#SignIn_username', 'quynhtvn11+11@gmail.com');
  await page.fill('#SignIn_password', 'Thaytoo02');
    await Promise.all([
        page.waitForNavigation(),
        page.click('button[type="submit"]')
    ]);

  // Lưu lại trạng thái vào file JSON
  await page.context().storageState({ path: ADauthFile });
});