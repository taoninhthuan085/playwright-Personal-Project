import { Page , Locator, expect } from '@playwright/test';
import { test } from "../Fixtures/Data_fixture";

export class ProcurementCategoriesPage {

    readonly page : Page ;
    readonly caNameInput : Locator;
    readonly ParentcaNamedropdown : Locator;
    //readonly ParentcaNameInput : Locator;
    readonly createButton : Locator;

    constructor( page : Page) {
        this.page = page;
        this.caNameInput = page.getByPlaceholder('Nhập tên nhóm sản phẩm mua'); 
        this.ParentcaNamedropdown = page.locator('.ant-select-selector').filter({hasText: /^Nhập tên nhóm sản phẩm cha$/ });
        this.createButton = page.locator('button', { hasText: 'Tạo' });

    }

    async procurementCategories_list() { 

        await this.page.goto('/my-tasks/org_29ca83a5-a9f6-4241-b2c9-a14970ba2370/procurement-categories');

    }
    async procurementCategories_create() {

         await this.page.getByText('Tạo').click();

    }

    async procurementCategories_create_Success(categoryName : string, ParentcategoryName : string) {

        await this.caNameInput.fill(categoryName);
        await this.ParentcaNamedropdown.click();
        await this.page.getByText(ParentcategoryName).click();
        await this.page.waitForTimeout(500); // time for the dropdown to close (but hard core wait, need to find better solution)
        await expect(this.createButton).toBeEnabled();
        await this.createButton.click();
        await this.page.waitForTimeout(500);// time for the dropdown to close (but hard core wait, need to find better solution) Nhung thay fake
    }
}