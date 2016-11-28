'use strict'

let viewport = require( './options/viewport' )

module.exports = {
  debug: function () {
    if ( !viewport.exists() ) {
      console.warn( 'Viewport metatag does not exist' )
    } else {
      console.log( 'Check - viewport metatag - ok' )
    }
  },
  init: function () {
    viewport.add()
  }
}
