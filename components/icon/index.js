import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { UI } from '@hyext/hy-ui'

import variables from '../../customTheme'
import styles from '../../common/styles'

const { Icon } = UI

const componentStyles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 12
  },
  content: {
    alignItems: 'center',
    width: 110,
    padding: 8,
    marginBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.hyGrayLighter
  },
  title: {
    marginTop: 5,
    fontSize: 10,
    color: '#666'
  }
})

export default class IconScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.container}>
        <View style={componentStyles.panel}>
          <View style={componentStyles.content}>
            <Icon size={20} type='angle-up' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-up</Text>
          </View>
          <View style={componentStyles.content}>
            <Icon size={20} type='angle-down' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-down</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-left' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-left</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-right' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-right</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-double-left' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-double-left</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-double-right' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-double-right</Text>
          </View>
          <View style={componentStyles.content}>
            <Icon size={20} type='check' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>check</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='check-circle' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>check-circle</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='plus' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>plus</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='plus-circle-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>plus-circle-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='plus-square-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>plus-square-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='question-circle' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>question-circle</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='question-circle-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>question-circle-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-left' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-left</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='angle-right' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>angle-right</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='times' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>times</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='times-circle' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>times-circle</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='times-circle-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>times-circle-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='minus' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>minus</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='star' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>star</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='star-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>star-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='star-half-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>star-half-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='search' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>search</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='ellipsis-h' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>ellipsis-h</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='user-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>user-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='users-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>users-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='camera-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>camera-o</Text>
          </View>

          <View style={componentStyles.content}>
            <Icon size={20} type='edit-o' tintColor={variables.hyGrayBase} />
            <Text style={componentStyles.title}>edit-o</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
