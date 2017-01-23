'use strict'

let styles = require( './../styles/index.scss' )

import { _window } from './utils/selector.js'
import { GameFrame } from './gameframe.js'

styles.use()
_window.gameframe = _window.gameframe || new GameFrame()

_window.onpageshow = function ( event ) {
  if ( event.persisted ) {
    _window.gameframe.init()
  }
}

_window.onload = function () {
  _window.gameframe.init()
}
