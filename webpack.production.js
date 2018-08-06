const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.base.js');


config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'BABEL_ENV': 'production'
    }}),
]);
config.stats = {
  all: false,
  errors: true,
  errorDetails: true,
  assets: true,
  builtAt: true,
};

config.optimization = {
  minimizer: [
    new UglifyJsPlugin()
  ]
};

module.exports = config;