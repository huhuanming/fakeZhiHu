import { Banner, IEmptyAction, IPayloadAction } from '../declarations'
import ActionTypes from './actionTypes'

export type IFetchBannersAction = IEmptyAction

export type IFetchBanners = () => IFetchBannersAction

export const fetchBanners = () => (
  {
    type: ActionTypes.FETCH_BANNERS,
  }
)

export type IRecieveBannersParam = Banner[]

export type IRecieveBannersAction = IPayloadAction<IRecieveBannersParam>

export type IRecieveBanners = (params: IRecieveBannersParam) => IRecieveBannersAction

export const recieveBanners = (params: IRecieveBannersParam) => (
  {
    payload: params,
    type: ActionTypes.RECIEVE_BANNERS,
  }
)
