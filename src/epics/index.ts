import { combineEpics } from 'redux-observable'
import bannerEpics from './banner'

export default combineEpics(
  ...bannerEpics,
)
