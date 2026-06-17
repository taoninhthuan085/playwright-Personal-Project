import { test as base } from '@playwright/test';
import { AuthAPI } from '../api_src/AuthAPI';
import { loginData } from '../Data/Login.data';

type AuthFixture = {
  accessToken: string;
};

export const test = base.extend<AuthFixture>({
  accessToken: async ({ request }, use) => {

    const authApi = new AuthAPI(request);

    const token = await authApi.getAccessToken(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await use(token);
  },
});

export { expect } from '@playwright/test';