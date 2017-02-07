'use strict'

import { _document, _body } from './utils/selector.js'

import { Config } from './config.js'

import { device } from './utils/device.js'
import { screen } from './utils/screen.js'

import { plugin } from './plugins.js'

export function GameFrameClass () {
  let initialized = false

  let styles = require( './../styles/index.scss' )

  let self = this

  self.config = null

  self.screen = screen
  self.device = device()

  self.frame = null
  self.container = null

  self.plugin = null

  self.config = new Config()

  self.init = () => {
    self.destroy()

    styles.use()
    self.screen.capture()

    self.frame = _document().createElement( 'section' )
    self.frame.classList.add( 'gameframe' )
    _body().appendChild( self.frame )

    self.container = _document().createElement( 'section' )
    self.container.classList.add( 'gameframe-container' )

    self.frame.appendChild( self.container )

    self.plugin = plugin()
    self.plugin.init( self )

    initialized = true
  }

  self.destroy = () => {
    if ( initialized ) {
      self.screen.lock( false )
      self.screen.release()
      _body().removeChild( self.frame )
      self.container = null
      self.frame = null
      self.plugin.destroy()
      self.plugin = null

      self.config = new Config()

      styles.unuse()
      initialized = false
    }
  }
}