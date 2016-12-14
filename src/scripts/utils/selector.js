'use strict'

export let element = ( selector, parent ) => {
  parent = parent || window.document
  return parent.querySelector( selector )
}

export let _window = window
export let _document = window.document
export let _head = window.head || element( 'head' )
export let _body = window.body || element( 'body' )
