import { combineEpics } from 'redux-observable'
import bannerEpics from './banner'
import startImage from './startImage'

export default combineEpics(
  ...startImage,
  ...bannerEpics,
)
