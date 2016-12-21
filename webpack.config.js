'use strict'

let path = require( 'path' )
let HtmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  entry: {
    gameframe: [
      'babel-polyfill',
      './src/gameframe.js'
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].min.js'
  },
  devServer: {
    publicPath: '/',
    hot: true,
    host: '0.0.0.0',
    'display-error-details': true,
    contentBase: __dirname + '/build'
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
    } )
  ],
  debug: true,
  devtool: 'source-map'
}
