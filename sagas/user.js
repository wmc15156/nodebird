import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function loginApi(data) {
  // axios.post('/api/user/login', data);
}

function logoutApi(data) {}

function* logout(action) {
  try {
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function* login(action) {
  try {
    // const result = yield call(logInApi, action.data);
    delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: { ...action.data, nickname: 'james' },
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function signUpApi(data) {}

function* signUp(action) {
  try {
    // const result = yield call(signUpApi, action.data);
    yield delay(1000);
    put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
