'use strict'

module.exports = ( o ) => {
  return () => {
    o.setTimeout( () => {
      o.scroll( 0, 1 )
    }, 1 )
  }
}
