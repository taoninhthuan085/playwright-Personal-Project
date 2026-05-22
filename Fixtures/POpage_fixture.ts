import { test as base, expect, Page } from '@playwright/test';
import { PurchaseOrderPage } from '../Pages/PurchaseOrder_Page';

type MyFixtures = {
  purchaseorderpage : PurchaseOrderPage;
};

export const test = base.extend<MyFixtures>({
  purchaseorderpage: async ({ page }, use) => {

    const purchaseorderpage = new PurchaseOrderPage(page);

    await purchaseorderpage.purchaseOrder_list();

    await use(purchaseorderpage);
  },
});

export { expect };