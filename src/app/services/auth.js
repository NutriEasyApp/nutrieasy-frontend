import api from '../services/api';
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export async function signIn(email, password) {
  return api.post(
    '/auth/login',
    {},
    {
      auth: {
        username: email,
        password: password,
      },
    }
  );
}
