import { test, expect } from '../../Fixtures/auth_fixture';
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

  test('Logout successfully', async ({ 
    request, 
    accessToken 
  }) => {
  const authApi = new AuthAPI(request);

  const response = await authApi.logout(accessToken);

  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
});

  test('Login with invalid credentials', async ({ request }) => {

    const authAPI = new AuthAPI(request);

    const response = await authAPI.login(
      loginData.invalidUser.email,
      loginData.invalidUser.password
    );
    expect(response.status()).toBeGreaterThan(400);

  });


});