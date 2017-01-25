'use strict'

let path = require( 'path' )
let webpack = require( 'webpack' )
let HtmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  entry: {
    gameframe: './src/gameframe.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'GameFrame'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join( __dirname, 'src' ),
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015' ]
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loaders: [ 'style-loader/useable', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: './src/index.html'
    } ),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
