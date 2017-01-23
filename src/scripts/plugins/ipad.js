'use strict'

import { screen } from './../utils/screen.js'
import { Blocked } from './../utils/blocked.js'

export function ipad ( gf ) {
  let styles = require( '/../../styles/plugins/ipad.scss' )
  styles.use()
  screen.lock( true )

  let blocked = new Blocked( gf.frame )
  blocked.content( gf.config.get( 'ipad', 'blockedElement' ) )

  // Show / Hide fullscreen overlay
  let listener = screen.onChange( ( e, orientation ) => {
    let ucOrientation = orientation.charAt( 0 ).toUpperCase() + orientation.slice( 1 )
    // Check if current orientation is blocked
    if ( gf.config.get( 'ipad', 'block' + ucOrientation ) ) {
      blocked.show()
    } else {
      blocked.hide()
    }
  } )

  this.destroy = () => {
    listener()
    screen.lock( false )
    blocked.destroy()
    styles.unuse()
  }
}
