"use strict";

let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/bootstrap.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle' + (process.env.PROD ? '.min' : '') + '.js',
    publicPath: './public'
  },
  plugins: [
    new ExtractTextPlugin('css/bundle' + (process.env.PROD ? '.min' : '') + '.css', {
      allChunks: true
    })
  ]
}
