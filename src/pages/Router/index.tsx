import * as React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect, Dispatch } from 'react-redux'
import { IStore } from '../../declarations'
import StartImage from '../StartImage'

export const AppNavigator = StackNavigator({
  StartImage: {
    path: 'startImage',
    screen: StartImage,
  },
}, {
  initialRouteName: 'StartImage',
})

interface IStateProps {
  router: any
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
