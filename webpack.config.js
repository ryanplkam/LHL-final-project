const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  context: __dirname,

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/static/'
  },

  module: {

    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel']
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },

    ]

  }

}