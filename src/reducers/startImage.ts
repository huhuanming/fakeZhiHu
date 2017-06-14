import { handleActions } from 'redux-actions'
import { IRecieveStartImageAction } from '../actions/startImage'
import { IStartImage } from '../declarations'

const defaultValue: IStartImage = {
  img: '',
  text: '',
}

const startImageReducer = handleActions({
  RECIVE_START_IMAGE: (state, action: IRecieveStartImageAction) => ({
    ...action.payload,
  }),
}, defaultValue)

export default startImageReducer
