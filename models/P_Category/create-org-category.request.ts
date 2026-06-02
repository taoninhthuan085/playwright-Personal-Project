export interface CategoryName {
  vi: string;
  en: string;
}

export interface CategoryDescription {
  vi: string;
  en: string;
}

export interface CreateOrgCategoryRequest {
  orgId: string;
  name: CategoryName;
  desc: CategoryDescription;
  parentId: string;
  propertyAccount: string | null;
}