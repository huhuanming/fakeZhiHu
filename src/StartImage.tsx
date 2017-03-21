import * as React from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { fetchStartImage, IFetchStartImageAction } from './actions/startImage'
import { IStartImage, IStore } from './declarations'

interface IOwnProps {}

interface IStateProps {
  startImage: IStartImage
}

interface IDispacthProps {
  fetchStartImage: IFetchStartImageAction
}

type IProps = IOwnProps & IStateProps & IDispacthProps

export class StartImage extends React.Component<IProps, {}> {

  componentWillMount() {
    this.props.fetchStartImage()
  }

  public render() {
    if (this.props.startImage.img === '') {
      return null
    }
    return (
      <Image
        style={{ flex: 1 }}
        source={{ uri: this.props.startImage.img }}
      />
    )
  }
}

const mapStateToProps = (store: IStore) => ({
  startImage: store.startImage,
})

const mapDispatchToProps = {
  fetchStartImage,
}

export default connect<IStateProps, IDispacthProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(StartImage)
