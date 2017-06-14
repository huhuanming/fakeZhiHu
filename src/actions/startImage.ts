import { Dispatch } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import { createAction } from 'redux-actions'
import { SCREEN_TYPE } from '../constants/index'
import { IStartImage, IStore } from '../declarations'
import { switchScreen } from './switchScreen'

export const recieveStartImage = createAction('RECIVE_START_IMAGE', (response: IStartImage) => response)
const recieveStartImageType = returntypeof(recieveStartImage)
export type IRecieveStartImageAction = typeof recieveStartImageType
export const fetchStartImages = () => (dispatch: Dispatch<IStore>) =>
  fetch('http://localhost:8111/start-image').then(
    (response) => response.json().then(
      (json) => {
        dispatch(recieveStartImage(json))
        setTimeout(() => {
          dispatch(switchScreen(SCREEN_TYPE.ROUTER_SCREEN))
        }, 3500)
      }),
    )

export type IFetchStartImages = typeof fetchStartImages
