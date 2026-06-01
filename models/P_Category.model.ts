export interface CategoryPayload {
  orgId: string;
  name: {
    vi: string;
    en: string;
  };
  desc: {
    vi: string;
    en: string;
  };
  parentId: string;
  propertyAccount: null;
}