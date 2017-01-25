'use strict'

import { _document } from './selector.js'

export function Blocked ( frame ) {
  let e = _document().createElement( 'section' )
  e.classList.add( 'gameframe-blocked' )
  frame.appendChild( e )

  let content = _document().createElement( 'div' )
  content.classList.add( 'gameframe-blocked-default' )
  let img = _document().createElement( 'img' )
  img.src = require( './../../images/phone-icon.png' )
  content.appendChild( img )
  e.appendChild( content )

  this.content = ( element ) => {
    if ( !element ) {
      return
    }
    e.removeChild( content )
    e.appendChild( element )
  }

  this.get = () => {
    return e
  }

  let visible = true
  this.show = () => {
    if ( !visible ) {
      e.style.display = 'flex'
      visible = true
    }
  }
  this.hide = () => {
    if ( visible ) {
      e.style.display = 'none'
      visible = false
    }
  }
  this.destroy = () => {
    frame.removeChild( e )
  }

  this.hide()
}
