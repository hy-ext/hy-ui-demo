import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native'

import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'
import variables from '../../customTheme'
import { measure } from '../../common/util'

const { Popover, Button } = UI

const window = Dimensions.get('window')
const screenHeight = Platform.OS === 'ios' ? window.height : window.height - StatusBar.currentHeight
const directonsWithAlign = [
  {
    direction: ['right'],
    align: 'up'
  },

  {
    direction: ['up', 'right']
  },

  {
    direction: ['up'],
    align: 'right'
  },
  {
    direction: ['down'],
    align: 'right'
  },
  {
    direction: ['down', 'right']
  },
  {
    direction: ['right'],
    align: 'down'
  },
  {
    direction: ['left'],
    align: 'down'
  },
  {
    direction: ['down', 'left']
  },
  {
    direction: ['down'],
    align: 'left'
  },
  {
    direction: ['up'],
    align: 'left'
  },
  {
    direction: ['up', 'left']
  },
  {
    direction: ['left'],
    align: 'up'
  }
]
export default class PopoverScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      directionIndex: 0
    }
  }

  render () {
    const target = directonsWithAlign[this.state.directionIndex]
    return (
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.container}>

        <Button
          style={{ marginTop: 12 }}
          ref={c => {
            this.btnA = c
          }}
          size='sm'
          onPress={() => {
            measure(this.btnA, (fx, fy, width, height, px, py) => {
              this.setState({
                offsetX: px + 130,
                offsetY: py
              }, () => {
                this._popoverA.open().catch((e) => {
                  console.log(e)
                })
              })
            })
          }}>
          基础
        </Button>

        <Popover
          ref={c => {
            this._popoverA = c
          }}
          screenHeight={screenHeight}
          offsetX={this.state.offsetX}
          offsetY={this.state.offsetY}
          direction={target.direction}
          align={target.align}
          onClosed={() => {
            this.setState({
              directionIndex: (this.state.directionIndex + 1) % directonsWithAlign.length
            })
          }}>
          注意注意！！
        </Popover>

        <Button
          style={{ marginTop: 12 }}
          ref={c => {
            this.btnB = c
          }}
          size='sm'
          onPress={() => {
            measure(this.btnB, (fx, fy, width, height, px, py) => {
              this.setState({
                offsetXB: px + width,
                offsetYB: py + height
              }, () => {
                this._popoverB.open().catch((e) => {
                  console.log(e)
                })
              })
            })
          }}>
          自定义渲染内容
        </Button>

        <Popover
          ref={c => {
            this._popoverB = c
          }}
          screenHeight={screenHeight}
          offsetX={this.state.offsetXB}
          offsetY={this.state.offsetYB}
          direction='down'
          align='left'
          onClosed={() => {
            this.setState({
              directionIndex: (this.state.directionIndex + 1) % directonsWithAlign.length
            })
          }}>
          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', paddingHorizontal: 16 }}>
            <Text style={{ color: variables.hyGrayDarker, paddingVertical: variables.hyVSpacingM }}>选项一</Text>
            <Text style={{ color: variables.hyGrayDarker, paddingVertical: variables.hyVSpacingM }}>选项二</Text>
            <Text style={{ color: variables.hyGrayDarker, paddingVertical: variables.hyVSpacingM }}>选项三</Text>
          </View>
        </Popover>
      </ScrollView>
    )
  }
}
