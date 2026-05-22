import { test, expect} from "../../Fixtures/POpage_fixture";
import { PurchaseOrderPage } from '../../Pages/PurchaseOrder_Page';


test('Enter purchase order list view successfully', async ({ purchaseorderpage }) => {

  
  await purchaseorderpage.purchaseOrder_list;

  await expect(purchaseorderpage);

});
test('Enter purchase order create view successfully', async ({ purchaseorderpage }) => {

  
  await purchaseorderpage.purchaseOrder_create;
  // Verify ???
  await expect(purchaseorderpage);

});