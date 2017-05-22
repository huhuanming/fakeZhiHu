import { NavigationNavigateAction, NavigationState } from 'react-navigation'
import { AppNavigator } from '../pages/Router'

const routerReducer = (
  state: NavigationState,
  action: NavigationNavigateAction,
) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default routerReducer
