import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const {ScrollView, View, Text} = UI

class Index extends Component {
  constructor () {
    super()
    this.$refs = React.createRef()
  }

  onScroll = (e) => {
    console.log(e)
  }

  // scrollToLower = () => {
  //   this.$refs.current.scrollToEnd()
  // }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.scrollToLower()
  //   }, 1000)
  // }

  render () {
    return (
      <ScrollView className="demo-scrollview" nestedScrollEnabled={true} onScroll={this.onScroll}>
        <View className="demo-scroll-list">
          <Text>freedom for us</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Index
