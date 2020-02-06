import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const { Tip, View, Button } = UI

class Index extends Component {
  render () {
    return (
      <View className="demo-tip">
        <Button onPress={() => { Tip.show('笑嘻嘻') }}>点我显示Toast</Button>
      </View>
    )
  }
}

export default Index
