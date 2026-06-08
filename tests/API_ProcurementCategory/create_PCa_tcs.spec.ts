
import { test, expect, request } from '@playwright/test';

test.describe('Org Category API', () => { //group test case

  test.describe.configure({ mode: 'parallel' });

  const baseURL = 'https://qc-api.atalink.com.vn';

  const token = process.env.ACCESS_TOKEN!;

  const orgId = 'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';

  test('Create org category successfully', async () => {
    const apiContext = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        accept: 'application/json, text/plain, */*',
        authorization: token,
        'content-type': 'application/json',
        locale: 'vi',
        tz: '+07:00',
      },
    });

    const payload = {
      orgId,
      name: {
        vi: `test-${Date.now()}`,
        en: `test-${Date.now()}`,
      },
      desc: {
        vi: '',
        en: '',
      },
      parentId: '',
      propertyAccount: null,
    };

    const response = await apiContext.post(
      `/org-procurement/orgs/${orgId}/org-categories?locale=vi`,
      {
        data: payload,
      }
    );

    // Verify status
    expect(response.status()).toBe(201);

    // Parse response
    const responseBody = await response.json();

    console.log('Response:', responseBody);

    // Verify response body
    expect(responseBody).toBeTruthy();

    // Example validate fields
    expect(responseBody.data).toBeDefined();

    // expect(responseBody.data.name.vi).toContain('test');
    // expect(responseBody.data.name.en).toContain('test');

    expect(responseBody.data.orgId).toBe(orgId);
  });

  test('Create org category without token', async () => {
    const apiContext = await request.newContext({
      baseURL,
    });

    const response = await apiContext.post(
      `/org-procurement/orgs/${orgId}/org-categories?locale=vi`,
      {
        data: {
          orgId,
          name: {
            vi: 'test',
            en: 'test',
          },
        },
      }
    );

    // Verify unauthorized
    expect(response.status()).toBe(401);
  });

  test('Create org category with empty name', async () => {
    const apiContext = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        authorization: token,
        'content-type': 'application/json',
      },
    });

    const response = await apiContext.post(
      `/org-procurement/orgs/${orgId}/org-categories?locale=vi`,
      {
        data: {
          orgId,
          name: {
            vi: '',
            en: '',
          },
          desc: {
            vi: '',
            en: '',
          },
        },
      }
    );

    // Validate bad request
    expect(response.status()).toBeGreaterThanOrEqual(400);

    const body = await response.json();

    console.log(body);
  });
});

