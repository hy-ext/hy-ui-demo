import { UI } from '@hyext/hy-ui'
import React from 'react'
import './index.hycss'

const { BackgroundImage, Text, View } = UI

function Index () {
  return (
    <View className="demo-backgroundImage-wrap">
      <BackgroundImage className="demo-backgroundImage" src="https://4k-m.com/upimg/bzimg/20180817160933.jpg">
        <Text className="backgroundImage-content">Hi~</Text>
      </BackgroundImage>
    </View>
  )
}

export default Index
