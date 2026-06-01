import { test, expect, request } from '@playwright/test';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';
import categoryData from '../../Data/P_Category.json';

test.describe('Update Org Category API', () => {
  const baseURL = 'https://qc-api.atalink.com.vn';

  const orgId = 'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';

  const categoryId =
    'cat_1779778627948_b4c59446-c775-41f5-9681-c53f75374d17';

  const token = process.env.ACCESS_TOKEN!;

  test('Update org category successfully', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const categoryApi = new OrgCategoryApi(apiContext);

    const payload = {
      ...categoryData,
      name: {
        vi: `QQQupdated-${Date.now()}`,
        en: `updated-${Date.now()}`,
      },
    };

    const response = await categoryApi.updateCategory(
      orgId,
      categoryId,
      payload,
      token
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.data).toBeDefined();
    //expect(body.data.orgId).toBe(orgId);
    //expect(body.data.name.vi).toContain('updated');
  });

  test('Update org category without token', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const categoryApi = new OrgCategoryApi(apiContext);

    const response = await categoryApi.updateCategory(
      orgId,
      categoryId,
      categoryData,
      ''
    );

    expect(response.status()).toBe(401);
  });
});