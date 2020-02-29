import React, { Component } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'

const { Button, Dropdown, Icon } = UI
const window = Dimensions.get('window')

export default class DropdownScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      value: 1,
      data: [
      ]
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: [
          {
            label: '我关注的',
            value: 1
          },
          {
            label: '离我最近',
            value: 2,
            testID: 'o1'
          },
          {
            label: '综合评分最高的的的',
            value: 3
          }
        ]
      })
    }, 300)
  }

  open (emitter, responsor, { xKey, yKey }) {
    emitter.measure((fx, fy, width, height, px, py) => {
      this.setState({
        [xKey]: fx,
        [yKey]: py + height
      }, () => {
        responsor.open()
      })
    })
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  render () {
    const { value, data } = this.state

    return (
      <ScrollView
        style={styles.body}>
        <View style={styles.container}>
          <Button
            testID='a1'
            style={{ marginTop: 12 }}
            size='sm'
            ref={(c) => {
              this.btnEl = c
            }}

            onPress={() => {
              this.open(this.btnEl, this.dropdown, {
                xKey: 'offsetX',
                yKey: 'offsetY'
              })
            }}>
            基础
          </Button>

          <Dropdown
            ref={(c) => {
              this.dropdown = c
            }}
            offsetX={this.state.offsetX}
            offsetY={this.state.offsetY}
            cancelable={true}
            value={value}
            data={data}
            onChange={this.handleChange}
          />

          <Button
            testID='btn2'
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl2 = element
            }}
            onPress={() => {
              this.open(this.btnEl2, this.slideModal2, {
                xKey: 'offsetX2',
                yKey: 'offsetY2'
              })
            }}
          >
            水平拉伸至全屏
          </Button>

          <Dropdown
            ref={c => {
              this.slideModal2 = c
            }}
            offsetX={0}
            style={{ width: window.width, height: 80 }}
            offsetY={this.state.offsetY2}
            cancelable={false}
            value={value}
            data={data}
            onChange={this.handleChange}
          />

          <Button
            testID='btn3'
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl3 = element
            }}
            onPress={() => {
              this.open(this.btnEl3, this.slideModal3,
                {
                  xKey: 'offsetX3',
                  yKey: 'offsetY3'
                })
            }}
          >
            上拉、自定义图标
          </Button>

          <Dropdown
            ref={c => {
              this.slideModal3 = c
            }}
            checkedIcon={<Icon type='star'></Icon>}
            offsetX={this.state.offsetX3}
            offsetY={this.state.offsetY3}
            direction='up'
            cancelable={true}
            value={value}
            data={data}
            onChange={this.handleChange}
          />
        </View>
      </ScrollView>
    )
  }
}
