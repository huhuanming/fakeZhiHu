import { combineEpics } from 'redux-observable'
import startImage from './startImage'

export default combineEpics(
  ...startImage,
)
