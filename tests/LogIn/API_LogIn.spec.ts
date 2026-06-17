import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api_src/AuthAPI';
import { loginData } from '../../Data/Login.data';

test.describe('Login API', () => {

  test('Login successfully', async ({ request }) => {

    const authAPI = new AuthAPI(request);

    const response = await authAPI.login(
      loginData.validUser.email,
      loginData.validUser.password
    );
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.access_token).toBeTruthy();
  });

});