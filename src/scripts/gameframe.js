'use strict'

import { _document, _body } from './utils/selector.js'

import { device } from './utils/device.js'
import { screen } from './utils/screen.js'

import { plugin } from './plugins.js'

export function GameFrame () {
  require( './../styles/index.scss' )

  let self = this

  screen.capture()

  self.screen = screen
  self.device = device()

  let selectedPlugin = plugin()
  self.plugin = selectedPlugin()

  self.frame = _document.createElement( 'section' )
  self.frame.classList.add( 'gameframe' )
  _body.appendChild( self.frame )

  self.container = _document.createElement( 'section' )
  self.container.classList.add( 'gameframe-container' )

  self.frame.appendChild( self.container )

  let demo = _document.createElement( 'span' )
  demo.style.display = 'block'
  demo.style.position = 'absolute'
  demo.style.width = '100%'
  demo.style.bottom = '0'
  demo.innerHTML = 'This is a demo for screen control.'
  self.container.appendChild( demo )
}
