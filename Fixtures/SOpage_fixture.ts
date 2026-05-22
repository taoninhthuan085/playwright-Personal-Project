import { test as base, expect, Page } from '@playwright/test';
import { SalesOrderPage } from '../Pages/SaleaOrder_Page';

type MyFixtures = {
  salesorderpage : SalesOrderPage;
};

export const test = base.extend<MyFixtures>({
  salesorderpage: async ({ page }, use) => {

    const salesorderpage = new SalesOrderPage(page);

    await salesorderpage.salesOrder_list();

    await use(salesorderpage);
  },
});

export { expect };