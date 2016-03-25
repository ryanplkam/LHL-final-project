const path = require('path');
const webpack = require('webpack');




const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {

  debug: true,
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
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
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2|otf|ico)(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['file']
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],

  resolveLoader: {
    modulesDirectories: [
    './node_modules'
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    modulesDirectories: [
      'node_modules'
    ]
  },

  stats: {
    colors: true,
    reasons: true
  }
};
