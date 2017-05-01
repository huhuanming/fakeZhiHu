import { AppNavigator } from '../pages/Router'

const routerReducer = (
  state: any,
  action: any,
) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default routerReducer
