import { call, takeLatest, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';
import * as actions from './actions';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '', { token: 'HFQOnlvvGedBt6V539lTPg', data: { email, password } });

    yield put(actions.signInSuccess({ data }));
  } catch (err) {
    yield put(actions.signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
