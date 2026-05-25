import { test as base, expect, Page } from '@playwright/test';
import { ProcurementCategoriesPage } from '../Pages/ProcurementCategories_Page';
export { test as dataTest } from '../Fixtures/Data_fixture';

type MyFixtures = {
  procurementcategorispage : ProcurementCategoriesPage;
  
};

export const test = base.extend<MyFixtures>({
  procurementcategorispage: async ({ page }, use) => {

    const procurementcategorispage = new ProcurementCategoriesPage(page);

    await procurementcategorispage.procurementCategories_list;

    await use(procurementcategorispage);
  },
});

export { expect };