import { expect} from '@playwright/test';
import { test as setup} from "../Fixtures/Data_fixture.ts";
import dotenv from 'dotenv';


const ADauthFile = 'playwright/.auth/AdminMNM.json';

setup('Logged in', async ({ page , appConfig }) => {
  
  await page.goto('/sign-in');
  console.log(page.url());
  await page.fill('#SignIn_username', appConfig.adminUser);
  await page.fill('#SignIn_password', appConfig.adminPass);
    await Promise.all([
        page.waitForNavigation(),
        page.click('button[type="submit"]')
    ]);

  // Lưu lại trạng thái vào file JSON
  await page.context().storageState({ path: ADauthFile });
});

