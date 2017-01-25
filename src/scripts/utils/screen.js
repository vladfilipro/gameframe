'use strict'

import { _window, _body } from './selector.js'
import { uId } from './uniqueid.js'

const mouseMoveLockEvent = function ( e ) {
  e.preventDefault()
}

let lock = ( on ) => {
  if ( on || on === undefined ) {
    _body().removeEventListener( 'touchmove', mouseMoveLockEvent, true )
    _body().addEventListener( 'touchmove', mouseMoveLockEvent, true )
    _window().scrollTo( 0, _body().scrollHeight - _window().innerHeight )
  } else {
    _body().removeEventListener( 'touchmove', mouseMoveLockEvent, true )
    _window().scrollTo( 0, 0 )
  }
}

let getOrientation = () => {
  return ( _window().innerWidth > _window().innerHeight ) ? 'landscape' : 'portrait'
}

let getRatio = () => {
  return ( getOrientation() === 'landscape' ) ? _window().innerWidth / _window().innerHeight : _window().innerHeight / _window().innerWidth
}

let isSquare = () => {
  return getRatio() < 1.33
}
let isRectangular = () => {
  let ratio = getRatio()
  return ratio >= 1.33 && ratio <= 1.77
}
let isWide = () => {
  let ratio = getRatio()
  return ratio > 1.77
}
let size = {
  isSquare: isSquare,
  isRectangular: isRectangular,
  isWide: isWide,
  width: () => _window().innerWidth,
  height: () => _window().innerHeight
}

let listeners = {}
let capturing = false

let onChange = function ( e ) {
  Object.keys( listeners ).forEach( function ( key ) {
    listeners[key]( e, getOrientation(), size )
  } )
}

let capture = () => {
  if ( capturing ) {
    _window().removeEventListener( 'resize', onChange )
  }
  _window().addEventListener( 'resize', onChange )
  capturing = true
}
let release = () => {
  _window().removeEventListener( 'resize', onChange )
  listeners = {}
  capturing = false
}

export let screen = {
  getOrientation: getOrientation,
  lock: lock,
  size: size,
  capture: capture,
  release: release,
  onChange: ( listener ) => {
    let uid = uId()
    listeners[uid] = listener
    if ( capturing ) {
      listener( null, getOrientation(), size )
    }
    return () => {
      delete listeners[uid]
    }
  }
}
