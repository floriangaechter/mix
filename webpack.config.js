const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globby = require('globby');

let scssPaths = [path.resolve(__dirname, 'src/scss')];

globby.sync(['src/components/**/css']).forEach(value => {
    scssPaths.push(path.resolve(__dirname, value));
});

module.exports = {
    entry: {
        'bundle.js': './config.js',
        'bundle.css': './config.scss'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]',
        publicPath: './public'
    },
    plugins: [new ExtractTextPlugin('bundle.css', {
        allChunks: true
    })],
    sassLoader: {
        includePaths: scssPaths
    },
    devtool: 'source-map'
};
