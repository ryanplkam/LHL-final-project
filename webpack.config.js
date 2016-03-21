const path = require('path');
const webpack = require('webpack');

module.exports = {

  context: __dirname,

  entry: {
    js: './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['babel-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ]
  },

  resolveLoader: {
    modulesDirectories: [
    'node_modules'
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  stats: {
    colors: true,
    reasons: true
  }

}
