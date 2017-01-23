'use strict'

const webpack = require( 'webpack' )
const config = require( __dirname + '/webpack.config.js' )

let compiler = webpack( config )

compiler.run( function ( err, stats ) {
  if ( err ) {
    console.error( err )
  }
  if ( stats.hasErrors() ) {
    console.warn( stats.toString( {
      chunks: false, // Makes the build much quieter
      colors: true
    } ) )
  }
} )
