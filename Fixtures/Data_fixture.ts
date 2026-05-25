import { test as base } from '@playwright/test';
import { faker } from '@faker-js/faker';
import staticData from '../Data/Parent_Procurement_Categories.json';

// Định nghĩa kiểu cho fixture
type DataFixtures = {
  dynamicCategory: {
    newCategory: string;
    parentCategory: string;
  };
  appConfig: {
    adminUser: string;
    adminPass: string;
  };
};

export const test = base.extend<DataFixtures>({
  // Fixture tạo user ngẫu nhiên mỗi khi gọi
  dynamicCategory: async ({}, use) => {
    const category = {

      newCategory: faker.internet.displayName(),
      parentCategory: staticData.testCategory.parentCategory // Kết hợp dữ liệu từ JSON
    };
    await use(category);
  },

  // Fixture lấy tài khoản admin từ .env
  appConfig: async ({}, use) => {
    await use({
      adminUser: process.env.ADMIN_USER!,
      adminPass: process.env.ADMIN_PASS!
    });
  },
});