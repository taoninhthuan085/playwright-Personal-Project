import { test, expect } from '../../Fixtures/SOpage_fixture';
import { SalesOrderPage } from '../../Pages/SaleaOrder_Page';


test('Enter sales order list view successfully', async ({ salesorderpage }) => {

  
  await salesorderpage.salesOrder_list();

  await expect(salesorderpage);

});
test('Enter sales order create view successfully', async ({ salesorderpage }) => {

  
  await salesorderpage.salesOrder_create();
  // Verify ???
  await expect(salesorderpage);

});