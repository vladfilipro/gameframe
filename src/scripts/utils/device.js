'use strict'

export let device = () => {
  let ua = navigator.userAgent || navigator.vendor || window.opera
  let device
  let browser

  // get device
  if ( ua.match( /(iPhone)/ ) ) {
    device = 'iPhone'
  } else if ( ua.match( /(iPad)/ ) ) {
    device = 'iPad'
  } else if ( ua.match( /(iPod)/ ) ) {
    device = 'iPod'
  } else if ( ua.match( /(BlackBerry|BB10)/ ) ) {
    device = 'BlackBerry'
  } else if ( ua.match( /(IEMobile|windows phone)/ ) ) {
    device = 'WindowsMobile'
  } else if ( ua.match( /(Android)/ ) ) {
    device = 'Android'
  } else if ( ua.match( /(Macintosh)/ ) ) {
    device = 'Macintosh'
  } else if ( ua.match( /(Windows)/ ) ) {
    device = 'Windows'
  } else if ( ua.match( /(Linux)/ ) ) {
    device = 'Linux'
  } else {
    device = 'other'
  }

  // We are in an iframe so we should treat it like desktop
  if ( window.location.href !== window.top.location.href ) {
    device = 'other'
  }

  // get browser
  if ( ua.indexOf( 'OPR' ) > 0 || ua.indexOf( 'Opera' ) > 0 ) {
    browser = 'Opera'
  } else if ( ua.indexOf( 'Chrome' ) > 0 ) {
    browser = 'Chrome'
  } else if ( ua.indexOf( 'Firefox' ) > 0 ) {
    browser = 'Firefox'
  } else if ( ua.indexOf( 'Safari' ) > 0 ) {
    browser = 'Safari'
  } else if ( ua.indexOf( 'MSIE' ) > 0 ) {
    browser = 'IE'
  } else {
    browser = 'other'
  }

  return {
    type: device,
    browser: browser
  }
}
