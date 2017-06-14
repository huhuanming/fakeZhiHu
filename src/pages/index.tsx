import React from 'react'
import { connect } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import { SCREEN_TYPE } from '../constants/index'
import { IStore } from '../declarations'
import Router from './Router'
import StartImage from './StartImage'

const mapStateToProps = (state: IStore) => ({
  screenType: state.screen.screenType,
})

interface IDispatchProps {
}

const mapStateToPropsType = returntypeof(mapStateToProps)
type IStateProps = typeof mapStateToPropsType

interface IOwnProps {
}

type IProps = IStateProps & IDispatchProps & IOwnProps

const Index = (props: IProps) => (
  props.screenType === SCREEN_TYPE.ROUTER_SCREEN ? (
     <Router />
  ) : (
    <StartImage />
  )
)

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps)(Index)
