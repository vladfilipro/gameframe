'use strict'

import { _document, _body } from './utils/selector.js'

import { Config } from './config.js'

import { device } from './utils/device.js'
import { screen } from './utils/screen.js'

import { plugin } from './plugins.js'

export function GameFrame () {
  let initialized = false

  let styles = require( './../styles/index.scss' )

  let self = this

  self.config = null

  self.screen = screen
  self.device = device()

  self.frame = null
  self.container = null

  self.plugin = null

  self.init = () => {
    self.destroy()

    styles.use()
    self.config = new Config()
    self.screen.capture()

    self.frame = _document.createElement( 'section' )
    self.frame.classList.add( 'gameframe' )
    _body.appendChild( self.frame )

    self.container = _document.createElement( 'section' )
    self.container.classList.add( 'gameframe-container' )

    self.frame.appendChild( self.container )

    self.plugin = plugin()
    self.plugin.init( self )

    let demo = _document.createElement( 'span' )
    demo.id = 'demo'
    demo.style.display = 'block'
    demo.style.position = 'absolute'
    demo.style.width = '100%'
    demo.style.bottom = '0'
    demo.innerHTML = 'This is a demo for screen control.'
    self.container.appendChild( demo )

    initialized = true
  }

  self.destroy = () => {
    if ( initialized ) {
      self.screen.lock( false )
      self.screen.release()
      _body.removeChild( self.frame )
      self.container = null
      self.frame = null
      self.plugin.destroy()
      self.plugin = null
      self.config = null
      styles.unuse()
      initialized = false
    }
  }
}
