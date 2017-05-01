import { combineReducers } from 'redux'
import routerReducer from './router'
import startImageReducer from './startImage'

export default combineReducers({
  router: routerReducer,
  startImage: startImageReducer,
})
