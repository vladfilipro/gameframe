'use strict'

import { device } from './utils/device.js'

import { iphone } from './plugins/iphone.js'
import { ipad } from './plugins/ipad.js'
import { android } from './plugins/android.js'
import { fallback } from './plugins/fallback.js'

const list = [
  {
    type: [ 'iPhone' ],
    browser: [],
    plugin: iphone
  },
  {
    type: [ 'iPad' ],
    browser: [],
    plugin: ipad
  },
  {
    type: [ 'Android' ],
    browser: [],
    plugin: android
  },
  {
    type: [], // all types
    browser: [], // all browsers
    plugin: fallback
  }
]

export let plugin = () => {
  let deviceDetection = device()
  let type = deviceDetection.type
  let browser = deviceDetection.browser
  let PluginClass

  list.forEach( function ( entry ) {
    let typePassed = false
    let browserPassed = false
    if ( entry.type.length === 0 || entry.type.indexOf( type ) !== -1 ) {
      typePassed = true
    }
    if ( entry.browser.length === 0 || entry.browser.indexOf( browser ) !== -1 ) {
      browserPassed = true
    }
    if ( typePassed && browserPassed && !PluginClass ) {
      PluginClass = entry.plugin
    }
  } )

  let output = {
    instance: null,
    type: () => PluginClass.name,
    init: ( gameframe ) => {
      if ( output.instance ) {
        output.instance.destroy()
      }
      output.instance = new PluginClass( gameframe )
    },
    destroy: () => {
      output.instance.destroy()
      output.instance = null
    }
  }

  return output
}
