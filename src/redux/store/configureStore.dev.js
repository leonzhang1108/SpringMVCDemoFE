import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import { middlewares, sagaMiddleware } from './middlewares'
import rootSaga from '../sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(middlewares)
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  sagaMiddleware.run(rootSaga)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
