'use strict'

import { _body, _document } from './../utils/selector.js'
import { screen } from './../utils/screen.js'
import { Blocked } from './../utils/blocked.js'

export function android ( gf ) {
  let styles = require( __dirname + '/../../styles/plugins/android.scss' )
  styles.use()
  screen.lock( true )

  let blocked = new Blocked( gf.frame )
  blocked.content( gf.config.get( 'android', 'blockedElement' ) )

  let requestFullScreen = function ( el ) {
    let fullscreen = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
    if ( fullscreen ) {
      fullscreen.call( el )
    }
  }
  let exitFullScreen = function () {
    let exitfullscreen = _document.exitFullscreen || _document.webkitExitFullscreen || _document.mozExitFullscreen || _document.msExitFullscreen
    if ( exitfullscreen ) {
      exitfullscreen.call( _document )
    }
  }
  const touchHandler = function () {
    requestFullScreen( gf.frame )
  }
  let enableFullScreenOnTouch = ( on ) => {
    if ( on || on === undefined ) {
      _body.removeEventListener( 'click', touchHandler )
      _body.addEventListener( 'click', touchHandler )
    } else {
      exitFullScreen()
      _body.removeEventListener( 'click', touchHandler )
    }
  }

  // Show / Hide fullscreen overlay
  let listener = screen.onChange( ( e, orientation ) => {
    let ucOrientation = orientation.charAt( 0 ).toUpperCase() + orientation.slice( 1 )
    // Check if current orientation is blocked
    if ( gf.config.get( 'android', 'block' + ucOrientation ) ) {
      blocked.show()
    } else {
      blocked.hide()
      if ( gf.config.get( 'android', 'fullscreen' + ucOrientation ) ) {
        enableFullScreenOnTouch( true )
      } else {
        enableFullScreenOnTouch( false )
      }
    }
  } )

  this.destroy = () => {
    listener()
    screen.lock( false )
    blocked.destroy()
    styles.unuse()
  }
}
