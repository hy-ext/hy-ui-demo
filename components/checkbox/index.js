import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'
import variables from '../../customTheme'

const { Checkbox, Icon } = UI

export default class CheckboxScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: ['v4'],
      job: [],
      job2: []
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.header}>基础</Text>
        <View style={[styles.panel, { paddingVertical: 0 }]}>
          <Checkbox
            value={this.state.address}
            onChange={(value) => {
              this.setState({
                address: value
              })
            }}
            iconPosition='left'>
            <Checkbox.Item label='北京' value='v1' />
            <Checkbox.Item label='上海' value='v2' />
            <Checkbox.Item label='广州（禁用）' value='v4' disabled={true}/>
          </Checkbox>
        </View>

        <Text style={styles.header}>横向布局</Text>
        <View style={[styles.panel, { paddingVertical: 0 }]}>
          <Checkbox
            style={{ flexDirection: 'row' }}
            value={this.state.address}
            onChange={(value) => {
              this.setState({
                address: value
              })
            }}
            iconPosition='left'>
            <Checkbox.Item style={{ marginRight: 12 }} label='北京' value='v1' />
            <Checkbox.Item style={{ marginRight: 12 }} label='上海' value='v2' />
            <Checkbox.Item label='广州（禁用）' value='v4' disabled={true}/>
          </Checkbox>
        </View>
        <Text style={styles.header}>右边图标</Text>
        <Checkbox
          style={{ paddingHorizontal: variables.hyHSpacingXL }}
          value={this.state.job}
          iconPosition='right'
          onChange={(value) => {
            this.setState({
              job: value
            })
          }}>
          <Checkbox.Item label='选我' value='j1' />
          <Checkbox.Item label='选它' value='j2' />
        </Checkbox>

        <Text style={styles.header}>全选功能、自定义图标</Text>
        <Checkbox
          showAllCheck
          style={{ paddingHorizontal: variables.hyHSpacingXL }}
          value={this.state.job2}
          checkedIcon={<Icon type='star' size={20} tintColor={variables.hyBrandPrimaryDark} />}
          uncheckedIcon={<Icon type='star' size={20} tintColor={variables.hyGrayLightest} />}
          iconPosition='left'
          onChange={(value) => {
            console.log(value)
            this.setState({
              job2: value
            })
          }}>
          <Checkbox.Item label='上午' value='a1' />
          <Checkbox.Item label='中午' value='a2' />
          <Checkbox.Item label='下午' value='a3' />
        </Checkbox>
      </ScrollView>
    )
  }
}
