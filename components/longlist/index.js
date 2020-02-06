import React from 'react'
import {
  View,
  Text
} from 'react-native'

import { UI } from '@hyext/hy-ui'

import styles from '../../common/styles'
import variables from '../../customTheme'

const { Longlist } = UI

const dataModal = {
  total: 10,
  list: [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    }
  ]
}

export default class LonglistScreen extends React.Component {
  fetchListTimes = void 0
  _longlist = void 0

  constructor (props) {
    super(props)
    this.fetchListTimes = 0
    this.state = {
      pageNo: 0,
      pagesize: 7,
      list: [],
      total: 0
    }
  }

  componentDidMount () {
    this.refreshState(1)
  }

  fetchList (params) {
    // const { pageNo, pagesize } = params

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataModal)
      }, 2000)
    }).catch((e) => {
      console.log(e)
    })
  }

  modifyList (list, pageNo) {
    return list.map((item, index) => {
      return {
        ...item,
        label: `第 ${pageNo} 页，第 ${index + 1} 项`
      }
    })
  }

  refreshState (pageNo) {
    pageNo = pageNo || (this.state.pageNo + 1)
    const params = {
      pageNo,
      pagesize: this.state.pagesize,
      id: '123456'
    }

    this.fetchListTimes++
    const tmpFetchListTimes = this.fetchListTimes
    return this.fetchList(params).then((resData) => {
      // Promise 一旦发起不能终止，通过请求数据的次数，判断请求是否有效
      if (tmpFetchListTimes !== this.fetchListTimes) {
        return
      }
      const pageNo = params.pageNo
      const { list, total } = resData
      const newList = this.modifyList(list, pageNo)
      const oldList = (pageNo === 1 || this.state.list == null) ? [] : this.state.list

      this.setState({
        pageNo,
        total,
        list: oldList.concat(newList)
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  render () {
    const { list, total } = this.state

    return (
      <View style={styles.body}>
        <Longlist
          ref={(c) => {
            this._longlist = c
          }}
          total={total}
          data={list}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginBottom: 12,
                  paddingVertical: 30,
                  paddingHorizontal: variables.hyHSpacingXL,
                  backgroundColor: '#fff'
                }}>
                <Text style={{ color: variables.hyGrayBase }}>{item.label}</Text>
              </View>
            )
          }}
          onEndReached={() => {
            return this.refreshState()
          }}
          onRefresh={() => {
            return this.refreshState(1)
          }}
          renderFooter={(loading, data, total) => {
            // if (data.length && data.length >= total) {
            //   return <Text style={{ color: variables.hyBrandDanger }}>无更多数据！！！</Text>
            // }
          }}
        />
      </View>
    )
  }
}
