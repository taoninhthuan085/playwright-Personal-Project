import { test, expect } from '@playwright/test';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';
import { OrgCategoryData } from '../../Data/org-category.data';

test.describe('Org Category CRUD', () => {
  test('Create -> Update -> Delete Category', async ({
    request,
  }) => {
    const categoryApi = new OrgCategoryApi(request);

    let categoryId: string | undefined;

    try {
      // CREATE
      //---------------------------------

      const createPayload =
        OrgCategoryData.createCategory();

      const createResponse =
        await categoryApi.createCategory(
          createPayload
        );
 
      expect(createResponse.status()).toBe(201);

      const createBody =
        await createResponse.json();
     console.log(createBody);

      categoryId = createBody.data.id;
      

      expect(categoryId).toBeTruthy();

    //   expect(
    //     createBody.data.name.vi
    //   ).toBe(createPayload.name.vi);

      console.log(
        `Created Category ID: ${categoryId}`
      );

      
      // UPDATE
      //---------------------------------

      const updatePayload =
        OrgCategoryData.updateCategory();

      const updateResponse =
        await categoryApi.updateCategory2(
          categoryId!,
          updatePayload
        );

      expect(updateResponse.status()).toBe(200);

      const updateBody =
        await updateResponse.json();

      console.log(
        `Updated Category: ${updatePayload.name.vi}`
      );
    } finally {
      
      // CLEANUP
      //---------------------------------

      if (categoryId) {
        const deleteResponse =
          await categoryApi.deleteCategory2(
            categoryId
          );

        expect(deleteResponse.status()).toBe(200);

        console.log(
          `Deleted Category ID: ${categoryId}`
        );
      }
    }
  });
});