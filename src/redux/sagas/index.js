import { takeEvery, put, call, all } from 'redux-saga/effects'
import Api from 'api'
import * as types from '../constants/ActionTypes'

// Our worker Saga: 将异步执行 increment 任务
function* getUserAsync() {
  try {
    const data = yield call(Api.getUser)
    yield put({ type: types.GET_USER, data })
  } catch(err) {
    yield put({ type: types.FETCH_FAILED, err })
  }
}

// Our watcher Saga: 在每个 GET_USER_ASYNC action 调用后，派生一个新的 getUserAsync 任务
function* watchGetUserAsync() {
  yield takeEvery(types.GET_USER_ASYNC, getUserAsync)
}

export default function* rootSaga() {
  yield all([
    watchGetUserAsync()
  ])
}