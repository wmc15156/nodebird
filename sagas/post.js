import { all, takeLatest, delay, call, put, fork } from 'redux-saga/effects';
import shortId from 'shortid';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from '../reducers/post';
import {ADD_POST_TO_ME} from "../reducers/user";



function addPostApi(data) {}

function* addPost(action) {
  try {
    //const result = yield call(addPostApi, action.data);
    yield delay(1000);
    const id = shortId.generate()
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      }
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    })
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: e.response.data,
    });
  }
}

function addCommentApi(data) {}

function* addComment(action) {
  try {
    // const result = yield call(addCommentApi, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postRootSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
