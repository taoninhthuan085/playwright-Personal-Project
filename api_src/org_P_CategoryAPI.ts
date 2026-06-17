import { APIRequestContext, APIResponse } from '@playwright/test';
import { CategoryPayload } from '../models/P_Category.model';
import { CreateOrgCategoryRequest } from '../models/P_Category/create-org-category.request';

export class OrgCategoryApi {
  constructor(
    private request: APIRequestContext,
    private token: string
  ) {}

  private readonly orgId =
    'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';
  private readonly api_url = process.env.API_URL;

  private get headers() {
    return {
      authorization: this.token,
      locale: 'vi',
      'content-type': 'application/json',
      tz: '+07:00',
    };
  }

  //API flow E2E
  async createCategory(
    payload: CreateOrgCategoryRequest
  ) {
    return await this.request.post(
      `${this.api_url}/org-procurement/orgs/${this.orgId}/org-categories`,
      {
        headers: this.headers,
        data: payload,
      }
    );
  }

  async updateCategory2(
    categoryId: string,
    payload: CreateOrgCategoryRequest
  ) {
    return await this.request.put(
      `${this.api_url}/org-procurement/orgs/${this.orgId}/org-categories/${categoryId}?locale=vi`,
      {
        headers: this.headers,
        data: payload,
      }
    );
  }

  async deleteCategory2(categoryId: string) {
    return await this.request.delete(
      `${this.api_url}/org-procurement/orgs/${this.orgId}/org-categories/${categoryId}?locale=vi`,
      {
        headers: this.headers,
        data: {},
      }
    );
  }

  //API test riêng (Sẽ sửa lại cho clean)
  async updateCategory(
    orgId: string,
    categoryId: string,
    payload: CategoryPayload,
    token: string
  ): Promise<APIResponse> {
    return await this.request.put(
      `/org-procurement/orgs/${orgId}/org-categories/${categoryId}?locale=vi`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: token,
          'content-type': 'application/json',
          locale: 'vi',
          tz: '+07:00',
        },
        data: payload,
      }
    );
  }

  async deleteCategory(
    orgId: string,
    categoryId: string,
    token: string
  ): Promise<APIResponse> {
    return await this.request.delete(
      `/org-procurement/orgs/${orgId}/org-categories/${categoryId}?locale=vi`,
      {
        headers: {
          authorization: token,
          'content-type': 'application/json',
          locale: 'vi',
          tz: '+07:00',
        },
        data: {},
      }
    );
  }
}