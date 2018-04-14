import { createStore, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import state from './state'
//import predictions from './modules/predictions'
import { routerReducer } from 'react-router-redux'

const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const rootReducer = combineReducers({
    router: routerReducer,
    state,
    //predictions
})

const initialState = {}

export const history = createHistory()
export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
