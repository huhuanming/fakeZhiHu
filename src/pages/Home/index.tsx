import { format, isSameDay } from 'date-fns'
import React from 'react'
import { Dimensions, Image, SectionList, SectionListData, StatusBar, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { fetchBanners, IFetchBanners } from '../../actions/banner'
import { fetchPosts, IFetchPosts } from '../../actions/posts'
import Color from '../../constants/color'
import { IPost, IStore } from '../../declarations'
import Banner from './components/Banner'

interface IDispacthProps {
  navigate: any
  fetchBanners: IFetchBanners
  fetchPosts: IFetchPosts
  posts: IPost[]
}

type IProps = IDispacthProps

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
    this.props.fetchBanners()
    this.props.fetchPosts()
  }

  renderListHeaderComponent = () => <Banner />

  renderItem = (info: {item: IPost, index: number}) => (
    <View
     style={{
       backgroundColor: 'white',
       borderBottomColor: '#F7F7F7',
       borderBottomWidth: 1,
       flexDirection: 'row',
       height: 88,
       padding: 15,
      }}
    >
      <Text
        style={{ width: Dimensions.get('window').width - 30 - 85, fontSize: 16 }}
      >
        {info.item.title}
      </Text>
      <Image
        style={{ width: 85, height: 68 }}
        source={{ uri: info.item.img }}
      />
    </View>
  )

  keyExtractor = (item: IPost, index: number) => item.title

  renderSectionHeader = ({ section }: {section: SectionListData<IPost>}) => {
    if (section.key === this.props.posts[0].date) {
      return null
    }
    return (
      <View style={{ backgroundColor: Color.darkBlue}} >
        <Text style={{ color: 'white', fontSize: 16, alignSelf: 'center', paddingVertical: 5 }}>
          {format(section.key, 'MM 月 DD 日')}
        </Text>
      </View>
    )
  }

  sectionsExtractor = () => {
    if (this.props.posts.length > 0) {
      const sections = [{
        data: [this.props.posts[0]],
        key: this.props.posts[0].date,
        keyExtractor: this.keyExtractor,
        renderItem: this.renderItem,
      }]
      this.props.posts.reduce((pre, next) => {
        if (isSameDay(new Date(pre.date), new Date(next.date))) {
          sections[sections.length - 1].data.push(next)
        } else {
          sections.push({
            data: [next],
            key: next.date,
            keyExtractor: this.keyExtractor,
            renderItem: this.renderItem,
          })
        }
        return next
      })
      return sections
    }
    return []
  }

  public render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <SectionList
          ListHeaderComponent={this.renderListHeaderComponent}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.sectionsExtractor()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  fetchBanners,
  fetchPosts,
  navigate: NavigationActions.navigate,
}

export default connect<{}, IDispacthProps, {}>(mapStateToProps, mapDispatchToProps)(Index)
