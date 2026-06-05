import { test, expect, request } from '@playwright/test';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';

test.describe('Delete Org Category API', () => {
  const baseURL = 'https://qc-api.atalink.com.vn';

  const orgId = 'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';

  const categoryId =
    'cat_1779780953731_769a2b4d-4eec-4e38-abb1-f0014a1de6c5';

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