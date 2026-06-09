import { test, expect, request } from '@playwright/test';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';

test.describe('Delete Org Category API', () => {
  const baseURL = 'https://qc-api.atalink.com.vn';

  const orgId = 'cat_1780997000557_2cd6bc66-5bbd-4524-ab16-c020dd5a89df';

  const categoryId =
    'cat_1780996598675_dbae99ff-9caf-451e-86eb-70028ad42348';

  const token = process.env.ACCESS_TOKEN!;

  test('Delete org category successfully', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const categoryApi = new OrgCategoryApi(apiContext);

    const response = await categoryApi.deleteCategory(
      orgId,
      categoryId,
      token
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body).toBeTruthy();
  });

  test('Delete org category without token', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const categoryApi = new OrgCategoryApi(apiContext);

    const response = await categoryApi.deleteCategory(
      orgId,
      categoryId,
      ''
    );

    expect(response.status()).toBe(401);
  });

  test('Delete non-existing category', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const categoryApi = new OrgCategoryApi(apiContext);

    const response = await categoryApi.deleteCategory(
      orgId,
      'invalid-category-id',
      token
    );

    expect(response.status()).toBeGreaterThanOrEqual(400);

    const body = await response.json();

    console.log(body);
  });
});