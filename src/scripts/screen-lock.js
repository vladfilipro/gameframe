'use strict'

import { _body } from './utils/selector.js'

const mouseMoveLockEvent = function ( e ) {
  e.preventDefault()
}

export let lock = ( on ) => {
  if ( on || on === undefined ) {
    _body.removeEventListener( 'touchmove', mouseMoveLockEvent, true )
    _body.addEventListener( 'touchmove', mouseMoveLockEvent, true )
  } else {
    _body.removeEventListener( 'touchmove', mouseMoveLockEvent, true )
  }
}
