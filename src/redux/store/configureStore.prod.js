import { createStore } from 'redux'
import rootReducer from '../reducers'
import { middlewares, sagaMiddleware } from './middlewares'
import rootSaga from '../sagas'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, middlewares)
  sagaMiddleware.run(rootSaga)
  return store
}
