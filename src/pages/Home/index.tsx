import React from 'react'
import { ScrollView, StatusBar, View, ViewStyle } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { fetchBanners, IFetchBanners } from '../../actions/banner'
import Color from '../../constants/color'
import Banner from './components/Banner'

interface IDispacthProps {
  navigate: any
  fetchBanners: IFetchBanners
}

type IProps = IDispacthProps

interface IStyle {
  banner: ViewStyle
  scorllview: ViewStyle
}

// const styles = StyleSheet.create<IStyle>({})

export class Index extends React.Component<IProps, {}> {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: Color.darkBlue,
    },
    headerTintColor: 'white',
    title: '今日热闻',
  }

  componentDidMount() {
    // this.props.navigate({ routeName: 'StartImage' })
    this.props.fetchBanners()
  }

  public render() {
    return (
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <ScrollView>
          <Banner />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  navigate: NavigationActions.navigate,
  fetchBanners,
}

export default connect<{}, IDispacthProps, {}>(mapStateToProps, mapDispatchToProps)(Index)
