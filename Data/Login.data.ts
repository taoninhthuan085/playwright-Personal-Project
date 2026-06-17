export const loginData = {
  validUser: {
    email: process.env.ADMIN_USER!,
    password: process.env.API_PASS!,
  },

  invalidUser: {
    email: process.env.ADMIN_USER!,
    password: 'wrong123',
  },
};