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
        <Button className="mb10" onPress={() => { this.BottomModal.open() }}><Text>显示 时：分：秒</Text></Button>
        <Button className="mb10" onPress={() => { this.BottomModal2.open() }}><Text>显示 时：分</Text></Button>
        <Button className="mb10" onPress={() => { this.BottomModal3.open() }}><Text>显示 分：秒</Text></Button>
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
            value={'15:30:16'}
          >
          </Timepicker>
        </BottomModal>
        <BottomModal
          ref={(c) => { this.BottomModal2 = c }}
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
            format={'hh:mm'}
            value={'15:30'}
          >
          </Timepicker>
        </BottomModal>
        <BottomModal
          ref={(c) => { this.BottomModal3 = c }}
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
            format={'mm:ss'}
            value={'30:16'}
          >
          </Timepicker>
        </BottomModal>
      </View>
    )
  }
}

export default Index
