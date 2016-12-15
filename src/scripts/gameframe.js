'use strict'

import { device } from './utils/device.js'
import { screen } from './utils/screen.js'

import { plugin } from './plugins.js'

export function GameFrame () {
  let self = this

  screen.capture()

  self.screen = screen
  self.device = device()
  self.plugin = plugin()
}
