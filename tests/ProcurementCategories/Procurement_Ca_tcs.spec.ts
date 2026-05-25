import { test , expect, dataTest} from "../../Fixtures/Procurement_Ca_fixture";
import { ProcurementCategoriesPage } from '../../Pages/ProcurementCategories_Page';


test('Enter procurement categories list view successfully', async ({ procurementcategorispage }) => {

  
  await procurementcategorispage.procurementCategories_list;

  await expect(procurementcategorispage);

});

dataTest('Create procurement categories successfully', async ({ page , dynamicCategory }) => {

  const procurementcategorispage = new ProcurementCategoriesPage(page);

  await procurementcategorispage.procurementCategories_list();
  
  await procurementcategorispage.procurementCategories_create();
  
  await procurementcategorispage.procurementCategories_create_Success(dynamicCategory.newCategory, dynamicCategory.parentCategory);

});