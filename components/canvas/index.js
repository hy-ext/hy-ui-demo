import React from 'react'
import { UI } from '@hyext/hy-ui'

const { Canvas } = UI

export default class CanvasScreen extends React.Component {
  async draw () {
    var ctx = await this.$canvas.getContext('2d')
    this.$canvas.height = 200
    this.$canvas.width = 200
    const gradient = await ctx.createLinearGradient(0, 0, 200, 0)
    gradient.addColorStop(0, 'green')
    gradient.addColorStop(1, 'white')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 200, 200)
  }

  componentDidUpdate () {
    this.draw()
  }

  componentDidMount () {
    setTimeout(() => {
      this.draw()
    }, 0)
  }

  render () {
    return (
      <Canvas ref={c => { this.$canvas = c }} ></Canvas>
    )
  }
}
