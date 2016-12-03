'use strict'

export function Frame () {
  const frame = document.createElement( 'section' )
  frame.classList.add( 'gameframe' )

  this.getElement = () => frame
}
