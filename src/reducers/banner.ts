import ActionTypes from '../actions/actionTypes'
import { IRecieveBannersAction, IRecieveBannersParam } from '../actions/banner'

const defaultValue: IRecieveBannersParam = []

const bannerReducer = (
  state = defaultValue,
  action: IRecieveBannersAction,
) => {
  switch (action.type) {
    case ActionTypes.RECIEVE_BANNERS:
      return action.payload
    default:
      return state
  }
}

export default bannerReducer
