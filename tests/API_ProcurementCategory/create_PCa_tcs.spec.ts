
import { test, expect } from '../../Fixtures/auth_fixture';
import { OrgCategoryApi } from '../../api_src/org_P_CategoryAPI';
import { OrgCategoryData } from '../../Data/org-category.data';

test.describe('Org Category API', () => { //group test case


  const baseURL = 'https://qc-api.atalink.com.vn';

  const token = process.env.ACCESS_TOKEN!;

  const orgId = 'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';

  test('Create org category successfully', async ({
    request,
    accessToken
  }) => {
    const categoryApi = new OrgCategoryApi(request, accessToken);

    const createPayload = OrgCategoryData.createCategory(); 

    const createResponse = await categoryApi.createCategory(
      createPayload
    );

    console.log(createResponse);

    // Verify status
    expect(createResponse.status()).toBe(201);

    // Parse response
    const responseBody = await createResponse.json();

    console.log('Response:', responseBody);

    // Verify response body
    expect(responseBody).toBeTruthy();

    // Example validate fields
    expect(responseBody.data).toBeDefined();

    // expect(responseBody.data.name.vi).toContain('test');
    // expect(responseBody.data.name.en).toContain('test');

    //expect(responseBody.data.orgId).toBe(orgId);
  });


  test('Create org category without token', async ({
    request,
    accessToken
  }) => {
    const categoryApi = new OrgCategoryApi(request, 'accessToken null');

    const createPayload = OrgCategoryData.createCategory(); 
    const createResponse = await categoryApi.createCategory(
      createPayload
    );
    // Verify unauthorized
    expect(createResponse.status()).toBe(401);
  });


  test('Create org category with empty name', async ({
    request,
    accessToken
      }) => {

    const categoryApi = new OrgCategoryApi(request, accessToken);

    const createPayload = OrgCategoryData.createCategory(); 
    createPayload.name.vi = '';
    createPayload.name.en = '';
    
    const createResponse = await categoryApi.createCategory(
      createPayload
    );
    
    // Validate bad request
    expect(createResponse.status()).toBe(400);

    const body = await createResponse.json();

    console.log(body);
  });
});

