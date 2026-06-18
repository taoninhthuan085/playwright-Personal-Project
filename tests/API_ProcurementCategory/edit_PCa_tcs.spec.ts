import { test, expect } from '../../Fixtures/auth_fixture';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';
import { OrgCategoryData } from '../../Data/org-category.data';

test.describe('Update Org Category API', () => {


  const categoryId ='cat_1779778627948_b4c59446-c775-41f5-9681-c53f75374d17';


  test('Update org category successfully', async ({
    request,
    accessToken
  }) => {

    const categoryApi = new OrgCategoryApi(request, accessToken);

    const updatePayload =
            OrgCategoryData.updateCategory();
    
    const updateResponse = await categoryApi.updateCategory(
      categoryId!,
      updatePayload
    );
    
    expect(updateResponse.status()).toBe(200);
    
    console.log(`Updated Category: ${updatePayload.name.vi}`);
  });

  test('Update org category without token', async ({
    request
  }) => {

    const categoryApi = new OrgCategoryApi(request, 'accessToken null');
    const updatePayload =
            OrgCategoryData.updateCategory();
    const updateResponse = await categoryApi.updateCategory(
      categoryId!,
      updatePayload
    )
    
    expect(updateResponse.status()).toBe(401);
  });
});