import { IEmptyAction, IPayloadAction, IStartImage } from '../declarations'
import ActionTypes from './actionTypes'

export type IFetchStartImageActionResultType = IEmptyAction

export type IFetchStartImageAction = () => IFetchStartImageActionResultType

export const fetchStartImage = () => (
  {
    type: ActionTypes.FETCH_START_IMAGE,
  }
)

export type IRecieveStartImageActionParam = IStartImage

export type IRecieveStartImageActionResultType = IPayloadAction<IRecieveStartImageActionParam>

export type IRecieveStartImageAction = (params: IRecieveStartImageActionParam) => IRecieveStartImageActionResultType

export const recieveStartImage = (params: IRecieveStartImageActionParam) => (
  {
    payload: params,
    type: ActionTypes.RECIEVE_START_IMAGE,
  }
)
