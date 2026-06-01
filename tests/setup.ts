import { expect} from '@playwright/test';
import { test as setup} from "../Fixtures/Data_fixture";
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

// setup('authenticate', async ({ request, page, appConfig }) => {

//   // LOGIN API (Can not us, token undefined) 
//   const response = await request.post('https://qc-api.atalink.com.vn/auth/sign_in', {
//     data: {
//       email: appConfig.adminUser,
//       password: '$2a$10$5xpWOscZ7wuF.6VpC10use0Gc83B6z1InurKDPTTes4g6kHZrCzkm',
//       redirectUrl: '/',
//       remember: false
//     }
//   });
//   // console.log('STATUS:', response.status());
//   // console.log('/n BODY:', await response.text());

//   expect(response.ok()).toBeTruthy();

//   // Nếu API trả token
//   const body = await response.json();
// console.log('token', body);
//   // Gắn token vào browser localStorage
//   await page.goto('/');
  

//   await page.context().addInitScript((auth) => {
//   localStorage.setItem('atalink:login', JSON.stringify({
//     userId: auth.user_id,
//     chatId: auth.chat_id,
//     userName: auth.user_name,
//     orgRoles: auth.org_roles
//   }));

//   localStorage.setItem('access_token', auth.access_token);
//   localStorage.setItem('refresh_token', auth.refresh_token);
// }, body.auth);
//   // await page.evaluate((token) => {
//   //   localStorage.setItem('access_token', token);
//   // }, body.token);
//   console.log('token', body.auth);
//   // Lưu auth state
//   await page.context().storageState({ path: ADauthFile });
// });