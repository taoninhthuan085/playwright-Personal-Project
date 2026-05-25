import { Page , Locator } from '@playwright/test';
import { test } from "../Fixtures/Data_fixture";

export class ProcurementCategoriesPage {

    readonly page : Page ;
    readonly caNameInput : Locator;
    readonly ParentcaNamedropdown : Locator;
    //readonly ParentcaNameInput : Locator;
    //readonly createButton : Locator;

    constructor( page : Page) {
        this.page = page;
        this.caNameInput = page.getByPlaceholder('Nhập tên nhóm sản phẩm mua'); // Sua ddi cha
        this.ParentcaNamedropdown = page.locator('.ant-select-selector').filter({hasText: /^Nhập tên nhóm sản phẩm cha$/ });
        //this.ParentcaNameInput = page.getByText('');

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
       // await this.ParentcaNameInput.getByAltText(ParentcategoryName).click();
        await this.page.getByRole('button', { name: 'Tạo' }).click();

    }
}