import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}

// throttle: 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출 되지 않도록 하는것
// debounce: 자동완성(검색 창 타이핑) 연이어 호출되는 함수들 중 마지막 함수를 호출되도록 하는것
