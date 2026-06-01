import { APIRequestContext, APIResponse } from '@playwright/test';
import { CategoryPayload } from '../models/P_Category.model';

export class OrgCategoryApi {
  constructor(private request: APIRequestContext) {}

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