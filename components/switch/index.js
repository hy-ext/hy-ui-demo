import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { UI } from '@hyext/hy-ui'

import variables from '../../customTheme'
import styles from '../../common/styles'

const { Switch, Form } = UI

export default class SwitchScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      valueA: true
    }
  }

  onChange = (val) => {
    console.log(val)
  }

  render () {
    return (
      <ScrollView
        style={styles.body}>
        <Form>
          <Form.Item label='基础' hasLine>
            <View style={{ alignItems: 'flex-end' }}>
              <Switch value={this.state.valueA} onChange={(value) => { this.setState({ valueA: value }) }} />
            </View>
          </Form.Item>

          <Form.Item label='禁用' hasLine>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Switch style={{ marginRight: 3 }} value disabled activeColor={variables.hyGrayLight} />
              <Switch value={false} disabled />
            </View>
          </Form.Item>

          <Form.Item label='自定义'>
            <View style={{ alignItems: 'flex-end' }}>
              <Switch onChange={this.onChange} rockerSize='sm' />
            </View>
          </Form.Item>
        </Form>
      </ScrollView>
    )
  }
}
