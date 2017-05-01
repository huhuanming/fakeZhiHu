import ActionTypes from '../actions/actionTypes'
import { IPayloadAction, IStartImage } from '../declarations'

const defaultValue: IStartImage = {
  img: '',
  text: '',
}

const startImageReducer = (
  state = defaultValue,
  action: IPayloadAction<IStartImage>,
) => {
  switch (action.type) {
    case ActionTypes.RECIEVE_START_IMAGE:
     return action.payload
    default:
      return state
  }
}

export default startImageReducer
