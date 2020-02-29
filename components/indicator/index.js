import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const {Indicator} = UI

class Index extends Component {
  constructor () {
    super()
    this.state = {
      value: false
    }
  }

  render () {
    return (
      <Indicator color="#000"></Indicator>
    )
  }
}

export default Index
