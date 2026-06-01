
// tests/org-category.spec.ts

import { test, expect, request } from '@playwright/test';

test.describe('Org Category API', () => {
  const baseURL = 'https://qc-api.atalink.com.vn';

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJ1c2VyX2FjZWQwNGEwLTIzNzUtNDNmNS1iMjNjLWE0ZWQ3NjU2ZGVjOCIsInVzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTQ4LjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLzE0OC4wLjAuMCIsImlwX2FkZHIiOiIxMC4yNDQuNi4wIiwidHlwZSI6ImFjY2VzcyJ9LCJleHAiOjE3ODAwMzMzMTV9.x4eUOhAS85XQd2djchczubjKAyI2Z1V2wWfPr3_RW0w';

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
    expect(response.status()).toBe(200);

    // Parse response
    const responseBody = await response.json();

    console.log('Response:', responseBody);

    // Verify response body
    expect(responseBody).toBeTruthy();

    // Example validate fields
    expect(responseBody.data).toBeDefined();

    expect(responseBody.data.name.vi).toContain('test');
    expect(responseBody.data.name.en).toContain('test');

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

