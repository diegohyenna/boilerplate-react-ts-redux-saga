import { action } from 'typesafe-actions';

export function signInRequest({ email, password }: { email: string; password: string }) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password,
  });
}

export function signInSuccess({ data }: { data: {} }) {
  return action('@auth/SIGN_IN_SUCCESS', {
    data,
  });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}
