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
        <Text>View Box</Text>
      </View>
    )
  }
}

export default Index
