import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import epics from '../epics'
import reducers from '../reducers'

// tslint:disable-next-line:no-string-literal
const composeAction = __DEV__ && global['reduxNativeDevToolsCompose'] ? global['reduxNativeDevToolsCompose'] : compose

const enhancer = composeAction(
  applyMiddleware(
    createEpicMiddleware(epics),
  ),
)

const store = createStore(reducers, undefined, enhancer)

export default store
