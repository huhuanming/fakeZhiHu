import { combineReducers } from 'redux'
import bannerReducer from './banner'
import routerReducer from './router'
import startImageReducer from './startImage'

export default combineReducers({
  banners: bannerReducer,
  router: routerReducer,
  startImage: startImageReducer,
})
