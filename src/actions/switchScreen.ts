import { createAction } from 'redux-actions'
import { SCREEN_TYPE } from '../constants/index'

export const switchScreen = createAction('SWITCH_SCREEN', (type: SCREEN_TYPE) => type)

export type ISwitchScreen = typeof switchScreen
