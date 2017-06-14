import { combineReducers } from 'redux'
import bannerReducer from './banner'
import postsReducer from './posts'
import routerReducer from './router'
import screenReducer from './screen'
import startImageReducer from './startImage'

export default combineReducers({
  banners: bannerReducer,
  posts: postsReducer,
  router: routerReducer,
  screen: screenReducer,
  startImage: startImageReducer,
})
