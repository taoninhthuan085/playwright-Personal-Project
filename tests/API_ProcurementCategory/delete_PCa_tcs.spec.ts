import { test, expect } from '../../Fixtures/auth_fixture';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';
import { OrgCategoryData } from '../../Data/org-category.data';

test.describe('Delete Org Category API', () => {
  const baseURL = 'https://qc-api.atalink.com.vn';

  const orgId = 'cat_1780997000557_2cd6bc66-5bbd-4524-ab16-c020dd5a89df';

  const categoryId =
    'cat_1780980589553_6ac39324-c68c-43eb-8197-42b45ab227c9';

  const token = process.env.ACCESS_TOKEN!;

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