import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { AjaxResponse, Observable} from 'rxjs/Rx'
import ActionTypes from '../actions/actionTypes'
import { recieveStartImage, IFetchStartImageActionResultType } from '../actions/startImage'
import { IStore } from '../declarations'

const fetchStartImage =
  (action$: ActionsObservable<IFetchStartImageActionResultType>, store: MiddlewareAPI<IStore>) =>
    action$.ofType(
      ActionTypes.FETCH_START_IMAGE,
    ).switchMapTo(Observable.ajax('http://localhost:8111/start-image'))
    .map((ajaxResponse: AjaxResponse) => recieveStartImage(ajaxResponse.response))

export default [
  fetchStartImage,
]
