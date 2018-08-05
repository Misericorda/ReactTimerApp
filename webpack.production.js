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
config.stats = 'errors-only';
config.optimization = {
  minimizer: [
    new UglifyJsPlugin()
  ]
};

module.exports = config;