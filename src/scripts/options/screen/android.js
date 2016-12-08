'use strict'

export function Android ( screen ) {
  window.addEventListener( 'resize', function () {
    screen.prevWidth = window.innerWidth
    screen.prevHeight = window.innerHeight
    screen.prevOrientation = screen.getOrientation()
  } )

  return screen
}
