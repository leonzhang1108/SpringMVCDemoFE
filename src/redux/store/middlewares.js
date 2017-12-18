import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(
  // you can apply you middleware here
  sagaMiddleware
)

export {
  middlewares, sagaMiddleware
}