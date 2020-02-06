import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'
const { Timepicker, BottomModal, Button, View, Text } = UI

class Index extends Component {
  constructor () {
    super()
    this.state = {
      value: false
    }
  }

  render () {
    return (
      <View>
        <Button onPress={() => { this.BottomModal.open() }}><Text>点我显示Timepicker</Text></Button>
        <BottomModal
          ref={(c) => { this.BottomModal = c }}
          title='选择品类'
          cancelable={true}
          leftCallback={() => {
            console.log('cancel')
          }}
          rightCallback={() => {
            console.log('confirm')
          }}>
          <Timepicker
            onChange={(date) => {
              console.log(date)
            }}
            value={'15:30:15'}
          >
          </Timepicker>
        </BottomModal>
      </View>
    )
  }
}

export default Index
