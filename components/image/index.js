import {UI} from '@hyext/hy-ui'
import React, {Component} from 'react'
import './index.hycss'

const {Image} = UI

class Index extends Component {
  constructor () {
    super()
    this.state = {count: 1}
  }

  imgLoad = (e) => {
    console.log('图片加载完成1', e)
  }

  render () {
    return (
      <Image className="demo-image" mode="cover" onLoad={this.imgLoad} src={require('../../img//image-demo.jpg')}></Image>
    )
  }
}

export default Index
