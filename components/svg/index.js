import {UI} from '@hyext/hy-ui'
import React from 'react'
import './index.hycss'

const {Circle, Rect, Svg} = UI.svgType

function Index () {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
    </Svg>
  )
}

export default Index
