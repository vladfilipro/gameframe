'use strict'

import { getDevice } from './options/device-detection'

import { viewport } from './options/viewport'
import { Screen } from './options/screen'

let screen

const config = {
  device: getDevice(),
  allowLandscape: true,
  allowPortrait: false
}

module.exports = {
  init: function () {
    viewport.add()
    screen = new Screen( config )
  }
}
