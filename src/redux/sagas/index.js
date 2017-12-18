import { takeEvery, put, call } from 'redux-saga/effects'
import Api from 'api'

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
function* getUserAsync() {
  const data = yield call(Api.getUser)
  yield put({ type: 'GET_USER', data })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
function* watchGetUserAsync() {
  yield takeEvery('GET_USER_ASYNC', getUserAsync)
}

export default function* rootSaga() {
  yield [
    watchGetUserAsync()
  ]
}