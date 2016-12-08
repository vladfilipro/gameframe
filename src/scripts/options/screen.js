'use strict'

import { getDevice } from './device-detection'

import { Frame } from './frame'

import { Desktop } from './screen/desktop'
import { Ios } from './screen/ios'

let Screen = function ( config ) {
  config = config || {}
  let self = this

  this.configuration = {
    device: config.device || getDevice(),
    allowLandscape: ( typeof config.allowLandscape === 'boolean' ) ? config.allowLandscape : true,
    allowPortrait: ( typeof config.allowPortrait === 'boolean' ) ? config.allowPortrait : true
  }

  this.body = window.document.getElementsByTagName( 'body' )[0]
  this.body.classList.add( this.configuration.device )
  if ( this.configuration.allowLandscape ) {
    this.body.classList.add( 'allow-landscape' )
  }
  if ( this.configuration.allowPortrait ) {
    this.body.classList.add( 'allow-portrait' )
  }

  this.frame = new Frame()
  this.body.appendChild( this.frame.getElement() )

  this.prevWidth = window.innerWidth
  this.prevHeight = window.innerHeight
  this.prevOrientation = this.getOrientation()

  window.addEventListener( 'resize', function () {
    self.body.classList.remove( 'portrait' )
    self.body.classList.remove( 'landscape' )
    self.body.classList.add( self.getOrientation() )
  } )

  switch ( this.configuration.device ) {
    case 'desktop':
      Desktop( this )
      break
    case 'android':
      Desktop( this )
      break
    case 'ios':
      Ios( this )
      break
  }
}

Screen.prototype.createElement = function ( type, classes, attrs ) {
  let e = window.document.createElement( type )
  if ( Array.isArray( classes ) ) {
    classes.forEach( function ( value ) {
      e.classList.add( value )
    } )
  }
  if ( typeof attrs === 'object' ) {
    Object.keys( attrs ).forEach( function ( value ) {
      e.setAttribute( value, attrs[ value ] )
    } )
  }
  return e
}

const mouseMoveLockEvent = function ( e ) {
  e.preventDefault()
}

Screen.prototype.scrollLock = function ( on ) {
  if ( on || on === undefined ) {
    this.body.removeEventListener( 'touchmove', mouseMoveLockEvent, true )
    this.body.addEventListener( 'touchmove', mouseMoveLockEvent, true )
  } else {
    this.body.removeEventListener( 'touchmove', mouseMoveLockEvent, true )
  }
}

Screen.prototype.getOrientation = function () {
  return ( window.innerWidth > window.innerHeight ) ? 'landscape' : 'portrait'
}

export { Screen }
