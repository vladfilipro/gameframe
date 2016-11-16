'use strict'

module.exports = ( o ) => {
  return ( on ) => {
    let preventTouchMove = function ( e ) {
      e.preventDefault()
    }

    if ( !!on === true ) {
      o.removeEventListener( 'touchmove', preventTouchMove, true )
      o.addEventListener( 'touchmove', preventTouchMove, true )
    } else {
      o.removeEventListener( 'touchmove', preventTouchMove, true )
    }
  }
}
