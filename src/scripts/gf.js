'use strict'

const viewport = require( './options/viewport' )
const Screen = require( './options/screen' )
const frame = require( './options/frame' )

let screen

module.exports = {
  init: function () {
    viewport.add()
    screen = new Screen()
    screen.addExtension()
  }
}
