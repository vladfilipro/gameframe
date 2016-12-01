'use strict'

import { viewport } from './options/viewport'
import { Ios } from './options/screen/ios'

let screen

const config = {
  fullscreen: true
}

module.exports = {
  init: function () {
    viewport.add()
    screen = new Ios( config )
  }
}
