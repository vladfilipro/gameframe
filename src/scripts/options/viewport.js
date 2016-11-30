'use strict'

const head = () => window.document.getElementsByTagName('head')[0]

const exists = () => !!head().querySelector( 'meta[name="viewport"]' )

module.exports = {
  add: () => {
    if ( !exists() ) {
      let tag = window.document.createElement( 'meta' )
      tag.setAttribute( 'name', 'viewport' )
      tag.setAttribute( 'content', 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0' )
      head().appendChild( tag )
    } else {
      console.warn( 'Viewport metatag already exists' )
    }
  },
  remove: () => {
    let viewports = head().querySelector( 'meta[name="viewport"]' )
    if ( viewports.length > 0 ) {
      for ( let i = 0; i < viewports.length; i++ ) {
        viewports[i].remove()
      }
    } else {
      console.warn( 'Viewport metatag does not exist' )
    }
  },
  exists: exists
}
