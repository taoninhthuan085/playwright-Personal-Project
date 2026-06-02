import { CreateOrgCategoryRequest } from '../models/P_Category/create-org-category.request';

export class OrgCategoryData {
  private static readonly orgId =
    'org_29ca83a5-a9f6-4241-b2c9-a14970ba2370';

  static createCategory(): CreateOrgCategoryRequest {
    const categoryName = `Category_${Date.now()}`;

    return {
      orgId: this.orgId,
      name: {
        vi: categoryName,
        en: categoryName,
      },
      desc: {
        vi: '',
        en: '',
      },
      parentId: '',
      propertyAccount: null,
    };
  }

  static updateCategory(): CreateOrgCategoryRequest {
    const categoryName = `Updated_${Date.now()}`;

    return {
      orgId: this.orgId,
      name: {
        vi: categoryName,
        en: categoryName,
      },
      desc: {
        vi: 'Updated Description',
        en: 'Updated Description',
      },
      parentId: '',
      propertyAccount: null,
    };
  }
}