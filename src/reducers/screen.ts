import { handleActions } from 'redux-actions'
import { SCREEN_TYPE } from '../constants/index'

const screenReducer = handleActions({
  SWITCH_SCREEN: (state, action) => ({
    screenType: action.payload,
  }),
}, {screenType: SCREEN_TYPE.LAUNCH_SCREEN})

export default screenReducer
