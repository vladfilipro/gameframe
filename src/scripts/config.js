'use strict'

import { merge } from './utils/deepmerge.js'

const defaults = {
  blockPortrait: false,
  blockLandscape: false,
  fullscreenPortrait: false,
  fullscreenLandscape: false,
  overlayElement: null,
  blockedElement: null,
  device: {
    // 'iphone': {
    //   fullscreenPortrait: false,
    //   fullscreenLandscape: true
    // },
    // 'android': {
    //   fullscreenPortrait: false,
    //   fullscreenLandscape: true
    // }
  },
  plugins: {}
}

export let Config = function () {
  let self = this

  self.configuration = merge( {}, defaults )

  self.init = ( config ) => {
    self.configuration = merge( self.configuration, config )
  }

  self.setPlugin = ( key, value ) => {
    self.configuration.plugins[key] = value
  }
  self.removePlugin = ( key ) => {
    try {
      delete self.configuration.plugins[key]
    } catch ( e ) {}
  }
  self.getPlugins = () => {
    return self.configuration.plugins
  }

  self.set = ( device, key, value ) => {
    if ( !device && key !== 'device' ) {
      self.configuration[key] = value
      return
    }
    if ( !self.configuration.device[device] ) {
      self.configuration.device[device] = {}
    }
    self.configuration.device[device][key] = value
  }

  self.get = ( device, key ) => {
    if ( device && self.configuration.device[device] && self.configuration.device[device][key] !== undefined ) {
      return self.configuration.device[device][key]
    }
    return self.configuration[key]
  }
}
