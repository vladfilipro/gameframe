'use strict'

import { screen } from './../utils/screen.js'
import { Overlay } from './../utils/overlay.js'
import { Blocked } from './../utils/blocked.js'

export function iphone ( gf ) {
  let styles = require( './../../styles/plugins/iphone.scss' )
  styles.use()

  let overlay = new Overlay( gf.frame )
  overlay.content( gf.config.get( 'iphone', 'overlayElement' ) )
  let blocked = new Blocked( gf.frame )
  blocked.content( gf.config.get( 'iphone', 'blockedElement' ) )

  // Show / Hide fullscreen overlay
  let prevHeight = screen.size.height()
  let prevOrientation = screen.getOrientation()
  let listener = screen.onChange( ( e, orientation, size ) => {
    let ucOrientation = orientation.charAt( 0 ).toUpperCase() + orientation.slice( 1 )
    // Check if current orientation is blocked
    if ( gf.config.get( 'iphone', 'block' + ucOrientation ) ) {
      blocked.show()
    } else {
      blocked.hide()
      if ( gf.config.get( 'iphone', 'fullscreen' + ucOrientation ) ) {
        // Enlarging screen to fit fullscreen
        if ( orientation === 'portrait' ) {
          gf.frame.style.height = 'calc(100% + 70px)'
        }
        if ( orientation === 'landscape' ) {
          gf.frame.style.height = 'calc(100% + 1px)'
        }

        if ( prevOrientation === orientation ) {
          // On load
          if ( size.height() === prevHeight ) {
            overlay.show()
            screen.lock( false )
          }
          // Adress bar is now visible (by pressing either top or bottom part)
          if ( size.height() < prevHeight ) {
            overlay.show()
            screen.lock( false )
          }
          // Address bar is no hidden (by scrolling to bottom)
          if ( size.height() > prevHeight ) {
            overlay.hide()
            screen.lock( true )
          }
        } else if ( orientation === 'portrait' ) {
          // Changed to portrait from landscape
          overlay.show()
          screen.lock( false )
        } else if ( orientation === 'landscape' ) {
        // Changed to landscape from portrait
          overlay.hide()
          screen.lock( true )
        }
      } else {
        // Reducing screen to fit normal size (this is independent of orientation)
        gf.frame.style.height = '100%'
        overlay.hide()
        screen.lock( true )
      }
    }
    prevHeight = size.height()
    prevOrientation = orientation
  } )

  this.destroy = () => {
    listener()
    overlay.destroy()
    blocked.destroy()
    styles.unuse()
  }
}
