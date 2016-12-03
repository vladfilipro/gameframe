'use strict'

const path = require( 'path' )

module.exports = exports = {
  'scripts': path.resolve( './build/scripts' ) + '/app.js',
  'styles': path.resolve( './build/styles' ) + '/app.css',
  'html': path.resolve( './build' ) + '/index.html'
}
