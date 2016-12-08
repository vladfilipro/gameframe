'use strict'

export function Desktop ( screen ) {
  window.addEventListener( 'resize', function () {
    screen.prevWidth = window.innerWidth
    screen.prevHeight = window.innerHeight
    screen.prevOrientation = screen.getOrientation()
  } )

  return screen
}
