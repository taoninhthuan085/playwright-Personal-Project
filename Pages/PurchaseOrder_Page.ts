import { Page } from '@playwright/test';

export class PurchaseOrderPage {
    
    constructor(private page: Page) {}

    async purchaseOrder_list() {

        await this.page.goto('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/purchase-orders');

    }
    async purchaseOrder_create() {

         await this.page.getByText('Tạo').click();

    }
}