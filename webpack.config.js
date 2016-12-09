'use strict'

module.exports = {
  context: __dirname + '/src',
  entry: {
    gameframe: './gameframe.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].min.js'
  },
  devServer: {
    contentBase: __dirname + '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [ {
          loader: 'babel-loader',
          options: {
            presets: [ 'es2015', { 'modules': false } ]
          }
        } ]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}
