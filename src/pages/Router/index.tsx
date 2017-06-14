import React from 'react'
import { addNavigationHelpers, NavigationState, StackNavigator } from 'react-navigation'
import { connect, DispatchProp } from 'react-redux'
import { IStore } from '../../declarations'
import Home from '../Home'

export const AppNavigator = StackNavigator({
  Home: {
    path: 'home',
    screen: Home,
  },
}, {
  initialRouteName: 'Home',
})

interface IStateProps {
  router: NavigationState
}

type IProps = IStateProps & DispatchProp<any>

const Router = (props: IProps) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.router,
      })
     }
  />
)

const mapStateToProps = (store: IStore) => ({
  router: store.router,
})

export default connect<IStateProps, {}, {}>(
  mapStateToProps,
)(Router)
