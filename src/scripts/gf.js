'use strict'

import { viewport } from './options/viewport'
import { Screen } from './options/screen'

let screen

module.exports = {
  init: ( config ) => {
    viewport.add()
    screen = new Screen( config )
  },
  screen: () => {
    if ( screen ) {
      return screen
    }
  },
  frame: () => {
    if ( screen ) {
      return screen.frame
    }
  }
}
