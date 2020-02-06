import { UI } from '@hyext/hy-ui'
import React from 'react'
import './index.hycss'

const { BackgroundImage, Text, View } = UI

function Index () {
  return (
    <View className="demo-backgroundImage-wrap">
      <BackgroundImage className="demo-backgroundImage" src="http://img.wxcha.com/file/201911/28/cc7fc23c07.jpg">
        <Text className="backgroundImage-content">Hi~</Text>
      </BackgroundImage>
    </View>
  )
}

export default Index
