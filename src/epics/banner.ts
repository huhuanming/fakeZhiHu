import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { AjaxResponse, Observable } from 'rxjs/Rx'
import ActionTypes from '../actions/actionTypes'
import { recieveBanners } from '../actions/banner'
import { IStore } from '../declarations'

const banner =
  (action$: ActionsObservable<any>, store: MiddlewareAPI<IStore>) =>
    action$.ofType(
      ActionTypes.FETCH_BANNERS,
    ).switchMapTo(Observable.ajax('http://localhost:8111/banners'))
      .map((ajaxResponse: AjaxResponse) => recieveBanners(ajaxResponse.response))
      .catch((error: any) => Observable.empty())

const bannerEpics = [
  banner,
]

export default bannerEpics
