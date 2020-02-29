import React, { Component } from 'react'
import { UI, Modules } from '@hyext/hy-ui'

const { createSound } = Modules
const { Button } = UI

export default class SoundScreen extends Component {
  sound = null

  constructor (p) {
    super(p)
    this.state = {
      isPlaying: false,
      playEnd: false
    }
  }

  componentDidMount () {
    this.sound = createSound('https://livewebbs2.msstatic.com/qguess-countdown2.mp3', (err) => { console.log(err, 'Sound1') })
  }

  componentWillUnmount () {
    if (this.sound) {
      try {
        this.sound.release()
      } catch (e) {}
    }
  }

  handlePress = () => {
    let { isPlaying } = this.state
    if (isPlaying) {
      this.sound.pause()
    } else {
      this.sound.play(() => {
        this.setState({playEnd: true})
      })
    }
    this.setState({isPlaying: !isPlaying})
  }

  render () {
    const { isPlaying, playEnd } = this.state
    const text = playEnd ? '播放已结束' : isPlaying ? '停止' : '播放'
    const type = playEnd ? 'danger' : ''
    return <Button type={type} disabled={playEnd} onPress={this.handlePress}>{text}</Button>
  }
}
