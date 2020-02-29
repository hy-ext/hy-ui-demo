import {UI} from '@hyext/hy-ui'
import React from 'react'
import './index.hycss'

const {Text, View} = UI

function Index () {
  return (
    <View className="font-wrap">
      <Text className="font-1">hello world </Text>
      <Text className="font-2">hello world </Text>
      <Text className="font-3">hello world </Text>
      <Text className="font-4">hello world</Text>
    </View>
  )
}

export default Index
