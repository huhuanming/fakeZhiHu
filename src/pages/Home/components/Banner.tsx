import React from 'react'
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import Color from '../../../constants/color'
import { IStore } from '../../../declarations'

interface IStyle {
  container: ImageStyle
  paginationStyle: ViewStyle
  shadow: ViewStyle
  title: TextStyle
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
  },
  paginationStyle: {
    bottom: 6,
  },
  shadow: {
    backgroundColor: Color.black,
    flex: 1,
    opacity: 0.3,
  },
  title: {
    bottom: 28,
    color: Color.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 18,
    position: 'absolute',
  },
})

const mapStateToProps = (state: IStore) => ({
  banners: state.banners,
})

const mapStateToPropsType = returntypeof(mapStateToProps)

type IStateProps = typeof mapStateToPropsType

// tslint:disable-next-line:no-empty-interface
interface IOwnProps {}

type IProps = IStateProps & IOwnProps

const Banner = (props: IProps) => {
  const items = props.banners.map((banner) => {
    return (
      <Image
        key={banner.title}
        source={{ uri: banner.url }}
        style={styles.container}
      >
        <View style={styles.shadow} />
        <Text style={styles.title}>{banner.title}</Text>
      </Image>
    )
  })
  return (
    <Swiper
      activeDotColor={Color.white}
      height={200}
      paginationStyle={styles.paginationStyle}
    >
      {items}
    </Swiper>
  )
}

export default connect<IStateProps, undefined, IOwnProps>(mapStateToProps)(Banner)
