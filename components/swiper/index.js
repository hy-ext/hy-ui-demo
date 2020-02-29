import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const {Swiper, View} = UI

class Index extends Component {
  constructor () {
    super()
    this.state = {
      value: false
    }
  }

  handleIndexChange = (e) => {
    console.log(e)
  }

  render () {
    return (
      <View className={'demo-swiper'}>
        <Swiper showsButtons autoplay index={1}>
          <View className={'demo-swiper-item1'}></View>
          <View className={'demo-swiper-item2'}></View>
          <View className={'demo-swiper-item3'}></View>
        </Swiper>
      </View>
    )
  }
}

export default Index
