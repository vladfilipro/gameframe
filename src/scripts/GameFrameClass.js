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

  self.frame = null
  self.container = null

  self.device = null

  self.config = new Config()

  self.init = () => {
    return new Promise( function ( resolve ) {
      self.destroy()

      styles.use()
      self.screen.capture()

      self.frame = _document().createElement( 'section' )
      self.frame.classList.add( 'gameframe' )
      _body().appendChild( self.frame )

      self.container = _document().createElement( 'section' )
      self.container.classList.add( 'gameframe-container' )

      self.frame.appendChild( self.container )

      self.device = plugin( self.config.getPlugins() )
      self.device.init( self )

      initialized = true

      resolve( self.container, self.device )
    } )
  }

  self.destroy = () => {
    return new Promise( function ( resolve ) {
      if ( initialized ) {
        self.screen.lock( false )
        self.screen.release()
        _body().removeChild( self.frame )
        self.container = null
        self.frame = null
        self.device.destroy()
        self.device = null

        self.config = new Config()

        styles.unuse()
        initialized = false
      }
      resolve()
    } )
  }
}
