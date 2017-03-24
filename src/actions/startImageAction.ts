import { IEmptyAction, IPayloadAction, IStartImage } from '../declarations'
import ActionTypes from './actionTypes'

export type IFetchImageActionResultType = IEmptyAction

export type IFetchImageAction = () => IFetchImageActionResultType

export const fetchImage = () => (
  {
    type: ActionTypes.FETCH_START_IMAGE,
  }
)

export type IReceiveImageActionParam = IStartImage

export type IReceiveImageActionResultType = IPayloadAction<IReceiveImageActionParam>

export type IAction = (params: IReceiveImageActionParam) => IReceiveImageActionResultType

export const recieveAction = (params: IReceiveImageActionParam) => (
  {
    payload: params,
    type: ActionTypes.RECIEVE_START_IMAGE,
  }
)
