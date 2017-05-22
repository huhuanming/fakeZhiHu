import * as React from 'react'
import { addNavigationHelpers, NavigationState, StackNavigator } from 'react-navigation'
import { connect, Dispatch } from 'react-redux'
import { IStore } from '../../declarations'
import Home from '../Home'
import StartImage from '../StartImage'

export const AppNavigator = StackNavigator({
  Home: {
    path: 'home',
    screen: Home,
  },
  StartImage: {
    path: 'startImage',
    screen: StartImage,
  },
}, {
  initialRouteName: 'Home',
})

interface IStateProps {
  router: NavigationState
}

interface IOwnProps {
  dispatch?: Dispatch<IStore>
}

type IProps = IStateProps & IOwnProps

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

export default connect<IStateProps, {}, IOwnProps>(
  mapStateToProps,
)(Router)
