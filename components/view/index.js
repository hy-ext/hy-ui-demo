import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const {Text, View} = UI

class Index extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View className="demo-view">
        <View className="demo-view-inner">
          <Text className="demo-view-text">视图容器</Text>
        </View>
      </View>
    )
  }
}

export default Index
