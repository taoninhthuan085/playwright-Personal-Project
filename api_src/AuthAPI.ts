import { APIRequestContext } from '@playwright/test';

export class AuthAPI {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    return await this.request.post(
      `${process.env.API_URL}/auth/sign_in?locale=vi`,
      {
        data: {
          email,
          password,
          remember: false,
        },
      }
    );
  }

  async getAccessToken(email: string, password: string) {
    const response = await this.login(email, password);

    const body = await response.json();

    return body.data.access_token;
  }

  async logout(accessToken: string) {
    const response = await this.request.delete(
      `${process.env.API_URL}/auth/sign_out?locale=vi`,
      {
        headers: {
          authorization: accessToken,
          locale: 'vi',
          'content-type': 'application/json',
          tz: '+07:00',
        },
        data: {},
      }
    );

    return response;

  }
}