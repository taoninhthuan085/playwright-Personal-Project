export interface OrgCategoryResponse {
  success: boolean;
  data: {
    id: string;
    orgId: string;
    name: {
      vi: string;
      en: string;
    };
    desc: {
      vi: string;
      en: string;
    };
  };
}