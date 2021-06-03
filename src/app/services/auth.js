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

export async function signUp(email, username, password) {
  return api.post('/auth/signup', { email, username, password });
}

export async function pushNotificationRegister({ id, pushNotificationToken }) {
  return api.post('/pushnotificationregister', {
    id,
    pushNotificationToken,
  });
}
