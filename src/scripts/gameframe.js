'use strict'

function GameFrame ( o ) {
  let self = this
  let initialized = false

  let lockScreen = require( './options/lock-screen' )( o )
  let hideBrowserElements = require( './options/hide-browser-elements' )( o )
  let viewport = require( './options/viewport' )( o )

  this.lockScreen = lockScreen
  this.hideBrowserElements = hideBrowserElements
  this.viewport = viewport

  this.init = function () {
    initialized = true
    self.viewport.add()
    self.lockScreen( true )
    self.hideBrowserElements()

    // Resize
    o.addEventListener( 'resize', function () {
      self.hideBrowserElements()
    }, false )
  }

  this.isWorking = function () {
    return initialized
  }
}

module.exports = GameFrame
