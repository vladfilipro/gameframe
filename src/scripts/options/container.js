'use strict'

module.exports = ( o ) => {
  return ( parent ) => {
    parent.style.margin = 0
    parent.style.padding = 0
    let e = o.document.createElement( 'section' )
    let s = e.style
    s.position = 'absolute'
    s.overflow = 'hidden'
    s.top = 0
    s.left = 0
    s.bottom = 0
    s.right = 0
    e.setAttribute( 'id', 'gameframe' )
    parent.appendChild( e )
  }
}
