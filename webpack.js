'use strict'

const webpack = require( 'webpack' )
const config = require( __dirname + '/webpack.config.js' )

let compiler = webpack( config )

compiler.run( function ( err, stats ) {
  if ( stats.hasErrors() ) {
    console.error( err )
  }
} )
