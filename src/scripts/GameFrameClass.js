'use strict'

import { _document, _body } from './utils/selector.js'

import { Config } from './config.js'

import { screen } from './utils/screen.js'

import { plugin } from './plugins.js'

export function GameFrameClass () {
  let initialized = false

  let styles = require( './../styles/index.scss' )

  let self = this

  self.config = null

  self.screen = screen

  let frame = null
  self.container = null

  self.device = null

  self.config = new Config()

  self.init = () => {
    self.destroy()

    styles.use()
    self.screen.capture()

    frame = _document().createElement( 'section' )
    frame.classList.add( 'gameframe' )
    _body().appendChild( frame )

    self.container = _document().createElement( 'section' )
    self.container.classList.add( 'gameframe-container' )

    frame.appendChild( self.container )

    self.device = plugin()
    self.device.init( self )

    initialized = true
  }

  self.destroy = () => {
    if ( initialized ) {
      self.screen.lock( false )
      self.screen.release()
      _body().removeChild( frame )
      self.container = null
      frame = null
      self.device.destroy()
      self.device = null

      self.config = new Config()

      styles.unuse()
      initialized = false
    }
  }
}
