import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'
import variables from '../../customTheme'

const { Badge } = UI

export default class BadgeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [1, 0, 5, 9, 'A', 99, 'hot', '推荐', '增加亲密度']
    }
  }
  render () {
    const { list } = this.state
    return (
      <ScrollView style={styles.body}>
        <Text style={styles.header}>基础</Text>
        <View style={[styles.panel, { flexDirection: 'row' }]}>
          {
            list.map((item, index) => {
              return (
                <Badge style={{ marginRight: 3 }} key={index} label={item} />
              )
            })
          }
        </View>

        <Text style={styles.header}>Mini</Text>
        <View style={[styles.panel, { flexDirection: 'row' }]}>
          {
            list.map((item, index) => {
              return (
                <Badge style={{ marginRight: 3 }} key={index} />
              )
            })
          }
        </View>

        <Text style={styles.header}>自定义样式</Text>
        <View style={[styles.panel, { flexDirection: 'row', alignItems: 'center' }]}>
          {
            list.slice(0, 5).map((item, index) => {
              return (
                <Badge
                  key={index}
                  style={{ marginRight: 3, backgroundColor: 'transparent', borderColor: variables.hyBrandPrimaryDark }}
                  label={item}
                  labelStyle={{ color: variables.hyBrandPrimaryDark }}
                />
              )
            })
          }

          {
            list.slice(5, 9).map((item, index) => {
              return (
                <Badge
                  key={index}
                  style={{ marginRight: 3, backgroundColor: variables.hyBrandInfo, borderColor: variables.hyBrandInfo }}
                  label={item}
                />
              )
            })
          }
          <Badge style={{ marginRight: 3, backgroundColor: variables.hyBrandSuccess }} />
          <Badge style={{ marginRight: 3, backgroundColor: variables.hyBrandWarning }} />
          <Badge style={{ marginRight: 3, backgroundColor: variables.hyBrandPrimary }} />
        </View>
        <Text style={styles.header}>组合使用</Text>
        <View style={[styles.panel, { flexDirection: 'row', alignItems: 'center' }]}>
          <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: variables.hyGrayLight, borderRadius: 4 }}>
            <Badge style={{ position: 'absolute', top: 0, right: 0 }} />
          </View>

          <View style={{ width: 50, height: 50, backgroundColor: variables.hyGrayLight, borderRadius: 4 }}>
            <Badge style={{ position: 'absolute', top: -5, right: -5 }} label='99+' />
          </View>
        </View>
      </ScrollView>
    )
  }
}
