import { Page } from '@playwright/test';

export class SalesOrderPage {
    
    constructor(private page: Page) {}

    async salesOrder_list() {

        await this.page.goto('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/sales-orders');

        // await this.page.getByRole('button',{name: 'Tạo'});

    }
    async salesOrder_create() {

        //await this.page.goto('https://qc.atalink.com.vn/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/sales-orders/create');

         await this.page.getByText('Tạo').click();

    }
}