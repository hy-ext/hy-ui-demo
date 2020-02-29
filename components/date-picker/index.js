import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'
const { Datepicker, BottomModal, Button, View, Text } = UI

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
        <Button onPress={() => { this.BottomModal.open() }}><Text>点我显示Datepicker</Text></Button>
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
          <Datepicker
            proportion={[2, 1, 1]}
            startYear={2010}
            numberOfYears={10}
            date='2016-03-30'
            onChange={(date) => {
              console.log(date)
            }}
          >
          </Datepicker>
        </BottomModal>
      </View>
    )
  }
}

export default Index
