import * as React from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import { fetchStartImage, IFetchStartImageAction } from '../../actions/startImage'
import { IStartImage, IStore } from './declarations'

interface IStateProps {
  startImage: IStartImage
}

interface IDispacthProps {
  fetchStartImage: IFetchStartImageAction
}

type IProps = IStateProps & IDispacthProps

class StartImage extends React.Component<IProps, {}> {

  static navigationOptions = {
    title: 'First Screen',
  }

  componentWillMount() {
    this.props.fetchStartImage()
  }

  public render() {
    if (this.props.startImage.img === '') {
      return (
        <View
          style={{backgroundColor: 'red', flex: 1}}
        />
      )
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

export default connect<IStateProps, IDispacthProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(StartImage)
