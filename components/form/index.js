import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { UI, Modules } from '@hyext/hy-ui'
import styles from '../../common/styles'
import variables from '../../customTheme'
import { format } from 'fecha'

const { Icon, Input, Form, Button, Checkbox, Switch, Radio, BottomModal, Datepicker } = UI
const { helper } = Modules

export default class FormScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      filters: {
        deliveryTime: ['time_1'],
        name: 'Lulu.cc',
        store: '',
        email: '',
        phone: '',
        location: false,
        date: null
      },
      validateResults: {}
    }
    // @ts-ignore
    this.state.tmpDateDefault = format(new Date(), 'YYYY-MM-DD')

    // @ts-ignore
    this.state.tmpDate = this.state.filters.date
  }

  submitData = () => {
    const res = this.form.validate()
    console.log(res, '验证结果')
    if (res.pass) {
      // do something
    }
  }

  handleInputChange (key, v) {
    const filters = this.state.filters
    filters[key] = v
    this.setState({filters: {...filters}})
  }

  render () {
    const { filters } = this.state
    return (
      <ScrollView
        testID='scroller'
        style={styles.body}>
        <Text style={styles.header}>基本信息</Text>
        <Form
          testID='form'
          data={filters}
          ref={(ref) => { this.form = ref } }>

          <Form.Item
            style={{ paddingVertical: 13 }}
            label={
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: variables.formItemLabelWidth,
                  marginRight: variables.formItemLabelMarginRight
                }}>
                <Text style={{ color: variables.hyBrandDanger, marginRight: 2 }}>*</Text>
                <Text>姓名</Text>
                <Icon style={{ marginLeft: 4 }} type='question-circle' size={14} tintColor={variables.hyGrayLighter}></Icon>
              </View>
            }
            validate="required"
            error={['姓名不能为空']}
            name="name"
            hasLine>
            <Input testID='name' onChange={(v) => { this.handleInputChange('name', v) }} value={this.state.filters.name} placeholder='姓名' />
          </Form.Item>

          <Form.Item
            style={{ paddingVertical: 13 }}
            label='手机号码'
            validate="required|phone"
            error={['电话不能为空', '请输入正确的电话格式']}
            name="phone"
            hasLine
          >
            <Input testID='phone' onChange={(v) => { this.handleInputChange('phone', v) }} placeholder='请填写手机号码' textAlign='right' inputStyle={{ textAlign: 'right' }} value={this.state.filters.phone} />
            <Text style={{ color: variables.hyGrayLighter, fontSize: 12, marginTop: 4 }}>该信息非常重要，请认真填写</Text>
          </Form.Item>

          <Form.Item
            label='日期'
            validate="required|date"
            error={['日期不能为空', '请输入正确的日期格式']}
            name="date"
            hasLine
          >
            <TouchableOpacity
              style={{ paddingVertical: variables.hyVSpacingX3L, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}
              testID='date'
              onPress={() => {
                this._dateModal.open()
              }}>
              <Text style={{ color: variables.hyGray, marginRight: 5 }}>{filters.date ? filters.date : ' 请点击选择'}</Text>
              {
                filters.date ? <TouchableOpacity
                  testID='dateRemoveIcon'
                  onPress={() => {
                    this.setState({
                      filters: {
                        ...this.state.filters,
                        date: null
                      },
                      tmpDate: null
                    })
                  }}>
                  <Icon type='trash-o' tintColor={variables.hyBrandDanger} />
                </TouchableOpacity> : <Icon type='angle-right' size={14} tintColor={variables.hyGray} />
              }
            </TouchableOpacity>
          </Form.Item>

          <Form.Item label='是否开启定位' hasLine>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Switch
                testID='location'
                value={this.state.filters.location}
                onChange={(value) => {
                  this.setState({
                    filters: {
                      ...this.state.filters,
                      location: value
                    }
                  })
                }}
              />
            </View>
          </Form.Item>

          <Form.Item label='配送时间' hasLine>
            <View></View>
            <Checkbox
              style={{ marginTop: 5 }}
              value={this.state.filters.deliveryTime}
              onChange={null}
              iconPosition='right'>
              <Checkbox.Item label='上午' value='time_1' />
              <Checkbox.Item label='下午' value='time_2' />
              <Checkbox.Item label='晚上' value='time_3' />
            </Checkbox>
          </Form.Item>

          <Form.Item label='地址'>
            <View></View>
            <Radio
              value={this.state.address || 1}
              onChange={(value) => {
                this.setState({
                  address: value
                })
              }}
              style={{ marginTop: 5 }}
              iconPosition='right'>
              <Radio.Item testID='r1' label='北京' value={1} />
              <Radio.Item testID='r2' label='上海' value={2} />
            </Radio>
          </Form.Item>
        </Form>
        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <Button
              testID='submit'
              textColorInverse
              type='primary'
              onPress={this.submitData}>
              保存
            </Button>
          </View>
        </View>

        <BottomModal
          ref={(c) => { this._dateModal = c }}
          title='请选择日期'
          cancelable={true}
          rightCallback={() => {
            this.setState({
              filters: {
                ...this.state.filters,
                date: this.state.tmpDate || this.state.tmpDateDefault
              }
            })
          }}
          onClosed={() => {
            setTimeout(() => {
              this.setState({
                tmpDate: this.state.filters.date || this.state.tmpDateDefault
              })
            })
          }}>
          <View style={{ paddingVertical: 15 }}>
            <Datepicker
              style={{ paddingHorizontal: 50 }}
              proportion={[1, 1, 1]}
              startYear={2010}
              numberOfYears={10}
              date={this.state.tmpDate || this.state.tmpDateDefault}
              onChange={(value) => {
                this.setState({
                  tmpDate: value
                })
              }}
            />
          </View>
          { helper.renderSafeArea() }
        </BottomModal>
      </ScrollView >
    )
  }
}
