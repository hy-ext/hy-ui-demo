import React, { Component } from 'react'
import { ScrollView, View, Text, Dimensions, StatusBar, Platform } from 'react-native'
import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'
import { measure } from '../../common/util'

const { Button, SlideModal } = UI

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

export default class SlideModalScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      directionIndex: 0
    }
  }

    handleClosePinwheel = () => {
      this.slideModalA.close()
      this.slideModalB.close()
      this.slideModalC.close()
      this.slideModalD.close()
    }

    render () {
      const target = directonsWithAlign[this.state.directionIndex]
      const contentEl = <View style={{ backgroundColor: '#fff', width: 50, height: 40 }}></View>
      const centerX = window.width / 2
      const centerY = window.height / 2

      return (
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.container}>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            onPress={() => {
              this.slideModal.open()
            }}>
                    基础
          </Button>

          <SlideModal
            ref={c => {
              this.slideModal = c
            }}
            screenHeight={screenHeight}
            cancelable={true}
          >
            <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 4 }}>
              <View>
                <Text style={{ backgroundColor: '#fff' }}>自定义内容</Text>
                <Text>内容比较简单，完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            onPress={() => {
              this.slideModalX.open()
            }}>
                    自定义样式
          </Button>

          <SlideModal
            ref={c => {
              this.slideModalX = c
            }}
            styles={{
              container: { top: 100, bottom: 100, left: 100, right: 100 },
              backdrop: [{ backgroundColor: 'red' }],
              content: { width: '100%' }
            }}
            screenHeight={screenHeight}
            cancelable={true}>

            <View style={{ backgroundColor: '#fff', padding: 20 }}>
              <View>
                <Text style={{ backgroundColor: '#fff' }}>自定义内容</Text>
                <Text>内容比较简单，完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl2 = element
            }}
            onPress={() => {
              measure(this.btnEl2, (fx, fy, width, height, px, py) => {
                this.setState({
                  offsetX2: px + 130,
                  offsetY2: py
                }, () => {
                  this.slideModal2.open().catch((e) => {
                    console.log(e)
                  })
                })
              })
            }}
          >
                    指定位置，自定义滑动方向，全屏
          </Button>

          <SlideModal
            ref={c => {
              this.slideModal2 = c
            }}
            screenHeight={screenHeight}
            offsetX={this.state.offsetX2}
            offsetY={this.state.offsetY2}
            direction={target.direction}
            align={target.align}
            cancelable={true}
            fullScreenPatch={[true, true, true]}
            onClose={(...args) => {
              console.log(args, 'close')
            }}
            onClosed={(...args) => {
              console.log(args, 'closed')
              this.setState({
                directionIndex: (this.state.directionIndex + 1) % directonsWithAlign.length
              })
            }}
          >
            <View style={{ backgroundColor: '#fff', padding: 10 }}>
              <View>
                <Text>自定义内容</Text>
                <Text>完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl3 = element
            }}
            onPress={() => {
              measure(this.btnEl3, (fx, fy, width, height, px, py) => {
                this.setState({
                  // offsetX3: px,
                  offsetY3: py + height
                }, () => {
                  this.slideModal3.open()
                })
              })
            }}
          >
                    指定位置、下滑、全屏
          </Button>

          <SlideModal
            ref={c => {
              this.slideModal3 = c
            }}
            screenHeight={screenHeight}
            fullScreenPatch={[true, true, true]}
            offsetX={0}
            offsetY={this.state.offsetY3}
            direction='down'
            cancelable={true}
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 20,
                width: window.width
              }}>
              <View>
                <Text>自定义内容</Text>
                <Text>内容比较简单，完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl4 = element
            }}
            onPress={() => {
              measure(this.btnEl4, (fx, fy, width, height, px, py) => {
                this.setState({
                  offsetX4: px + width,
                  offsetY4: py + height
                }, () => {
                  this.slideModal4.open()
                })
              })
            }}
          >
                    指定位置、左滑、局部
          </Button>

          <SlideModal
            ref={c => {
              this.slideModal4 = c
            }}
            screenHeight={screenHeight}
            offsetX={this.state.offsetX4}
            offsetY={this.state.offsetY4}
            direction='left'
            cancelable={true}
          >
            <View style={{ backgroundColor: '#fff', padding: 20 }}>
              <View>
                <Text>自定义内容</Text>
                <Text>内容比较简单，完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            ref={element => {
              this.btnEl5 = element
            }}
            onPress={() => {
              measure(this.btnEl5, (fx, fy, width, height, px, py) => {
                this.setState({
                  offsetX5: px,
                  offsetY5: py + height
                }, () => {
                  this.slideModal5.open()
                })
              })
            }}
          >
                    指定位置、右滑
          </Button>

          <SlideModal
            ref={c => {
              this.slideModal5 = c
            }}
            screenHeight={screenHeight}
            offsetX={this.state.offsetX5}
            offsetY={0}
            direction='right'
            cancelable={true}
          >
            <View
              style={{
                height: window.height,
                backgroundColor: '#fff',
                padding: 20
              }}
            >
              <View>
                <Text>自定义内容</Text>
                <Text>内容比较简单，完全由用户自定义</Text>
              </View>
            </View>
          </SlideModal>

          <Button
            style={{ marginTop: 12 }}
            size='sm'
            onPress={() => {
              this.slideModalA.open()
              this.slideModalB.open()
              this.slideModalC.open()
              this.slideModalD.open()
            }}
          >
                    大风车
          </Button>

          <SlideModal
            ref={c => {
              this.slideModalA = c
            }}
            screenHeight={screenHeight}
            offsetX={centerX}
            offsetY={centerY}
            cancelable={true}
            direction={directonsWithAlign[0].direction}
            align={directonsWithAlign[0].align}
            onClose={this.handleClosePinwheel}
          >
            {contentEl}
          </SlideModal>

          <SlideModal
            ref={c => {
              this.slideModalB = c
            }}
            screenHeight={screenHeight}
            offsetX={centerX}
            offsetY={centerY}
            cancelable={true}
            direction={directonsWithAlign[3].direction}
            align={directonsWithAlign[3].align}
            onClose={this.handleClosePinwheel}
          >
            {contentEl}
          </SlideModal>

          <SlideModal
            ref={c => {
              this.slideModalC = c
            }}
            screenHeight={screenHeight}
            offsetX={centerX}
            offsetY={centerY}
            cancelable={true}
            direction={directonsWithAlign[6].direction}
            align={directonsWithAlign[6].align}
            onClose={this.handleClosePinwheel}
          >
            {contentEl}
          </SlideModal>

          <SlideModal
            ref={c => {
              this.slideModalD = c
            }}
            screenHeight={screenHeight}
            offsetX={centerX}
            offsetY={centerY}
            cancelable={true}
            direction={directonsWithAlign[9].direction}
            align={directonsWithAlign[9].align}
            onClose={this.handleClosePinwheel}
          >
            {contentEl}
          </SlideModal>
        </ScrollView>
      )
    }
}
