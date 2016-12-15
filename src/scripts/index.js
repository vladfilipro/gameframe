'use strict'

import { _window } from './utils/selector.js'
import { GameFrame } from './gameframe.js'

let initialized = false

let init = () => {
  if ( !initialized ) {
    initialized = true
    _window.gameframe = new GameFrame()
  }
}

_window.onpageshow = function ( event ) {
  if ( event.persisted ) {
    init()
  }
}

_window.onload = function () {
  init()
}
