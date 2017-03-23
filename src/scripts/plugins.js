'use strict'

import { device } from './utils/device.js'

import { merge } from './utils/deepmerge.js'

import { iphone } from './plugins/iphone.js'
import { ipad } from './plugins/ipad.js'
import { android } from './plugins/android.js'
import { fallback } from './plugins/fallback.js'

let list = {
  'iphone': {
    type: [ 'iPhone' ],
    browser: [],
    name: 'iphone',
    plugin: iphone
  },
  'ipad': {
    type: [ 'iPad' ],
    browser: [],
    name: 'ipad',
    plugin: ipad
  },
  'android': {
    type: [ 'Android' ],
    browser: [],
    name: 'android',
    plugin: android
  },
  'desktop': {
    type: [], // all types
    browser: [], // all browsers
    name: 'desktop',
    plugin: fallback
  }
}

export let plugin = ( plugins ) => {
  let deviceDetection = device()
  let type = deviceDetection.type
  let browser = deviceDetection.browser
  let PluginClass
  let name

  list = merge( list, plugins || {} )
  Object.keys( list ).forEach( function ( key ) {
    let entry = list[key]
    let typePassed = false
    let browserPassed = false
    if ( entry.type.length === 0 || entry.type.indexOf( type ) !== -1 ) {
      typePassed = true
    }
    if ( entry.browser.length === 0 || entry.browser.indexOf( browser ) !== -1 ) {
      browserPassed = true
    }
    if ( typePassed && browserPassed && !PluginClass ) {
      name = entry.name
      PluginClass = entry.plugin
    }
  } )

  let instance = null

  let output = {
    type: type,
    browser: browser,
    name: name,
    init: ( gameframe ) => {
      instance = new PluginClass( gameframe )
    },
    destroy: () => {
      instance.destroy()
      instance = null
    }
  }

  return output
}
