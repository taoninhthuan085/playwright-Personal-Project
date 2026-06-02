import { defineConfig, devices } from '@playwright/test';
import dotenv  from 'dotenv';

dotenv.config();
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',


    baseURL: process.env.WEB_URL, 

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    // 1. PROJECT SETUP: Chạy đầu tiên để lấy session
    {
      name: 'setup',
      testMatch: /setup\.ts/
    },

    // 2. PROJECT TEST ĐĂNG NHẬP: Chạy trên trình duyệt SẠCH (không dùng storageState)
    {
      name: 'chromium',
      testMatch: /LogIn\.spec\.ts/,
      use: { 
        ...devices['Desktop Chrome'],
        // Ép buộc không dùng session cũ
        storageState: { cookies: [], origins: [] } 
      },
    },

     // 3. PROJECT REGRESSION: Chạy bằng SESSION đã lưu
    {
      name: 'salesOrder',
      testMatch:  /SalesorderList_tcs\.spec\.ts/,
      dependencies: ['setup'], // Chạy sau khi setup xong
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/AdminMNM.json', // Nạp session vào
      },
    },

    {
      name: 'purchaseOrder',
      testMatch:  'tests/PurchaseOrder/*.spec.ts',
      dependencies: ['setup'], // Chạy sau khi setup xong
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/AdminMNM.json', // Nạp session vào
      },
    },

    {
      name: 'procurementCategories',
      testMatch:  'tests/ProcurementCategories/*.spec.ts',
      dependencies: ['setup'], // Chạy sau khi setup xong
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/AdminMNM.json', // Nạp session vào
      },
    },

    {
      name: 'API',
      testMatch: 'tests/API/*.spec.ts',
      use: { 
        ...devices['Desktop Chrome'],
        // Ép buộc không dùng session cũ
        storageState: { cookies: [], origins: [] } 
      },
    },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
