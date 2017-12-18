import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware(rootSaga)


// sagaMiddleware.run(rootSaga)
export default applyMiddleware(
  // you can apply you middleware here
  sagaMiddleware
)
