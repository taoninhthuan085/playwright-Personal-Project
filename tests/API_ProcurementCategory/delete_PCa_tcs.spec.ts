import { test, expect } from '../../Fixtures/auth_fixture';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';

test.describe('Delete Org Category API', () => {

  const categoryId ='cat_1780980589553_6ac39324-c68c-43eb-8197-42b45ab227c9';


  test('Delete org category successfully', async ({request, accessToken}) => {
    

    const categoryApi = new OrgCategoryApi(request, accessToken);

    const response = await categoryApi.deleteCategory(
      categoryId,
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body).toBeTruthy();
  });

  test('Delete org category without token', async ({
    request
  }) => {
    

    const categoryApi = new OrgCategoryApi(request, 'accessToken null');

    const response = await categoryApi.deleteCategory(
      categoryId,
    );

    expect(response.status()).toBe(401);
  });

  test('Delete non-existing category', async ({
    request, 
    accessToken
  }) => {

    const categoryApi = new OrgCategoryApi(request, accessToken);

    const response = await categoryApi.deleteCategory(
      'null'
    );

    expect(response.status()).toBeGreaterThanOrEqual(400);

    const body = await response.json();

    console.log(body);
  });
});