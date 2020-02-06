import ReactDom from 'react-dom'

export const measure = (c, cb) => {
  if (global.__os === 'web') {
    // eslint-disable-next-line react/no-find-dom-node
    const el = ReactDom.findDOMNode(c)
    const domRect = el.getBoundingClientRect()
    cb(el.offsetLeft, el.offsetTop, domRect.width, domRect.height, domRect.left, domRect.top)
  } else {
    c.measure(cb)
  }
}
