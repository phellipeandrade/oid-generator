const webpack = require('webpack');
const webpackSettings = require('./webpack.config');

const optimizingPlugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.BannerPlugin('#!/usr/bin/env node', { raw: true }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    mangle: { toplevel: true },
    uglifyOptions: {
      mangle: true,
      toplevel: true,
      keep_classnames: false,
      keep_fnames: false,
    },
    compress: {
      passes: 2,
    },
    output: {
      beautify: false,
      preamble: '/* uglified */',
    },
  }),
  new webpack.optimize.DedupePlugin(),
];

webpackSettings.plugins = optimizingPlugins;
webpackSettings.entry = webpackSettings.entry.filter((entryName) => {
  return entryName.indexOf('hot/dev-server') === -1;
});

module.exports = webpackSettings;
