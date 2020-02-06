import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { UI } from '@hyext/hy-ui'

import variables from '../../customTheme'

const { Stepper, Form } = UI

export default class StepperScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      min: 1,
      max: 500,
      value: null
    }
  }
  handleChange = (value, oldValue, action) => {
    console.log(`value: ${value}, oldValue: ${oldValue}, action: ${action}`)
    this.setState({
      value
    })
  }
  render () {
    const { min, max, value } = this.state
    return (
      <ScrollView>
        <Form>
          <Form.Item
            style={{ paddingVertical: 13 }}
            label='基础'
            hasLine>

            <View style={{ alignItems: 'flex-end' }}>
              <Stepper
                min={min}
                max={max}
                value={value}
                onChange={this.handleChange}
              />
            </View>
          </Form.Item>

          <Form.Item
            style={{ paddingVertical: 13 }}
            labelWidth={120}
            label='可编辑'
            hasLine>

            <View style={{ alignItems: 'flex-end' }}>
              <Stepper
                min={min}
                max={max}
                value={value}
                editable={true}
                onChange={this.handleChange}
              />
            </View>
          </Form.Item>

          <Form.Item
            style={{ paddingVertical: 13 }}
            labelWidth={120}
            label='自定义操作按钮'>

            <View style={{ alignItems: 'flex-end' }}>
              <Stepper
                operatorStyle={{ backgroundColor: variables.hyBrandInfo, borderRadius: 15 }}
                operatorIconColor='#fff'
                min={min}
                max={max}
                value={value}
                editable={true}
                onChange={this.handleChange}
              />
            </View>
          </Form.Item>
        </Form>
      </ScrollView>
    )
  }
}
