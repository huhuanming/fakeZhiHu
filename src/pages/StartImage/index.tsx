import React from 'react'
import { Image, StyleSheet, Text, TextStyle } from 'react-native'
import { connect } from 'react-redux'
import { fetchStartImages, IFetchStartImages } from '../../actions/startImage'
import { IStartImage, IStore } from '../../declarations'

interface IStateProps {
  startImage: IStartImage
}

interface IDispacthProps {
  fetchStartImages?: IFetchStartImages
}

type IProps = IStateProps & IDispacthProps

export class StartImage extends React.Component<IProps, {}> {

  static navigationOptions = {
    title: 'First Screen',
  }

  componentWillMount() {
    if (this.props.fetchStartImages) {
      this.props.fetchStartImages()
    }
  }

  public render() {
    if (this.props.startImage.img !== '') {
      return  (
        <Image
          style={styles.image}
          source={{ uri: this.props.startImage.img }}
        >
          <Text style={styles.text}>{this.props.startImage.text}</Text>
        </Image>
      )
    }
    return null
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  text: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    bottom: 20,
    color: 'white',
    fontSize: 14,
    position: 'absolute',
  } as TextStyle,
})

const mapStateToProps = (store: IStore) => ({
  startImage: store.startImage,
})

const mapDispatchToProps = {
  fetchStartImages,
}

export default connect<IStateProps, IDispacthProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(StartImage)
